import React from "react";

//create context (frame)
const context = React.createContext({
  colors: [],
  step: -1,
  score: 0,
  addScore: () => {},
  next: () => {},
  reset: () => {}
});

export default context;