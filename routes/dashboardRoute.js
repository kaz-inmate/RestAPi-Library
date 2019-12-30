const express = require('express');
const router = express.Router();
const dashboardController =  require('./../controllers/dashboardController');


router
    .get('/',dashboardController.getInfo)
    .get('/last30days', dashboardController.last30days);
module.exports = router;
