const userModel = require("../models/userModel");
const myAuthentication=require('./passportAuthentication/passport')
var passport = require('passport');
var LocalStrategy = require('passport-local');



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


exports.LoginData=passport.authenticate('local',{
  failureFlash:true, // if data is null and false then if failureFlash is set true then the message set will be set to session as a session varilable and then the message can be send to view engine and if failureFlash is set true then the it will get in message.error and it can be displayed in message.error    .
  successRedirect:'/',
  failureRedirect:'/login'
})

exports.signup=(req,res)=>{
  res.render('user/userSignup')
}
exports.SignupData=(req,res)=>{
  // console.log(req.body);
  let signupUser= new userModel({
    email:req.body.email,
    password:req.body.password
  })
  signupUser.save().then((data)=>{
    // console.log(data);
  }).catch((error)=>{
    console.log(error);
  })
  

  
  res.redirect('/')
}
exports.loginSend=(req,res)=>{
  res.render('user/userSignup')
}
exports.logout=(req,res)=>{
  req.logout(function(err){
    if(err){
      return next(err);
    }
    req.user=null
    res.redirect('/login')
  })
}

exports.googleOauth=passport.authenticate('google', { scope: ['profile'] });

exports.googleOauth02=passport.authenticate('google',{
  failureRedirect:'/login'
}),function(req,res){
  res.redirect('/')
}

