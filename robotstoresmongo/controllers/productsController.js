const productsService = require('../services/productsService');

const getProducts = (req, res) => {
    console.log('Controller: getProducts');

    const categories = req.query.categories;
    const characters = req.query.characters;

    productsService.getProducts(categories, characters)
        .then((allProducts) => {
            const message = {"message": "Successfully found products.", "data": allProducts}
            res.send(message)
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
            const message = {"message": "Successfully found categories.", "data": allCategories}
            res.send(message)
    })
}

const getCharacters = (req, res) => {
    console.log('Controller: getCharacters');
    productsService.getCharacters(req, res).then((allCharacters) => {
        const message = {"message": "Successfully found characters.", "data": allCharacters}
        res.send(message)
    })
}

const getProduct = (req, res) => {
    console.log('Controller: getProduct');
    const productID = req.params.id
    productsService.getProduct(productID).then((product) => {
        const message = {"message": "Successfully found product.", "data": product}
        res.send(message)
    })
    .catch((error) => {
        let status = 500;
        const message = {"message": error.message, "data": []}

        if (error.message.startsWith("Unknown")) {
            status = 400;
        }
        res.status(status).send(message);
    })
}

const addProduct = (req, res) => {
    console.log('Controller: addProduct')
    const newProduct = req.body;

    productsService.addProduct(newProduct).then((result) => {
        const message = {"message": "Successfully created product."}
        res.send(message);
    })
    .catch((error) => {
        let status = 500;
        const message = {"message": error.message, "data": []}

        if (error.message.startsWith("Invalid")) {
            status = 400;
    }
        res.status(status).send(message);
    })
}

module.exports.getProducts = getProducts;
module.exports.getCategories = getCategories;
module.exports.getCharacters = getCharacters;
module.exports.getProduct = getProduct;
module.exports.addProduct = addProduct;
