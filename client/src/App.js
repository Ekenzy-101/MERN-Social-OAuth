import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import RedirectLoginPage from "./pages/redirect";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={LoginPage} path={"/login"} exact />
        <Route component={HomePage} path={"/"} exact />
        <Route component={RedirectLoginPage} path={"/signin"} />
      </Switch>
    </Router>
  );
};

export default App;
