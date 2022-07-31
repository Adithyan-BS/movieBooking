const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const saltRounds=10
const userSchema = new mongoose.Schema({
  id:{
    type:String,
    unique:true
  },
  
  email: {
    type: String,
    required: [true, "You must provide an email!"],
    unique: true,
  },
  
  password: {
    type: String,
    minlength:[5,"Must be at least 5 charecters, got {VALUE}!"]
  },
  role: {
    type: String,
    default: "User",
  }
});




userSchema.pre('save',async function(next){

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

userSchema.methods.compaire= async function(enterdPassword,dbPassword){
  return await bcrypt.compare(enterdPassword,dbPassword)  
}

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
