const express = require('express');

const app = express();
const port = 3000;

// Static routes
app.get('/', function(req, res) {
    res.send('Hello world');
});

app.post('/users', (req, res) => {
   res.send('Got a POST request at /users');
});

app.put('/users', (req, res) => {
    res.send('Got a PUT request at /users');
});

app.delete('/users', (req, res) => {
    res.send('Got a DELETE request at /users');
});

app.get('/returnjson', (req, res) => {
    res.json({data: "Success!"});
});

app.get('/status', (req, res) => {
    // Any valid HTTP status. If invalid, an error occurs.
    res.sendStatus(418);
});

app.get('/doredirect', (req, res) => {
    res.redirect('/status');
});

app.get('/render', (req, res) => {
    res.render('templateName.html');
});

// Dynamic Routes
app.get('/pokemon/:id', (req, res) => {
    res.send(`You asked for id ${req.params.id}`);
});


// Query string parameters
app.get('/products/:prod', (req, res) => {
    let colour = req.query.colour;
    let maximumPrice = req.query.maxPrice;
    let manufacturer = req.query.manufacturer
    res.send(`You asked for a ${req.params.prod}, with colour ${colour} and maximum price of £${maximumPrice} made by ${manufacturer}`);
});


app.listen(port, () => {
    console.log(`App started and listening on port ${port}`);
});
