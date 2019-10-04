import React from "react";
import ReactDOM from "react-dom";
import {createBrowserHistory} from "history";
import {Router, Route, Switch, Redirect} from "react-router-dom";


import Admin from "layouts/Admin.js";
import SignUp from "views/Login/SignUp.js"
import Login from "views/Login/Login.js"

import "assets/css/material-dashboard-react.css?v=1.8.0";
import TableComponent from "./components/Table/TableComponent";
import BookingDetails from "./components/Booking/BookingDetails";
import App from "./App";

const hist = createBrowserHistory();

ReactDOM.render(
    <App/>,
    document.getElementById("root")
);
