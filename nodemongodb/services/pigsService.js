const pigsRepository = require('../repositories/pigsRepository');

const getPigs = async () => {
    console.log('Service: getPigs');
    const query = await pigsRepository.getPigs();
    if (query !== null) {
        return query
    } else {
        return {"message" : "No pigs found"}
    }
};

const getPig = async (pigName) => {
    console.log('Service: getPig');
    const query = await pigsRepository.getPig(pigName);
    if (query !== null) {
        return query
    } else {
        return {"message" : "No pig found"}
    }
}

module.exports.getPigs = getPigs;
module.exports.getPig = getPig;
