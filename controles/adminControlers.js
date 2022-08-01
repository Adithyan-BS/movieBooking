const adminModel=require('../models/adminModel')
const passport=require('passport')
let adminCount

exports.adminLogin=(req,res)=>{
    adminModel.find().exec(function(err,result){
        let Count=result.length
        if(Count>2){
            adminCount=true
        }
        console.log(adminCount+">>>>>>>>>>>>>>>");
    })
    res.render('admin/adminLogin',{adminCount:adminCount})
}
exports.adminSignup=(req,res)=>{
    res.render('admin/adminSignup')
}
exports.adminSignupData=(req,res)=>{
    console.log(req.body);
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

