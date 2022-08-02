const mongoose=require('mongoose');
const bcrypt=require('bcrypt')
let saltRounds=10;
const venderSchema= new mongoose.Schema({
  
    // firstName: {
    //     type: String,
    //     required: [true, "You must provide your first name"],
    //     trim: true,
    //     minlength: [4, "Must be at least 4 charecters, got {VALUE}!"],
    //   },
      // lastName: {
      //   type: String,
      //   required: [true, "You must provide your first name"],
      //   trim: true,
      //   minlength: [4, "Must be at least 4 charecters, got {VALUE}!"],
      // },
      email: {
        type: String,
        required: [true, "You must provide an email!"],
        unique: true,
      },
      // mobile: {
      //   type: Number,
      //   required: [true, "You must provide a mobile number!"],
      //   minlength: [10, "Must be at least 10 charecters, got {VALUE}!"],
      //   maxlength: [10, "You can't input more than 10 charecters, got {VALUE}!"],
      //   unique: true,
      // },
      password: {
        type: String,
        required: [true, "You must provide a password"],
      },
      role: {
        type: String,
        default: "Vender",
      }
})


venderSchema.pre('save',async function(next){
  let user=this;
  if(user.password){
    console.log(user);
    // console.log(this);
     const hash= await bcrypt.hash(user.password,saltRounds);
     console.log(hash);
     user.password=hash
    next()
  }else{
    next()
  }
 
})

venderSchema.methods.compaire= async function(enterdPassword,dbPassword){
  return await bcrypt.compare(enterdPassword,dbPassword)  
}

const venderModel=new mongoose.model('vender',venderSchema)
module.exports=venderModel;