import React from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import Login from "./pages/login";
import List from "./pages/list";
import Error from "./pages/error";
import { useSelector } from "react-redux";
import "./assets/scss/app.scss";
import Loading from "./components/loading/loading.js";

function App() {
  const { user } = useSelector((state) => state.user);
  const { loading } = useSelector((state) => state.loading);

  return (
    <div className="content-wrapper">
      <BrowserRouter>
        {!user ? (
          <Switch>
            <Route exact path="/login" component={Login} />
            <Redirect to="/login" />
          </Switch>
        ) : (
          <Switch>
            <Route exact path="/login" component={Login} />
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
