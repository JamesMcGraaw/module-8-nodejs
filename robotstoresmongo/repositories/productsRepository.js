const dbService = require('../services/dbService');
const {ObjectId} = require('mongodb');

let productsCollection = null;

dbService.connectToDB()
    .then((db) => productsCollection = db.collection('products'));

const getProducts = async (categoriesArray, charactersArray) => {
    console.log('Repository: getProducts');

    return await productsCollection.find(
        {$or: [{category: {$in: categoriesArray}}, {character: charactersArray}]},
        {projection: {id: 1, title: 1, price: 1, image: 1, category: 1, character: 1}}).toArray();

}

const getCategories = async () => {
    return await productsCollection.distinct('category');
}

const getCharacters = async () => {
    return await productsCollection.distinct('character');
}

const getProduct = async (productID) => {
    console.log('Repository: getProduct')
    return await productsCollection.findOne({_id: new ObjectId(productID)})
}

const addProduct = async (newProduct) => {
    console.log('Repository: addProduct')
    return await productsCollection.insertOne(newProduct)
}

module.exports.getProducts = getProducts;
module.exports.getCategories = getCategories;
module.exports.getCharacters = getCharacters;
module.exports.getProduct = getProduct;
module.exports.addProduct = addProduct;
