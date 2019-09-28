
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";


import Admin from "layouts/Admin.js";
import SignUp from "views/Login/SignUp.js"

import "assets/css/material-dashboard-react.css?v=1.8.0";

const hist = createBrowserHistory();

ReactDOM.render( 
  <Router history={hist}>
    <Switch>
      <Route path="/admin" component={Admin} />      
      <Route path="/signup" component={SignUp}/>
      <Redirect from="/" to="/admin/dashboard" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
