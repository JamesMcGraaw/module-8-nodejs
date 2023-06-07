const express = require('express');
const router = require('./config/routes');

const app = express();
const port = 3000;

// Add all the routes to app
router(app);

app.listen(port, () => {
    console.log(`nodemongodb app running. Listening on ${port}`);
});
