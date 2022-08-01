const adminModel=require('../models/adminModel')
const passport=require('passport')

exports.adminLogin=(req,res)=>{
    res.render('admin/adminLogin')
}
exports.adminSignup=(req,res)=>{
    res.render('admin/adminSignup')
}
exports.adminSignupData=(req,res)=>{
    // console.log(req.body);
    let adminSignup= new adminModel({
        email:req.body.email,
        password:req.body.password
    })
    adminSignup.save().then((data)=>{
        console.log(data);
    }).catch((error)=>{
        console.log(error);
    })
    res.redirect('adminLogin')
}
exports.adminHome=(req,res)=>{
    res.render('admin/adminHome')
}
exports.adminLoginData=passport.authenticate('local',{
    successRedirect:'adminHome',
    failureRedirect:'adminLogin'
})

