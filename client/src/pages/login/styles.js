import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: "center",
    background: theme.palette.background.default,
    display: "flex",
    justifyContent: "center",
    maxWidth: "100vw",
    minHeight: "100vh",
    width: "100%",
  },
  button: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    margin: "auto auto 1rem auto",
    textTransform: "none",
    minWidth: "15rem",
  },
  legend: {
    marginBottom: "1rem",
    textAlign: "center",
  },
  logo: {
    width: 30,
    height: 30,
    borderRadius: 0,
    marginRight: 15,
  },
  facebookBtn: {
    backgroundColor: `#4267b2 !important`,
    color: "#fff",
  },
  googleBtn: {
    backgroundColor: `#fff !important`,
    color: "#262626",
  },
  wrapper: {
    width: "100%",
    maxWidth: "400px",
    margin: "auto",
    padding: "1rem",
    border: "1px solid rgb(219, 219, 219)",
    borderRadius: "5px",
    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
  },
}));
