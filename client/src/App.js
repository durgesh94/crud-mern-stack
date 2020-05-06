import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Landing from "./components/Landing/Landing";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import ForgotUsername from "./components/authentication/ForgotUsername";
import ForgotPassword from "./components/authentication/ForgotPassword";
import Home from "./components/user/Home";

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/forgot-password" exact component={ForgotPassword} />
        <Route path="/forgot-username" exact component={ForgotUsername} />
        <Route path="/home" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
