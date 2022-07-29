const passport = require("passport");
const userModel = require("../../models/userModel");
var GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
  // done(null,user)
});

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "883655319840-o53lmn7b808sq1kr8b9qkm2rtfj5b75p.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "//localhost:3000/googleLogin/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      console.log(profile);

      userModel.findOne({ googleId: profile.id }, function (err, user) {
        if (err) {
          console.log(err);
          // return err, null;
        } else {
          return done(err, user);
        }
      });
    }
  )
);
