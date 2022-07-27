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
            return done(null, false);
          }
        }
      });
    }
  )
);
// passport.serializeUser((user, done) => {
//   //this will get data when passport.authenticate is called
//   done(null, user.id); //setting data to session middleware in req.session.passport.user
// });

passport.serializeUser(function(user, cb) {
  process.nextTick(function() {
    cb(null, { id: user.id, username: user.username });
  });
});
passport.deserializeUser(function(user, cb) {
  process.nextTick(function() {
    return cb(null, user);
  });
});