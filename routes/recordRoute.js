const express = require('express');
const router = express.Router();

const recordController =  require('./../controllers/recordController');


router
    .route('/')
    .get(recordController.getAllRecords)
    .post(recordController.createRecord);


router
    .route('/:id')
    .get(recordController.getOneRecord)
    .patch(recordController.updateRecord)
    .delete(recordController.deleteRecord);

//route for returning borrowed books

router
    .route('/return/:id')
    .post(recordController.returnBook);
module.exports = router;