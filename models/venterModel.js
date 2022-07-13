const mongoose=require('mongoose');
const venterSchema= new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "You must provide your first name"],
        trim: true,
        minlength: [4, "Must be at least 4 charecters, got {VALUE}!"],
      },
      lastName: {
        type: String,
        required: [true, "You must provide your first name"],
        trim: true,
        minlength: [4, "Must be at least 4 charecters, got {VALUE}!"],
      },
      email: {
        type: String,
        required: [true, "You must provide an email!"],
        unique: true,
      },
      mobile: {
        type: Number,
        required: [true, "You must provide a mobile number!"],
        minlength: [10, "Must be at least 10 charecters, got {VALUE}!"],
        maxlength: [10, "You can't input more than 10 charecters, got {VALUE}!"],
        unique: true,
      },
      password: {
        type: String,
        required: [true, "You must provide a password"],
      },
      role: {
        type: String,
        default: "Venter",
      }
})

const venterModel=new mongoose.model('venter',venterSchema)
module.exports=venterModel;