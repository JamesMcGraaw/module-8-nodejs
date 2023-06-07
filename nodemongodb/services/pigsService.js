const pigsRepository = require('../repositories/pigsRepository');

const getPigs = async () => {
    console.log('Service: getPigs');
    return await pigsRepository.getPigs();
};

module.exports.getPigs = getPigs;
