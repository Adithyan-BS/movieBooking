const express = require("express");
const passport = require("passport");
const router = express.Router();
const userControlers = require("../controles/userControler");
const Authenticator = require("../views/middleware/middleware");

router.get("/", Authenticator, userControlers.hello);
router.get("/login", userControlers.login);
router.post("/loginData", userControlers.LoginData);
router.get("/signup", userControlers.signup);
router.post("/SignupData", userControlers.SignupData);
router.get("/createAccount", userControlers.loginSend);
router.get("/logout", userControlers.logout);
//google Oauth02
router.get("/googleLogin", userControlers.googleOauth);
router.get("/googleLogin/callback",passport.authenticate('google', { failureRedirect: '/login' }),userControlers.googleOauth02);


module.exports = router;
