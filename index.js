const express = require('express');
const app = express();

const homeRoute = require('./routes/homeRoute');
const recordRoute = require('./routes/recordRoute');
app.use(express.json());

app.use('/book', homeRoute);
app.use('/record', recordRoute);
module.exports = app;