const Book = require('./../models/bookModel');
const Record = require('./../models/recordModel');

exports.getInfo = async (req, res) => {
    try {
        const totalQuantity = await Book.aggregate([ {
            $group: {
              _id: null,
               "totalBooks": {
                  $sum: "$quantity"
               }
            }
         } ] );

         const totalIssued = await Record.countDocuments({});
         const totalReturned = await Record.countDocuments({ status: {$eq: "Returned"}});
         let totalPending = totalIssued - totalReturned;
         res.status(200).json({
            status: 'success',
            data: {
              totalBooks: totalQuantity[0].totalBooks,
              totalIssued,
               totalReturned,
              totalPending 
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err
        })
    }
}


exports.last30days = async (req, res) => {
    try {
        const last30Days = await Record.find(
            {"issued_date": { $gte: new Date((new Date().getTime() - (1* 24 * 60 * 60 * 1000)))}});

            res.status(200).json({
                status: 'success',
                result: last30Days.length,
                data: {
                    last30Days
                }
            });
        
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err
        });
    }
}

// exports.nearDeadline = async (req, res) => {
//     try {
//         const nearDeadline = await Record.find(
//             {"deadline": { $gte: new Date((new Date().getTime() - (7 * 24 * 60 * 60 * 1000)))}});

//             res.status(200).json({
//                 status: 'success',
//                 result: last30Days.length,
//                 data: {
//                     last30Days
//                 }
//             });
        
//     } catch (err) {
//         res.status(400).json({
//             status: 'failed',
//             message: err
//         });
//     }
// }

