import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navBar";
import GamePage from "./components/gamePage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <GamePage />
    </div>
  );
}

export default App;
