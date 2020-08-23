import React from "react";
import "./App.scss";
import Quiz from "./pages/quiz";
import Wave from "./components/wave";

const responses = {};

function App() {
  return (
    <div className="App">
      <Quiz />
      <Wave />
    </div>
  );
}

export default App;
