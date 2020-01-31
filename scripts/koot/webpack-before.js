const path = require('path');
const spinner = require('koot/utils/spinner');
const spawn = require('../libs/spawn');
const log = require('../libs/log');

module.exports = async ({ dist, apiServer }) => {
    if (process.env.DREAMARI_DATA_PROCESSED) return;

    // eslint-disable-next-line no-console
    console.log(' ');

    const msg = log('', `Processing assets`, false);
    const waiting = spinner(msg + '...');

    await spawn(`node ${path.resolve(__dirname, '../build/photos.js')}`);
    await spawn(`node ${path.resolve(__dirname, '../build/vlogs.js')}`);

    waiting.stop();
    spinner(msg).succeed();

    process.env.DREAMARI_DATA_PROCESSED = true;
};
