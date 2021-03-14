const passport = require("passport");
const { OAuth2Strategy: GoogleStrategy } = require("passport-google-oauth");

const { GOOGLE_CONFIG } = require("../config");
const User = require("../model/user");

module.exports = () => {
  // The callback that is invoked when an OAuth provider sends back user
  // information. Normally, you would save the user to the database
  // in this callback and it would be customized for each provider
  const callback = async (accessToken, refreshToken, profile, done) => {
    console.log(profile);
    const email = profile.emails[0].value;
    const name = profile.displayName;
    const image = profile.photos[0].value;

    try {
      let user = await User.findOne({ email });

      if (!user) {
        user = await User.create({
          name,
          email,
          image,
        });
      }

      done(null, user);
    } catch (error) {
      done(error, null);
    }
  };

  // Adding each OAuth provider's strategy to passport
  passport.use(new GoogleStrategy(GOOGLE_CONFIG, callback));
};
