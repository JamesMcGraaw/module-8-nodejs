const pigsController = require('../controllers/pigsController');
const routes = (app) => {
    app.get('/pigs', pigsController.getPigs);
    app.get('/pigs/:pigName', pigsController.getPig);
    app.post('/pigs', pigsController.addPig);
    app.delete('/pigs/:pigName', pigsController.deletePig);
    app.put('/pigs/:pigName', pigsController.updatePig)

    // Example of middleware in routes
    app.get('/midware1', (req, res, next) => {
        console.log('Hello from Routes Middleware')
        console.log('The PigsController will be executed next.')
        next();
    }, (req, res) => {
        pigsController.getPig(req, res);
    })
}

module.exports = routes;
