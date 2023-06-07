const express = require('express');
const router = require('./config/routes');

const app = express();
const port = 3000;

// If the Content-Type of request is JSON, parse it and put it in the property req body
app.use(express.json());

// Add all the routes to app
router(app);

app.listen(port, () => {
    console.log(`nodemongodb app running. Listening on ${port}`);
});
