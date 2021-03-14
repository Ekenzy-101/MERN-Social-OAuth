const jwt = require("express-jwt");
const { APP_ACCESS_SECRET, APP_EXCHANGE_SECRET } = require("../config");

module.exports.checkExchangeToken = jwt({
  secret: APP_EXCHANGE_SECRET,
  algorithms: ["HS256"],
  getToken: (req) => req.body.token,
});

module.exports.checkAccessToken = jwt({
  secret: APP_ACCESS_SECRET,
  algorithms: ["HS256"],
  getToken: (req) => req.cookies["token"],
});
