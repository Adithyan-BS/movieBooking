const express=require('express');
const router=express.Router();
const venderControls=require('../controles/venderControlers')
module.exports=router

router.get('/venderSignup',venderControls.venderSignup)
router.get('/venderLogin',venderControls.venderLogin)
router.get('/VendercreateAccount',venderControls.VendercreateAccount)

