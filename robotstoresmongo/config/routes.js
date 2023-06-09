const productsController = require('../controllers/productsController');
const routes = (app) => {
    app.get('/products', productsController.getProducts);
    app.get('/categories', productsController.getCategories)
    app.get('/characters', productsController.getCharacters)
    app.get('/products/:id', productsController.getProduct);
    app.post('/products', productsController.addProduct)
}

module.exports = routes;
