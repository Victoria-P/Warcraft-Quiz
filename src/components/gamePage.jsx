import React, { Component } from "react";
import CharacterCards from "./charactersCards";
import QuizCards from "./quizCards";
import Navbar from "./navBar";

class GamePage extends Component {
  state = {};

  render() {
    return (
      <div>
        <Navbar />
        <div className="row">
          <div className="col-3 ml-5">
            <CharacterCards />
          </div>
          <div className="col-7">
            <QuizCards />
          </div>
        </div>
      </div>
    );
  }
}

export default GamePage;
