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

module.exports.getPigs = getPigs;
