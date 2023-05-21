/** @format */

const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({ path: './config.env' });

require('./db/conn');

app.use(express.json());

//linked the router file
app.use(require('./router/auth'));

const PORT = process.env.PORT;

//Middleware
// const mildleware = (req, res, next) => {
// 	console.log('Milddleware');
// 	next();
// };

app.get('/', (req, res) => {
	res.send('Hello World');
});

app.get('/about', (req, res) => {
	res.send('About');
});

app.get('/contact', (req, res) => {
	res.send('Contact');
});

app.get('/login', (req, res) => {
	res.send('Contact');
});

app.get('/signup', (req, res) => {
	res.send('Contact');
});

app.listen(PORT, () => {
	console.log(`Server is running at ${PORT}`);
});

// , {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false
// }
