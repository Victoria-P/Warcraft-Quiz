import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  getCharactersError,
  getCharacters,
  getCharactersPending,
} from "../reducers/characters";
import http from "../services/httpService";

class CharactersCards extends Component {
  state = {
    characters: [],
  };

  componentDidMount() {
    this.props.fetchCharacters("characters");
  }

  shouldComponentRender = () => {
    const { characters, pending } = this.props;

    if (pending === false && characters.length) return true;
    // more tests
    return false;
  };

  render() {
    const { characters } = this.props;
    console.log(characters);

    if (!this.shouldComponentRender()) return null;

    return (
      <div>
        {characters.map((character) => (
          <div className="card mb-3" key={character.id}>
            <img
              src={character.img}
              className="card-img-top"
              alt={character.defaultName}
            />
            <div className="card-body">
              <h5 className="card-title">{character.defaultName}</h5>
              <p className="card-text">{character.className}</p>
              {/* <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p> */}
            </div>
          </div>
        ))}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  error: getCharactersError(state),
  characters: getCharacters(state),
  pending: getCharactersPending(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchCharacters: http.get,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(CharactersCards);
