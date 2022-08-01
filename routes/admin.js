const express=require('express');
const adminModel=require('../models/adminModel')
const adminControles=require('../controles/adminControlers')
const adminAuthenticator=require('../views/middleware/adminMiddleware');

const router=express.Router();
router.get('/adminLogin',adminControles.adminLogin);
router.get('/AdminCreateAccount',adminControles.adminSignup);
router.post('/AdminSignupData',adminControles.adminSignupData)
router.post('/AdminLoginData',adminControles.adminLoginData)
router.get('/AdminHome',adminAuthenticator,adminControles.adminHome)

module.exports=router