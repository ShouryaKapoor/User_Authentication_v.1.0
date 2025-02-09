const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://127.0.0.1:27017/jwt_db',
    {serverSelectionTimeoutMS: 5000}
);

if(db){
    console.log('Connected to MongoDB');
}
else{
    console.log('Error while connecting to MongoDB');
}

module.exports = mongoose;
