const express=require('express');
const mongoose=require('mongoose')
const adminModel=require('../models/adminModel')
const adminControles=require('../controles/adminControlers')
const router=express.Router();
router.get('/adminLogin',adminControles.adminLogin);
router.get('/AdminCreateAccount',adminControles.adminSignup);
router.post('/AdminSignupData',adminControles.adminSignupData)

module.exports=router