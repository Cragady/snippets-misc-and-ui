const express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    path = require('path'),
    // routes = require('./routes'),
    routesjs = require('./routes.js'), // Comment/delete this if using the routes directory
    PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'pug');

app.use(express.static('static'));
// app.use(routes);
app.use(routesjs); // Comment/delete this if using the routes directory

app.get('*', (req, res) => {
    res.render('index', { title: 'Home' });
});

app.listen(PORT, () => {
    console.log(`🙉 ==> Server now listening to you... ON PORT ${PORT}!!`);
    console.log(`🌎 ==> Visit http://localhost:${PORT} in your browser.`);
});
