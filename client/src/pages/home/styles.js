import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100vw",
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: theme.palette.background.default,
  },
  avatar: {
    margin: "auto auto 1rem auto",
    width: 100,
    height: 100,
  },
  info: {
    marginBottom: "1rem",
    textAlign: "center",
  },
  legend: {
    marginBottom: "1rem",
    textAlign: "center",
  },
  loginLink: {
    textDecoration: "none",
    color: theme.palette.primary.main,
    marginLeft: "5px",
  },
  wrapper: {
    width: "100%",
    maxWidth: "400px",
    margin: "auto",
    padding: "1rem",
    background: theme.palette.background.paper,
    border: "1px solid rgb(219, 219, 219)",
    borderRadius: "5px",
    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
  },
}));
