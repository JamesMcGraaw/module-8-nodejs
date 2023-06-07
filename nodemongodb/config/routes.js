const pigsController = require('../controllers/pigsController');
const routes = (app) => {
    app.get('/pigs', pigsController.getPigs);
    app.get('/pigs/:pigName', pigsController.getPig);
    app.post('/pigs', pigsController.addPig);
    app.delete('/pigs/:pigName', pigsController.deletePig);
    app.put('/pigs/:pigName', pigsController.updatePig)

}

module.exports = routes;
