const adminModel=require('../models/adminModel')
const passport=require('passport')
const flash=require('express-flash')
let adminCount

exports.adminLogin=(req,res)=>{
    adminModel.find().exec(function(err,result){
         adminCount=result.length === 0 ? true : false;        
        res.render('admin/adminLogin',{adminCount:adminCount})  
    })
    
}
exports.adminSignup=(req,res)=>{    
    res.render('admin/adminSignup')
    
}
exports.adminSignupData=async (req,res)=>{

  let preventSignup= await adminModel.find()
  console.log(preventSignup);
  
    if(preventSignup.length == 0){
        console.log('creating admin account');
        let adminSignup= new adminModel({
            email:req.body.email,
            password:req.body.password
        })
        adminSignup.save().then((data)=>{
            console.log(data);
            res.redirect('adminLogin')
        }).catch((error)=>{
            console.log(error);
        })
        
    }else{
       
        console.log('admin found');

        console.log('trying to send req.flash message');
        req.flash('info',"Admin allready found, cannot create a new admin... You will be redirect to login page.")
        setTimeout(() => {
            res.redirect('adminLogin')
        }, 1000);

    }
    

}
exports.adminHome=(req,res)=>{
    res.render('admin/adminHome')
}
exports.adminLoginData=passport.authenticate('local',{
    successRedirect:'adminHome',
    failureRedirect:'adminLogin'
})

