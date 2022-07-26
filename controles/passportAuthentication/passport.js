var passport = require('passport');
var LocalStrategy = require('passport-local');
const userModel = require("../../models/userModel");


    console.log('Passport js is connected...');


    passport.use(new LocalStrategy({usernameField:'email',passwordField:'password'},
    function (userName,password,done){
        console.log('localStrategy is working');
        let hashedResult
        userModel.findOne({email:userName},(err,userDetils)=>{
            if(userDetils){
                console.log('User found');
                console.log(userDetils);
                if(userDetils.password){
                    hashedResult= userDetils.compaire(password,userDetils.password)
                   console.log(hashedResult);
                   if(hashedResult){
                    return done(null,userDetils)
                   }

                }else{
                    return done(null,false)
                }

                
            }

        })
    }))

    


