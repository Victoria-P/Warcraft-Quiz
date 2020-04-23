import React, { Component } from "react";
import CharacterCard from "./heroCard";
import QuizCard from "./quizCard";
import Navbar from "./navBar";

class GamePage extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar />
        <div className="row">
          <div className="col-3">
            <CharacterCard />
          </div>
          <div className="col">
            <QuizCard />
          </div>
        </div>
      </div>
    );
  }
}

export default GamePage;
