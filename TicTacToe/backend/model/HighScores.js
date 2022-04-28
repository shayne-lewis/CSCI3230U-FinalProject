const mongoose = require('mongoose');


let scoreSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true,
        minlength: 1,
        maxlength: 100
    },
    score: {
        type: Number,
        required: true,
        minlength: 0
    }
});


module.exports = mongoose.model('HighScores', scoreSchema);