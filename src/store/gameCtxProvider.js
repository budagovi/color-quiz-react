import { useEffect, useReducer } from "react";
import context from "./gameCtx"

const gameReducer = (prevState, action) => {

  if (action.type === 'FETCH-COLORS') {
    return {
      ...prevState,
      colors: action.data
    }
  }

  if (action.type === 'ADD-SCORE') {
    return {
      ...prevState,
      score: prevState.score + 1
    }
  }

  if (action.type === 'NEXT-COLOR') {
    if (prevState.step < 10) {
      return {
        ...prevState,
        step: prevState.step + 1
      }
    } else {
      return { ...prevState }
    }
  }

  if(action.type === 'RESET') {
    return {
      ...prevState,
      step: -1,
      score: 0
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
    step: -1,
    score: 0,
  }

  const [gameState, gameDispatch] = useReducer(gameReducer, initalState);

  const value = {
    colors: gameState.colors,
    isStarted: gameState.isStarted,
    step: gameState.step,
    score: gameState.score,
    //triggers
    addScore: () => { gameDispatch({ type: 'ADD-SCORE' }) },
    next: () => { gameDispatch({ type: 'NEXT-COLOR' }) },
    reset: () => {gameDispatch({type: 'RESET'})}
  }

  return (
    <context.Provider value={value}>
      {children}
    </context.Provider>
  )
}

export default ContextProvider;

