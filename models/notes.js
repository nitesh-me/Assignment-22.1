const mongoose  = require('mongoose');

var noteSchema =  new mongoose.Schema({
    title:{
        type:String,
       
    },
    content:{
        type:String,
       
    }
   
},{timestamps: true});



module.exports =mongoose.model('Notes',noteSchema);