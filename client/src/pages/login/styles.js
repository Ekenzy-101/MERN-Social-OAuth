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
  legend: {
    marginBottom: "1rem",
    textAlign: "center",
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 15,
  },
  googleBtn: {
    alignItems: "center",
    backgroundColor: `#fff !important`,
    border: "1px solid rgb(219, 219, 219)",
    color: "#262626",
    display: "flex",
    justifyContent: "center",
    margin: "auto auto 1rem auto",
    textTransform: "none",
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
