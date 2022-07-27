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

// exports.LoginData=(req,res,next)=>{
//   passport.authenticate('local',(e,data)=>{
//     console.log(data);
   
//       if(data){
//         console.log('data reached');
//         console.log(data);
//         res.redirect('/')
//       }else{
//         res.redirect('/login')
//       }
    
//   })(req,res,next)
  
// }

exports.LoginData=passport.authenticate('local',{
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

