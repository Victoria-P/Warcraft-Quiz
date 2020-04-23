import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LoginForm from "./auth/loginForm";
import RegisterForm from "./auth/registerForm";

const Router = () => {
  return (
    <main className="container">
      <div className="content">
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </main>
  );
};

export default Router;
