import { Avatar, Button, Paper, Typography } from "@material-ui/core";
import { Facebook } from "@material-ui/icons";
import React from "react";
import clsx from "clsx";

import { useStyles } from "./styles";
import googleLogo from "../../utils/images/google.png";

const LoginPage = () => {
  const classes = useStyles();

  const handleClick = (provider) => {
    window.location.replace(`${process.env.REACT_APP_AUTH_URL}/${provider}`);
  };

  return (
    <Paper variant="outlined" square className={classes.root}>
      <div className={classes.wrapper}>
        <Typography className={classes.legend} variant="h6" color="textPrimary">
          Login in with any of your social account
        </Typography>
        <Button
          className={clsx(classes.button, classes.facebookBtn)}
          variant="contained"
          onClick={() => handleClick("facebook")}
        >
          <Facebook color="#4267b2" className={classes.logo} />
          Login with Facebook
        </Button>
        <Button
          className={clsx(classes.button, classes.googleBtn)}
          variant="contained"
          onClick={() => handleClick("google")}
        >
          <Avatar src={googleLogo} className={classes.logo} />
          Login with Google
        </Button>
      </div>
    </Paper>
  );
};

export default LoginPage;
