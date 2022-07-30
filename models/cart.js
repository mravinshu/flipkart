const mongoose = require('mongoose');

const cartScheme = new mongoose.Schema({
    _id:{
        type:String,
        required:true
    },
    products:{
        type:Array,
        required:true
    }
})

module.exports = mongoose.model('Cart',cartScheme)