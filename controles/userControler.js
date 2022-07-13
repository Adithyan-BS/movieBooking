const userModel = require("../models/userModel");

exports.hello = (req, res, next) => {
  try {
    res.render("layout/layout",{admin:false,user:true});
  } catch (error) {
    next(error);
  }
};
exports.login=(req,res,next)=>{
  try {
    res.render('user/userLogin')
  } catch (error) {
    next(error);
  }
}

exports.LoginData=(req,res)=>{
  console.log(req.body);
}

exports.signup=(req,res)=>{
  res.render('user/userSignup')
}
exports.SignupData=(req,res)=>{
  // console.log(req.body);
  let user= new userModel({
    email:req.body.email,
    password:req.body.password
  })
  user.save().then((data)=>{
    console.log(data);
  }).catch((error)=>{
    console.log(error);
  })
  

  
  res.redirect('/')
}
exports.loginSend=(req,res)=>{
  res.render('user/userSignup')
}

