import { Avatar, Paper, Typography } from "@material-ui/core";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useStyles } from "./styles";

const HomePage = () => {
  const classes = useStyles();
  const { state } = useLocation();

  return (
    <Paper variant="outlined" square className={classes.root}>
      <div className={classes.wrapper}>
        {state ? (
          <>
            <Typography variant="h6" className={classes.legend}>
              Welcome {state.name}
            </Typography>
            <Avatar src={state.image} className={classes.avatar} />
            <Typography className={classes.info}>
              Your Email: {state.email}
            </Typography>
          </>
        ) : (
          <Typography className={classes.info}>
            You are not logged in. Login{" "}
            <Link className={classes.loginLink} to={"login"}>
              Here
            </Link>
          </Typography>
        )}
      </div>
    </Paper>
  );
};

export default HomePage;
