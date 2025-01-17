import React, { useEffect } from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import Login from "./pages/User/Login/Login.js";
import ListUser from "./pages/ListUser/ListUser.js";
import Error from "./pages/Error/Error.js";
import { useSelector } from "react-redux";
// import Loading from "./components/Loading/Loading";
import Home from "./pages/Home/Home";
import SignUp from "./pages/User/SignUp/SignUp.js";
// import PrivateRoute from "./utils/PrivateRoute";
import PublicRoute from "./utils/PublicRoute";
import "./assets/scss/app.scss";
import {
  getToken,
  removeUserLocal,
  setUserLocal,
  getLanguage
} from "./utils/Common";
import Toast from "./components/Toast";
import { useTranslation } from "react-i18next";
import "./plugins/react-i18n.js";

function App() {
  const { i18n } = useTranslation();
  const { user } = useSelector((state) => state.user);
  // const [authLoading, setAuthLoading] = useState(true);

  const getUserMe = async () => {
    try {
      // const response = await await api.get(`/userme`);
      // if (response) {
      // }
      let fakeResponse = { result: true };
      if (fakeResponse.result) {
        setUserLocal(getToken(), user);
      } else {
        removeUserLocal();
      }
    } catch (e) {
      removeUserLocal();
    } finally {
      //
    }
  };

  useEffect(() => {
    i18n.changeLanguage(getLanguage());
    const token = getToken();
    if (!token) {
      return;
    }

    getUserMe();
  }, []);

  // if (authLoading && getToken()) {
  //   return <Loading visible={authLoading} />;
  // }

  return (
    <div className="content-wrapper">
      <BrowserRouter>
        <Switch>
          <Route path="/list" component={ListUser} />
          <Route exact path="/" component={Home} />
          <PublicRoute exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Route path="/error" component={Error} />
          <Redirect to="/error" />
        </Switch>
      </BrowserRouter>
      <Toast />
    </div>
  );
}

export default App;
