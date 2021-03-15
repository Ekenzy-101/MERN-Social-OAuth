require("dotenv").config();
const providers = ["twitter", "google", "facebook", "github"];

const callbacks = providers.map(
  (provider) => `http://localhost:5000/auth/${provider}/callback`
);

const [twitterURL, googleURL, facebookURL, githubURL] = callbacks;

exports.APP_ACCESS_SECRET = process.env.APP_ACCESS_SECRET;

exports.APP_EXCHANGE_SECRET = process.env.APP_EXCHANGE_SECRET;

exports.CLIENT_ORIGIN = "http://localhost:3000";

exports.FACEBOOK_CONFIG = {
  clientID: process.env.FACEBOOK_KEY,
  clientSecret: process.env.FACEBOOK_SECRET,
  profileFields: ["id", "displayName", "photos", "emails"],
  callbackURL: facebookURL,
  enableProof: true,
  graphAPIVersion: "v10.0",
};

exports.GOOGLE_CONFIG = {
  clientID: process.env.GOOGLE_KEY,
  clientSecret: process.env.GOOGLE_SECRET,
  callbackURL: googleURL,
};

exports.GITHUB_CONFIG = {
  clientID: process.env.GITHUB_KEY,
  clientSecret: process.env.GITHUB_SECRET,
  callbackURL: githubURL,
};

exports.MONGO_URI = process.env.MONGO_URI;

exports.TWITTER_CONFIG = {
  consumerKey: process.env.TWITTER_KEY,
  consumerSecret: process.env.TWITTER_SECRET,
  callbackURL: twitterURL,
};
