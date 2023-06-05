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

// Body parsing

// If the Content-Type of the request is from a form, parse it and put it in the property req.body
app.use(express.urlencoded({extended: true}));
// Put this at the top of the file ^^
app.post('/formtest', (req, res) => {
    res.send(`Thanks for subscribing ${req.body.name}. An email to ${req.body.email} is on its way!`);
});

// If the Content-Type of the request is JSON, parse it and put it in the
// property req.body
app.use(express.json());
// Put this at the top of the file ^^

app.post('/receivejson', (req, res) => {
    res.send(`Your description was: ${req.body.description}`);
});

app.listen(port, () => {
    console.log(`App started and listening on port ${port}`);
});
