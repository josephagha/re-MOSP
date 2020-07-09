import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ProtectedRoute } from "./middleware/router/Protected.route";
import { LoginRoute } from "./middleware/router/login.route";

import "./styles/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import loginLink from "./middleware/router/loginLink";
import LoginPage from "./componente/pages/LoginPage";
import ProductPage from "./componente/pages/ProductPage";
import OverviewPage from "./componente/pages/OverviewPage";
import BadLinkPage from "./componente/pages/BadLinkPage";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route path="/loginLink/:request" exact component={loginLink}></Route>

          <Route path="/badLink" exact component={BadLinkPage} />

          <ProtectedRoute path="/product" component={ProductPage} />
          <ProtectedRoute path="/overview" component={OverviewPage} />

          <LoginRoute path="*" component={LoginPage} />
        </Switch>
      </Fragment>
    );
  }
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("App")
);
