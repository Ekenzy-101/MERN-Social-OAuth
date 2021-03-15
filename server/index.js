require("dotenv").config();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const express = require("express");
const passport = require("passport");

const authRouter = require("./routes/auth");
const databaseInit = require("./services/database");
const passportInit = require("./services/passport");

const main = async () => {
  const app = express();

  app.use(cors({ origin: process.env.CLIENT_ORIGIN, credentials: true }));
  app.use(express.json());
  app.use(cookieParser());
  app.use(passport.initialize());

  passportInit();
  await databaseInit();

  app.use("/auth", authRouter);

  app.use(function (err, req, res, next) {
    if (err.name === "UnauthorizedError") {
      res.status(401).send("Invalid Token");
    } else {
      console.error(err);
      res.status(500).send("Unexepected error");
    }
  });

  const port = process.env.PORT || 5000;

  app.listen(port, () => {
    console.log("Listening on port 5000");
  });
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
