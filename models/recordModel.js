const mongoose = require('mongoose');
const Book = require('./bookModel');

const recordSchema = new mongoose.Schema({
   studentName: {
       type: String,
       required: [true, 'Student name is required']
    },
    semester: {
        type: String,
        required: [true, 'A semester must be specified']
    },
    bookId: {
        type: String,
        required: [true, 'A book id must be specified']
    },
    issued_data: {
        type: Date,
        default: Date.now()
    },
    deadline: {
        type: Date,
        default: Date.now() + 30*24*60*60*1000
    }
});

//----------------- Middleware to decrease the quantity of the particular book after the record has been created -------

recordSchema.post('save', function(doc) {
        const bookId = doc.bookId;
        Book.findOneAndUpdate({bookId:bookId}, {$inc: { "quantity" : -1 }})
            .then(success => {
                console.log('Successfully completed');
            })
            .catch(err => {
                console.log(err);
            });
});


const Record = mongoose.model('Record', recordSchema);



module.exports = Record;