const express = require('express');
const artistRouter = require('./routes/artist');

const app = express();

app.use(express.json());

app.use('/artists', artistRouter);

// app.get('/', (req, res) => {
//     res.status(200).send('HELLO WORLD');
//   });

module.exports = app;