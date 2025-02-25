const mongoose=require('mongoose')

const MovieScehema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },

    director:{
        type:String,
        required:true,
    },

    genre:{
        type:String,
        required:true,
    },

    releaseyear:{
        type:Number
    },

    availablecopies:{
        type:Number,
        required:true,
    }
})


module.exports=mongoose.model('Movie',MovieScehema)
