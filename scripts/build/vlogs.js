const fs = require('fs-extra');
const path = require('path');
const sharp = require('sharp');
const md5 = require('md5');
const format = require('date-format');

const dirOrig = path.resolve(__dirname, '../../src/assets/vlog-thumbnails');
const dirSaveTo = path.resolve(__dirname, '../../.data/vlogs');
const dirDataTo = path.resolve(__dirname, '../../data/vlogs');

const startDay = 15;
const startDate = new Date(2020, 0, startDay);
const vlogs = {
    1: {
        YouTube: 'https://youtu.be/yRRmwsP_1j0',
        哔哩哔哩: 'https://www.bilibili.com/video/av83606309/'
    },
    2: {
        YouTube: 'https://youtu.be/jQe-hEr1qxM',
        哔哩哔哩: 'https://www.bilibili.com/video/av83760965/'
    },
    3: {
        YouTube: 'https://youtu.be/OoXutwjJC6s',
        哔哩哔哩: 'https://www.bilibili.com/video/av83902658/'
    },
    4: {
        YouTube: 'https://youtu.be/V0V_jRITOQ0',
        哔哩哔哩: 'https://www.bilibili.com/video/av84039775/'
    },
    5: {
        YouTube: 'https://youtu.be/MATl9TlWgf4',
        哔哩哔哩: 'https://www.bilibili.com/video/av84185280/'
    },
    6: {
        YouTube: 'https://youtu.be/Mpv5LmsuTlc',
        哔哩哔哩: 'https://www.bilibili.com/video/av84346494/'
    },
    7: {
        YouTube: 'https://youtu.be/hHyGtEfq_fE',
        哔哩哔哩: 'https://www.bilibili.com/video/av84490365/'
    },
    8: {
        YouTube: 'https://youtu.be/zM_8dQf1FD8',
        哔哩哔哩: 'https://www.bilibili.com/video/av84620654/'
    },
    9: {
        YouTube: 'https://youtu.be/Fa5XKgpgFfs',
        哔哩哔哩: 'https://www.bilibili.com/video/av84775597/'
    },
    10: {
        YouTube: 'https://youtu.be/-pgATIYx-ys',
        哔哩哔哩: 'https://www.bilibili.com/video/av84907866/'
    }
};

// ============================================================================

(async () => {
    await fs.ensureDir(dirSaveTo);
    await fs.ensureDir(dirDataTo);
    await fs.emptyDir(dirSaveTo);

    const allVlogs = [];

    const files = (await fs.readdir(dirOrig))
        .map(filename => path.resolve(dirOrig, filename))
        .sort((a, b) => {
            const baseA = path.basename(a);
            const baseB = path.basename(b);
            return parseInt(baseA) - parseInt(baseB);
        })
        .filter(file => !fs.lstatSync(file).isDirectory());

    for (const file of files) {
        allVlogs.push(await processVlog(file));
    }

    // 保存至文件
    await fs.writeFile(
        path.resolve(dirDataTo, 'index.js'),
        `export default ${JSON.stringify(allVlogs, undefined, 4).replace(
            /"require\(\*\*\*\*(.+?)\*\*\*\*\)"/g,
            `require("$1")`
        )}`
    );
})();

// ============================================================================

const processVlog = async file => {
    const day = parseInt(path.basename(file));
    startDate.setDate(startDay + day - 1);
    const resultObj = {
        title: `VLog Day #${day}`,
        date: format('yyyy-MM-dd', startDate),
        day,
        sort: 0,
        links: vlogs[day]
    };

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

    // 处理模糊图片
    await sharp(file)
        // .resize(900)
        .blur(20)
        .modulate({
            brightness: 0.75
        })
        .jpeg({
            quality: 61
        })
        .toBuffer({ resolveWithObject: true })
        .then(({ data, info }) => {
            const saveTo = path.resolve(
                dirSaveTo,
                `${md5(data)}.${info.format === 'jpeg' ? 'jpg' : info.format}`
            );
            resultObj.orig = `require(****${saveTo}****)`;
            return fs.writeFile(saveTo, data);
        });

    return resultObj;
};
