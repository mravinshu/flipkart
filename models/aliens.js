const mongoose = require('mongoose');

const alienScheme = new mongoose.Schema({
    _id:{
        type:String,
        required:true
    },
    name:{
        type: String,
        required: true
    },
    number:{
        type:String,
        required:true,
    },
    type:{
        type:String,
    },

})

module.exports = mongoose.model('Alien',alienScheme)