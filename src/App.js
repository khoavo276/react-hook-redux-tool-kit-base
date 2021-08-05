import React from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import Login from "./pages/User/Login/Login.js";
import List from "./pages/list";
import Error from "./pages/Error/Error.js";
import { useSelector } from "react-redux";
import Loading from "./components/loading/loading.js";
import Home from "./pages/Home/Home";
import SignUp from "./pages/User/SignUp/SignUp.js";
import "./assets/scss/app.scss";

function App() {
  const { user } = useSelector((state) => state.user);
  const { loading } = useSelector((state) => state.loading);

  return (
    <div className="content-wrapper">
      <BrowserRouter>
        {!user ? (
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Redirect to="/login" />
          </Switch>
        ) : (
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route path="/list" component={List} />
            <Route path="/error" component={Error} />
            <Redirect to="/error" />
          </Switch>
        )}
        <Loading visible={loading} />
      </BrowserRouter>
    </div>
  );
}

export default App;
