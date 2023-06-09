const express = require('express');
const router = require('./config/routes');
const cors = require('cors')

const app = express();
const port = 3001;


app.use(express.json());
app.use(cors());

router(app);

app.listen(port, () => {
    console.log(`nodemongodb app running. Listening on ${port}`);
});
