import React from "react";
import "./App.css";
import Router from "./components/router";
import auth from "./services/authService";

function App() {
  const user = JSON.parse(auth.getToken());

  return (
    <div className="App">
      <Router user={user && user.characterId !== undefined} />
    </div>
  );
}

export default App;
