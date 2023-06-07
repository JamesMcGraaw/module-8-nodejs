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

const addPig = async (newPig) => {
    console.log('Service: addPig');
    // Could validate newPig details here
    return await pigsRepository.addPig(newPig);
}

const deletePig = async (pigName) => {
    console.log('Service: deletePig');
    return await pigsRepository.deletePig(pigName);
}

const updatePig = async (pigName, updatedField) => {
    console.log('Service: updatePig');
    const objectKeysArray = Object.keys(updatedField)

    if (objectKeysArray.includes('weight')) {
        updatedField.weight = Number(updatedField.weight);
    }
    return await pigsRepository.updatePig(pigName, updatedField);
}

module.exports.getPigs = getPigs;
module.exports.getPig = getPig;
module.exports.addPig = addPig;
module.exports.deletePig = deletePig;
module.exports.updatePig = updatePig;
