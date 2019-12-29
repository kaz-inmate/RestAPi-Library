const mongoose = require('mongoose');
const app = require('./index');


const db = 'mongodb://localhost:27017/libraryProject';

mongoose.connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology:true
}).then(() => console.log('Connection to database successful!!'))
    .catch(err => {
        console.log(err);
    });

const port = 3000;
app.listen(port, () => {
    console.log(`App running on port ${port} ....`);
});