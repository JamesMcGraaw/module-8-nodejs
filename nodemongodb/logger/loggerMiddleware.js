const logger = require('npmlog');

const fs = require('fs'); // file system module
const writeableStream = fs.createWriteStream('logs/log.txt')

logger.stream = writeableStream;

const loggerMiddleware = (req, res, next) => {
    logger.info(`Logged ${req.url} ${req.method} -- ${new Date()}`);
    next();
}

module.exports = loggerMiddleware;