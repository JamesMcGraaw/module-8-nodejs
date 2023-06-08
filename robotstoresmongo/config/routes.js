const productsController = require('../controllers/productsController');
const routes = (app) => {
    app.get('/products', productsController.getProducts);
    // app.get('/products/:id', productsController.getProduct);
    // app.post('/products', productsController.addProduct) // Stretch
}

module.exports = routes;