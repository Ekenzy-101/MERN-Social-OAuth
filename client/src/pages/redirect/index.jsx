import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import qs from "querystring";

import http from "../../utils/services/httpService";

const RedirectLoginPage = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const { search } = useLocation();
  const history = useHistory();
  const { token } = qs.parse(search.replace("?", ""));

  useEffect(() => {
    http
      .post("/login", { token })
      .then(({ data }) => {
        history.push("/", data);
      })
      .catch((err) => setErrorMessage(err?.response?.data));
  }, []);

  return <div>{errorMessage && <p>{errorMessage}</p>}</div>;
};

export default RedirectLoginPage;
