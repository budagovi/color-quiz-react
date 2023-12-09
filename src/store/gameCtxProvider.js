import { useEffect, useReducer } from "react";
import context from "./gameCtx"

const gameReducer = (prevState, action) => {

  if (action.type === 'START') {
    return {
      ...prevState,
      isStarted: true
    }
  }

  if (action.type === 'FETCH-COLORS') {
    return {
      ...prevState,
      colors: action.data
    }
  }

  if (action.type === 'ADD-SCORE') {
    return {
      ...prevState,
      score: prevState.score + 20
    }
  }

  if (action.type === 'NEXT-COLOR') {
    if (prevState.step < 10) {
      return {
        ...prevState,
        step: prevState.step++
      }
    } else {
      return {
        ...prevState,
        step: 0
      }
    }
  }


}

const ContextProvider = ({ children }) => {
  //fetchin data
  useEffect(() => {
    fetch("https://random-colors-lovat.vercel.app")
      .then(data => data.json())
      .then(colors => { gameDispatch({ type: 'FETCH-COLORS', data: colors }) });

  }, []);


  //managing reducer

  const initalState = {
    colors: [],
    isStarted: false,
    step: 0,
    score: 0
  }

  const [gameState, gameDispatch] = useReducer(gameReducer, initalState);

  const value = {
    colors: gameState.colors,
    isStarted: gameState.isStarted,
    step: gameState.step,
    score: gameState.score,
    //triggers
    startGame: () => { gameDispatch({ type: 'START' }) },
    addScore: () => { gameDispatch({ type: 'ADD-SCORE' }) },
    next: () => { gameDispatch({ type: 'NEXT-COLOR' }) }
  }

  return (
    <context.Provider value={value}>
      {children}
    </context.Provider>
  )
}

export default ContextProvider;

