const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    locationName:{
        type:String,
        required:true
    },
    code:{
        type:String,
        default:false
    }
})

module.exports = mongoose.model('Location', locationSchema)