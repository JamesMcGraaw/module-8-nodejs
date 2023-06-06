const express = require('express');
const exphbs = require('express-handlebars');

// Create our app server and a port for it
const app = express();
const port = 3000;

// Register the template engine as 'handlebars' -> this is a function named in quotes (magic called reflection)
app.engine('handlebars', exphbs.engine());

// Set our app to use the handlebars engine
app.set('view engine', 'handlebars');

// Set our app to look for views in the views folder
app.set('views', './views');

// Serve static files (images, CSS files, and JavaScript files) from the public folder
app.use(express.static('public'))

// Will be replaced with database stuff later
let context = {title: 'My New Blog', content: 'The content of the blog!'}

// Specify a route
app.get('/home', (req, res) => {
    // Put the contents of the view "home.handlebars" in the template "main.handlebars" (doesn't need .handlebars)
    res.render('home', context);
});

app.listen(port, () => console.log(`App listening to port ${port}`));