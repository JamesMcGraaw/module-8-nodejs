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

const addPig = (req, res) => {
    console.log('Controller: addPig');
    const newPig = req.body.pig;
    pigsService.addPig(newPig).then((result) => res.json(result));
}

const deletePig = (req, res) => {
    console.log('Controller: deletePig');
    const pigName = req.params.pigName;
    pigsService.deletePig(pigName).then((result) => res.json(result));
}

const updatePig = (req, res) => {
    console.log('Controller: updatePig');
    const pigName = req.params.pigName;
    const updatedField = req.query
    pigsService.updatePig(pigName, updatedField).then((result) => res.json(result));
}

//   Name to be called   Name of function
module.exports.getPigs = getPigs;
module.exports.getPig = getPig;
module.exports.addPig = addPig;
module.exports.deletePig = deletePig;
module.exports.updatePig = updatePig;
