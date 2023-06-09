const express = require('express');
const router = require('./config/routes');
const loggerMiddleware = require('./logger/loggerMiddleware.js')

const app = express();
const port = 3000;

// Middleware to execute every time the app receives a request
app.use(loggerMiddleware);
// Next runs the next thing

// If the Content-Type of request is JSON, parse it and put it in the property req body
app.use(express.json());

// Add all the routes to app
router(app);

app.listen(port, () => {
    console.log(`nodemongodb app running. Listening on ${port}`);
});
