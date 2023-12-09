import React from "react";

//create context (frame)
const context = React.createContext({
  colors: [],
  isStarted: false,
  step: 0,
  score: 0,
  startGame: () => {},
  addScore: () => {},
  next: () => {}
});

export default context;