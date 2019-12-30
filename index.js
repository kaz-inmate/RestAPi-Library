const express = require('express');
const app = express();

const homeRoute = require('./routes/homeRoute');
const recordRoute = require('./routes/recordRoute');
const dashboardRoute = require('./routes/dashboardRoute');
app.use(express.json());

app.use('/book', homeRoute);
app.use('/record', recordRoute);
app.use('/dashboard', dashboardRoute);
module.exports = app;