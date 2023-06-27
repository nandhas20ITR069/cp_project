var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({

    cid: {
        type: String,
        unique:true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    contact: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('employees', userSchema);