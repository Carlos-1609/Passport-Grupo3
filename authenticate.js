var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
const dotenv = require('dotenv');
dotenv.config();

passport.serializeUser(function(user, done) {
    
    done(null, user);
  });
  
passport.deserializeUser(function(user, done) {
    
    done(null, user);
});

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL
  },
  function(accessToken, refreshToken, profile, done) {
    
    return done(null, profile);
  }
));
