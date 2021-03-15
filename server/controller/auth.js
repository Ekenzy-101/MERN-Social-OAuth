const { CLIENT_ORIGIN } = require("../config");
const User = require("../model/user");

module.exports.facebook = async (req, res) => {
  const user = await User.findById(req.user._id);
  const token = user.generateExchangeToken();
  return res.redirect(`${CLIENT_ORIGIN}/signin?token=${token}`);
};

module.exports.google = async (req, res) => {
  const user = await User.findById(req.user._id);
  const token = user.generateExchangeToken();
  return res.redirect(`${CLIENT_ORIGIN}/signin?token=${token}`);
};

module.exports.login = async (req, res) => {
  const user = await User.findById(req.user._id);
  const token = user.generateAccessToken();

  const oneDay = 60 * 60 * 24;
  res.cookie("token", token, { httpOnly: true, maxAge: oneDay });

  return res.send(user);
};
