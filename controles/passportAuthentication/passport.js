var passport = require("passport");
var LocalStrategy = require("passport-local");
const userModel = require("../../models/userModel");

console.log("Passport js is connected...");

passport.use(
  new LocalStrategy(
    { usernameField: "email", passwordField: "password" },
    function (userName, password, done) {
      console.log("localStrategy is working");
      let hashedResult;
      userModel.findOne({ email: userName }, async (err, userDetils) => {
        if (userDetils) {
          console.log("User found");
          console.log(userDetils);
          if (await userDetils.compaire(password, userDetils.password)) {
            return done(null, userDetils);
          } else {
            return done(null, false,{message:'password incorrect'}); // message is taken as failureFlash due to null and flash in return that means no data is found if no data is found and failureFlash is set as true.
          }
        }
      });
    }
  )
);


passport.serializeUser(function(user, cb) {
  process.nextTick(function() {
    cb(null, { id: user.id,userEmail:user.email }); // when authentication is called the from body the data can will come to serialize and this data is set to express session.
  });
});
passport.deserializeUser(function(user, cb) {  //deserialize is a function which has acess to express-session and the data which is get from express-session is the user id form mongodb and using this userId the remaining data can be fetched using database methods.
  process.nextTick(function() {
    return cb(null, user);   // this call back anonimous function will return the fetched data from db and it will be returned to authenticate function calling palce and from their using sucessRedirect and failureRedirect page is displayed.
  });
});