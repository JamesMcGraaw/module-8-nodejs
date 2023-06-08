const productsRepository = require('../repositories/productsRepository');

const getProducts = async () => {
    console.log('Service: getProducts');
    const query = await productsRepository.getProducts();

    return {"message": "Successfully found products.", "data": query}
};
//
// const getPig = async (pigName) => {
//     console.log('Service: getPig');
//     const query = await pigsRepository.getPig(pigName);
//     if (query !== null) {
//         return query
//     } else {
//         return {"message" : "No pig found"}
//     }
// }
//
// const addPig = async (newPig) => {
//     console.log('Service: addPig');
//     // Could validate newPig details here
//     return await pigsRepository.addPig(newPig);
// }
//
// const deletePig = async (pigName) => {
//     console.log('Service: deletePig');
//     return await pigsRepository.deletePig(pigName);
// }
//
// const updatePig = async (pigName, updatedField) => {
//     console.log('Service: updatePig');
//     const objectKeysArray = Object.keys(updatedField)
//
//     if (objectKeysArray.includes('weight')) {
//         updatedField.weight = Number(updatedField.weight);
//     }
//     return await pigsRepository.updatePig(pigName, updatedField);
// }

module.exports.getProducts = getProducts;
// module.exports.getPig = getPig;
// module.exports.addPig = addPig;
// module.exports.deletePig = deletePig;
// module.exports.updatePig = updatePig;
