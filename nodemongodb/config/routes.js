const pigsController = require('../controllers/pigsController');
const routes = (app) => {
    app.get('/pigs', pigsController.getPigs);
    app.get('/pigs/:pigName', pigsController.getPig);
}

module.exports = routes;
