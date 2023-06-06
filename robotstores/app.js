const express = require('express');
const handlebars = require('express-handlebars');
const mysql = require('promise-mysql');

const app = express();
const port = 3000;

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
app.use(express.static('public'))

app.get('/home', async (req, res) => {
    const connection = await mysql.createConnection({
        user: 'root',
        password: 'password',
        database: 'robot_stores'
    });

    const items = await connection.query('SELECT `id`, `title`, `price`, `image`, `description`, `category`, `character` FROM `products`;');

    const categories = await connection.query('SELECT DISTINCT `category` FROM `products`;');

    const characters = await connection.query('SELECT DISTINCT `character` FROM `products`;');

    res.render('home', {items : items, categories : categories, characters : characters})

});

app.get('/product/:id', async (req, res) => {
    const connection = await mysql.createConnection({
        user: 'root',
        password: 'password',
        database: 'robot_stores'
    });

    const productid = req.params.id

    const item = await connection.query('SELECT `id`, `title`, `price`, `image`, `description`' +
                                            'FROM `products`' +
                                            'WHERE `id` = ' + productid + ';');

    res.render('product', {itemtitle: item[0].title,
                                        itemprice : item[0].price,
                                        itemimage : item[0].image,
                                        itemdescription : item[0].description
                                        })
})

app.listen(port, () => console.log(`App listening to port ${port}`));