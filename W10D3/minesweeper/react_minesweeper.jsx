import React from "react";
import ReactDOM from "react-dom";
import Game from "./components/game";

document.addEventListener("DOMContentLoaded", () => {
  // debugger
  const root = document.getElementById("react-root");
  ReactDOM.render(<Game />, root);
});