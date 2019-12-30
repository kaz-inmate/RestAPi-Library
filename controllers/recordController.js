const Record = require('./../models/recordModel');
const Book = require('./../models/bookModel');


exports.getAllRecords = async (req, res) => {
    try {
        const records = await Record.find({});

        res.status(200).json({
            status: 'success',
            results: records.length,
            data: {
                records
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err
        });
    }
};

exports.createRecord = async (req, res) => {

    //------ check if the book with such Id exists and then proceed ----------
    
    try {
        const newRecord = await Record.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                record: newRecord
            }
        }); 
                
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
            error: err
        });
    }
};


exports.getOneRecord = async (req, res) => {
    try {
        const record = await Record.findById(req.params.id)

        res.status(200).json({
            status: 'success',
            data: {
                record
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err
        });
    }
};

exports.updateRecord = async (req, res) => {
    try {
        const record = await Record.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        res.status(200).json({
            status: 'success',
            data: {
                record
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err
        });
    }
};


exports.deleteRecord = async (req, res) => {
    try {
        await Record.findByIdAndDelete(req.params.id);

        res.status(204).json({
            status: 'success',
            data: null
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err
        });
    }
};


exports.returnBook = async (req, res) => {
    try {
        const record = await Record.findByIdAndUpdate(req.params.id, {$set: { status: "Returned"}});
        const return_bookId = record.bookId;
        await Book.findOneAndUpdate({bookId: return_bookId},{$inc: { "quantity" : 1 }})
        res.status(200).json({
            status: 'success',
            data: {
                record
            }
        });
        console.log(`Updated book quantity`);
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err
        });
    }
}

