const pigsService = require('../services/pigsService');

const getPigs = (req, res) => {
    console.log('Controller: getPigs');
    // res.send('All the pigs');
    pigsService.getPigs().then((allPigs) => res.json(allPigs));
}

const getPig = (req, res) => {
    console.log('Controller: getPig');
    res.send('Hello. I found one pig.');
}


//   Name to be called   Name of function
module.exports.getPigs = getPigs;
module.exports.getPig = getPig;
