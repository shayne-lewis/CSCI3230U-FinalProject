const mongoose = require('mongoose');


let userSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true,
        minlength: 1,
        maxlength: 100
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 1024
    }
});


module.exports = mongoose.model('User', userSchema);

