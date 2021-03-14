const { Schema, model } = require("mongoose");
const jwt = require("jsonwebtoken");

const { APP_ACCESS_SECRET, APP_EXCHANGE_SECRET } = require("../config");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

userSchema.methods.generateAccessToken = function (expiresIn = "1 day") {
  const { email, _id } = this;

  return jwt.sign(
    {
      email,
      _id,
    },
    APP_ACCESS_SECRET,
    { expiresIn }
  );
};

userSchema.methods.generateExchangeToken = function (expiresIn = 60) {
  const { email, _id } = this;

  return jwt.sign(
    {
      email,
      _id,
    },
    APP_EXCHANGE_SECRET,
    { expiresIn }
  );
};

const User = model("User", userSchema);

module.exports = User;
