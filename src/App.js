import React, { Component } from "react";
import "./App.css";
import Router from "./components/router";
import auth from "./services/authService";
import { connect } from "react-redux";

class App extends Component {
  state = {};

  componentDidMount() {}

  render() {
    const user = JSON.parse(auth.getToken());

    return (
      <div className="App">
        <Router user={user && user.characterId !== undefined} />
      </div>
    );
  }
}

export default App;
