const { Schema, mongo, default: mongoose } = require('mongoose');
const BookSchema = new Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type: String,
        required:true,
    }
})

module.exports = mongoose.model('Book',BookSchema,'book-db');