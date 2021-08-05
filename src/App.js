import React, { useState, useEffect } from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import Login from "./pages/User/Login/Login.js";
import List from "./pages/list";
import Error from "./pages/Error/Error.js";
import { useSelector } from "react-redux";
import Loading from "./components/Loading/Loading";
import Home from "./pages/Home/Home";
import SignUp from "./pages/User/SignUp/SignUp.js";
import PrivateRoute from "./utils/PrivateRoute";
import PublicRoute from "./utils/PublicRoute";
import "./assets/scss/app.scss";
import { getToken, removeUserLocal, setUserLocal } from "./utils/Common";
import api from "./api/api.js";

function App() {
  const { user } = useSelector((state) => state.user);
  const { loading } = useSelector((state) => state.loading);
  const [authLoading, setAuthLoading] = useState(true);

  const getUserMe = async () => {
    try {
      // const response = await await api.get(`/userme`);
      // if (response) {
      // }
      let fakeResponse = { result: true };
      if (fakeResponse.result) {
        setUserLocal(getToken, user);
        setAuthLoading(false);
      }
    } catch (e) {
      removeUserLocal();
      setAuthLoading(false);
    }
  };

  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }

    getUserMe();
  }, []);

  if (authLoading && getToken()) {
    return <Loading visible={authLoading} />;
  }

  return (
    <div className="content-wrapper">
      <BrowserRouter>
        <Switch>
          <PrivateRoute path="/list" component={List} />
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Route path="/error" component={Error} />
          <Redirect to="/error" />
        </Switch>

        <Loading visible={loading} />
      </BrowserRouter>
    </div>
  );
}

export default App;
