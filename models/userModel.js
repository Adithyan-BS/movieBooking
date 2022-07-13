const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const saltRounds=10
const userSchema = new mongoose.Schema({
  
  email: {
    type: String,
    required: [true, "You must provide an email!"],
    unique: true,
  },
  
  password: {
    type: String,
    required: [true, "You must provide a password"],
    minlength:[5,"Must be at least 5 charecters, got {VALUE}!"]
  },
  role: {
    type: String,
    default: "User",
  }
});

userSchema.pre('save',async function(next){
  let user=this;
  console.log(user);
  // console.log(this);
   const hash= await bcrypt.hash(user.password,saltRounds);
   console.log(hash);
   user.password=hash
  next()
})

userSchema.methods.compaire=function(enterdPassword,dbPassword){
  bcrypt.compare(enterdPassword,dbPassword,(error,res)=>{
    if(res){
      console.log('Password matches');
    }else{
      console.log('your password doesnot match.');
    }
  })
}

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
