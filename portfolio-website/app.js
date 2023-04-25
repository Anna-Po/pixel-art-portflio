
const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'))

app.listen(3000);

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/landscapes', (req, res) => {
    res.render('landscapes');
});

app.get('/portraits', (req, res) => {
    res.render('portraits');
});

app.get('/misc', (req, res) => {
    res.render('misc');
});

app.get('/animations', (req, res) => {
    res.render('animations');
});

app.use((req, res) => {
    res.render('404');
});