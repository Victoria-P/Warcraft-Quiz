import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LoginForm from "./auth/loginForm";
import RegisterForm from "./auth/registerForm";
import HeroPage from "./heroPage";
import NotFound from "./notFound";
import GamePage from "./gamePage";

const Router = ({ user }) => {
  console.log(user);
  return (
    <main className="container">
      <div className="content">
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/heroes" component={HeroPage} />
          <Route path="/not-found" component={NotFound} />

          <Route
            path="/"
            render={(props) => {
              if (!user) return <Redirect to="/heroes" />;
              return <GamePage {...props} />;
            }}
          />
          <Route
            path="/game"
            render={(props) => {
              if (!user) return <Redirect to="/heroes" />;
              return <GamePage {...props} />;
            }}
          />

          <Redirect to="/not-found" />
        </Switch>
      </div>
    </main>
  );
};

export default Router;
