import React, { Component } from "react";
import CharactersCards from "./charactersCards";

class CharactersPage extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        <div className="col-2 m-auto">
          <CharactersCards />
        </div>
      </div>
    );
  }
}

export default CharactersPage;
