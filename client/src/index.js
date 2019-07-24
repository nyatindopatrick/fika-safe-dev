
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";


import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "layouts/Admin.jsx";
import AuthLayout from "layouts/Auth.jsx";
import NewSacco from "components/NewSacco.jsx";
import Profile from "views/examples/Profile.jsx";
import withAuth from 'withAuth.jsx';
import Login from 'views/examples/Login.jsx';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/admin/login" component={Login} />
      <Route path="/admin/new-sacco" component={NewSacco} />
      <Route path="/admin/sacco-profile" component={Profile} />
      <Route path="/admin" render={props => <AdminLayout {...props} />} />
      <Route path="/auth" render={props => <AuthLayout {...props} />} />
      <Redirect from="/" to="/admin/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
