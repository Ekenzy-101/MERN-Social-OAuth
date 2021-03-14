const router = require("express").Router();
const passport = require("passport");

const authController = require("../controller/auth");
const { checkExchangeToken } = require("../middleware/auth");
const { CLIENT_ORIGIN } = require("../config");

const redirectUrl = `${CLIENT_ORIGIN}/signin`;

const googleAuth = passport.authenticate("google", {
  session: false,
  scope: ["profile", "email"],
  failureRedirect: redirectUrl,
});

router.get("/google/callback", googleAuth, authController.google);

router.get("/google", googleAuth);

router.post("/login", checkExchangeToken, authController.login);

module.exports = router;
