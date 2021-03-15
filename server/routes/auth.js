const router = require("express").Router();
const passport = require("passport");

const authController = require("../controller/auth");
const { checkExchangeToken } = require("../middleware/auth");
const { CLIENT_ORIGIN } = require("../config");

const redirectUrl = `${CLIENT_ORIGIN}/signin`;

const facebookAuth = passport.authenticate("facebook", {
  session: false,
  scope: ["email"],
  failureRedirect: redirectUrl,
});

const githubAuth = passport.authenticate("github", {
  session: false,
  scope: ["user:email", "read:user"],
  failureRedirect: redirectUrl,
});

const googleAuth = passport.authenticate("google", {
  session: false,
  scope: ["profile", "email"],
  failureRedirect: redirectUrl,
});

router.get("/facebook/callback", facebookAuth, authController.facebook);
router.get("/github/callback", githubAuth, authController.github);
router.get("/google/callback", googleAuth, authController.google);

router.get("/facebook", facebookAuth);
router.get("/github", githubAuth);
router.get("/google", googleAuth);

router.post("/login", checkExchangeToken, authController.login);

module.exports = router;
