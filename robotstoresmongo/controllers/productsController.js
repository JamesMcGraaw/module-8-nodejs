const productsService = require('../services/productsService');

const getProducts = (req, res) => {
    console.log('Controller: getProducts');

    const categories = req.query.categories;
    const characters = req.query.characters;

    productsService.getProducts(categories, characters)
        .then((allProducts) => {
            res.send(allProducts)
        })
        .catch((error) => {
            let status = 500
            let message = {"message": error.message, "data": []}

            if (error.message.startsWith("Unknown")) {
                status = 400;
            }
            res.status(status).send(message)
        });
}

const getCategories = (req, res) => {
    console.log('Controller: getCategories');
    productsService.getCategories(req, res)
        .then((allCategories) => {
            res.json(allCategories)
    })
}

const getCharacters = (req, res) => {
    console.log('Controller: getCharacters');
    productsService.getCharacters(req, res).then((allCharacters) => {
        res.json(allCharacters)
    })
}

const getProduct = (req, res) => {
    console.log('Controller: getProduct');
    const productID = req.params.id
    productsService.getProduct(productID).then((product) => {
        res.json(product)
    })
}

module.exports.getProducts = getProducts;
module.exports.getCategories = getCategories;
module.exports.getCharacters = getCharacters;
module.exports.getProduct = getProduct;
