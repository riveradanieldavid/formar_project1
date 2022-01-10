//EXPRESS
const express = require('express');
const app = express();

//SERVIDOR
const port = 3030;
app.listen(port, () => console.log(`Server receiving on port ${port}`))

//RUTAS ESTATICAS
app.use(express.static('public'));
app.use(express.static('views'));

//PETICIONES Y RESPUESTAS AL SERVIDOR
const path = require('path');
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views', 'home.html')));
app.get('/detail', (req, res) => res.sendFile(path.join(__dirname, 'views', 'detail.html')));
app.get('/cart', (req, res) => res.sendFile(path.join(__dirname, 'views', 'cart.html')));
app.get('/register', (req, res) => res.sendFile(path.join(__dirname, 'views', 'register.html')));
app.get('/autentication', (req, res) => res.sendFile(path.join(__dirname, 'views', 'autentication.html')));

