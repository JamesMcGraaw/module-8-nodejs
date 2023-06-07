// This is like a DAO
const dbService = require('../services/dbService');
const objectId = require('mongodb').ObjectId;

let pigsCollection = null;
dbService.connectToDB()
    .then((db) => pigsCollection = db.collection('pigs'));

const getPigs = async () => {
    console.log('Repository: getPigs');
    return await pigsCollection.find({}).toArray();
}

const getPig = async (pigName) => {
    console.log('Repository: getPig');
    return await pigsCollection.findOne({"name" : pigName });
}

const addPig = async (newPig) => {
    console.log('Repository: addPig');
    return await pigsCollection.insertOne(newPig);
}

const deletePig = async (pigName) => {
    console.log('Repository: deletePig');
    return await pigsCollection.deleteOne({"name" : pigName});
}

const updatePig = async (pigName, updatedField) => {
    console.log('Repository: updatePig');
    return await pigsCollection.updateOne({"name" : pigName}, {$set : updatedField});
}

module.exports.getPigs = getPigs;
module.exports.getPig = getPig;
module.exports.addPig = addPig;
module.exports.deletePig = deletePig;
module.exports.updatePig = updatePig;