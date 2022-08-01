const express=require('express');
const router=express.Router();
router.get('/adminLogin',(req,res)=>{
    res.render('admin/adminLogin')
})
router.get('/AdminCreateAccount',(req,res)=>{
    res.render('admin/adminSignup')
})
router.post('/AdminSignupData',(req,res)=>{
    console.log(req.body);
})

module.exports=router