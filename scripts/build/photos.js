const fs = require('fs-extra');
const path = require('path');
const sharp = require('sharp');
const md5 = require('md5');

const dirOrig = path.resolve(__dirname, '../../src/assets/photos');
const dirSaveTo = path.resolve(__dirname, '../../.data/photos');
const dirDataTo = path.resolve(__dirname, '../../data/photos');

// ============================================================================

(async () => {
    await fs.ensureDir(dirSaveTo);
    await fs.ensureDir(dirDataTo);
    await fs.emptyDir(dirSaveTo);

    const allPhotos = [];

    const files = (await fs.readdir(dirOrig))
        .map(filename => path.resolve(dirOrig, filename))
        .filter(file => !fs.lstatSync(file).isDirectory());

    for (const file of files) {
        allPhotos.push(await processPhoto(file));
    }

    // 保存至文件
    await fs.writeFile(
        path.resolve(dirDataTo, 'index.js'),
        `export default ${JSON.stringify(allPhotos, undefined, 4).replace(
            /"require\(\*\*\*\*(.+?)\*\*\*\*\)"/g,
            `require("$1")`
        )}`
    );
})();

// ============================================================================

const processPhoto = async file => {
    const matches = /^(\d+)\.(\d+)/.exec(path.basename(file));
    const day =
        !Array.isArray(matches) || matches.length < 3
            ? 0
            : parseInt(matches[1]);
    const sort =
        !Array.isArray(matches) || matches.length < 3
            ? 1
            : parseInt(matches[2]);

    const resultObj = {
        day,
        sort
    };

    const extname = path.extname(file);
    const newFile = path.resolve(dirSaveTo, `${md5(file)}${extname}`);
    await fs.copy(file, path.resolve(dirSaveTo, newFile), {
        overwrite: true
    });

    resultObj.orig = `require(****${newFile}****)`;

    await sharp(file)
        .resize(400)
        .jpeg({
            quality: 51
        })
        .toBuffer({ resolveWithObject: true })
        .then(({ data, info }) => {
            const saveTo = path.resolve(
                dirSaveTo,
                `${md5(data)}.${info.format === 'jpeg' ? 'jpg' : info.format}`
            );
            resultObj.thumbnail = `require(****${saveTo}****)`;
            return fs.writeFile(saveTo, data);
        });

    return resultObj;
};
