import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LoginForm from "./auth/loginForm";
import RegisterForm from "./auth/registerForm";
import CharactersPage from "./charactersPage";
import NotFound from "./notFound";
import GamePage from "./gamePage";

const Router = ({ user }) => {
  return (
    <div>
      <div>
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/characters" component={CharactersPage} />
          <Route path="/not-found" component={NotFound} />

          <Route
            path="/"
            render={(props) => {
              if (!user) return <Redirect to="/characters" />;
              return <GamePage {...props} />;
            }}
          />
          <Route
            path="/game"
            render={(props) => {
              if (!user) return <Redirect to="/characters" />;
              return <GamePage {...props} />;
            }}
          />

          <Redirect to="/not-found" />
        </Switch>
      </div>
    </div>
  );
};

export default Router;
