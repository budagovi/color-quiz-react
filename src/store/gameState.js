import React from "react";

export const gameContext = React.createContext({
  isStarted: false,
  step: 0,
  score: 0,
  checkAnswer: (color) => {}
})

export const GameContextProvider = ({children}) => {

  const checkAnswerHandler = (color) => {
    console.log('lukaaa');
  }

  return (
    <gameContext.Provider value={{
      isStarted: false,
      step: 0,
      score: 0,
      checkAnswer: checkAnswerHandler
    }}>
      {children}
    </gameContext.Provider>
  )
}

