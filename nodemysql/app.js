const express = require('express');
const mysql = require('promise-mysql');

const app = express();
const port = 3000;

app.get('/pigs', async (req, res) => {
    const connection = await mysql.createConnection({
        user: 'root',
        password: 'password',
        database: 'pigdb'
    });

    const pigs = await connection.query('SELECT * FROM pigs;');

    res.json(pigs);
});

app.listen(port, () => {
    console.log(`App started and listening on port ${port}`);
});