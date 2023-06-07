const pigsService = require('../services/pigsService');

const getPigs = (req, res) => {
    console.log('Controller: getPigs');
    pigsService.getPigs().then((allPigs) => res.json(allPigs));
}

const getPig = (req, res) => {
    console.log('Controller: getPig');
    const pigName = req.params.pigName
    pigsService.getPig(pigName).then((pig) => res.send(pig));
}


//   Name to be called   Name of function
module.exports.getPigs = getPigs;
module.exports.getPig = getPig;
