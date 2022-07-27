const express = require("express");
const passport = require("passport");
const router = express.Router();
const userControlers=require('../controles/userControler')
const Authenticator=require('../views/middleware/middleware')


router.get("/",Authenticator,userControlers.hello);
router.get('/login',userControlers.login);
router.post('/loginData',userControlers.LoginData);
router.get('/signup',userControlers.signup);
router.post('/SignupData',userControlers.SignupData);
router.get('/createAccount',userControlers.loginSend);

module.exports = router;
