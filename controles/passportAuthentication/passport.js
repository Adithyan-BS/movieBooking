var passport = require('passport');
var LocalStrategy = require('passport-local');
const userModel = require("../models/userModel");


function authentication(){
    passport.use(new LocalStrategy(function verify(userName){
        userModel.findOne({email:userName},(err,userDetils)=>{
            if(userDetils){
                console.log('User found');
                console.log(userDetils);
            }else if(err){
                console.log('user not found'+err);
            }

        })
    }))

    
}

module.exports=authentication
