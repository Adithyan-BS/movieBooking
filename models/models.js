const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    name:String,
    age:Number
})
const movieModel=mongoose.model('movies',userSchema)

module.exports=movieModel
