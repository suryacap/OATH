const crypto = require('crypto');

const akaveService = {
    generateHash: (data) => {
        return crypto.createHash('sha256').update(data).digest('hex');
    },

    generateDummyUrl: (hash) => {
        return `https://akave-cloud.com/${hash}`;
    },

    simulateUpload: (data) => {
        const hash = akaveService.generateHash(data);
        const url = akaveService.generateDummyUrl(hash);
        return { hash, url };
    }
};

module.exports = akaveService;