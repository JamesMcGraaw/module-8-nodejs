const dbService = require('../services/dbService');

let productsCollection = null;

dbService.connectToDB()
    .then((db) => productsCollection = db.collection('products'));

const getProducts = async () => {
    console.log('Repository: getProducts');
    return await productsCollection.find({}, {projection:{id: 1, title: 1, price: 1, image: 1, category: 1, character: 1}}).toArray();
}

// const getPig = async (pigName) => {
//     console.log('Repository: getPig');
//     return await pigsCollection.findOne({"name" : pigName });
// }
//
// const addPig = async (newPig) => {
//     console.log('Repository: addPig');
//     return await pigsCollection.insertOne(newPig);
// }
//
// const deletePig = async (pigName) => {
//     console.log('Repository: deletePig');
//     return await pigsCollection.deleteOne({"name" : pigName});
// }
//
// const updatePig = async (pigName, updatedField) => {
//     console.log('Repository: updatePig');
//     return await pigsCollection.updateOne({"name" : pigName}, {$set : updatedField});
// }

module.exports.getProducts = getProducts;
// module.exports.getPig = getPig;
// module.exports.addPig = addPig;
// module.exports.deletePig = deletePig;
// module.exports.updatePig = updatePig;