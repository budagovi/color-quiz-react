import style from "./App.module.css";

import context from "./store/gameCtx";
//components
import Header from './components/Header';

//UI
import Button from "./UI/Button";
import Board from "./components/quiz board/Board";
import { useContext, useState } from "react";
import Result from "./components/Results";

const App = () => {

  const gameCtx = useContext(context);

  const [startTime, setStartTime] = useState(0);

  const startGameHandler = () => {
    setStartTime(Date.now());
    gameCtx.next();
  }

  const { step } = gameCtx;

  return (
    <div className={style.wrapper}>
      <Header />
      <main style={{ flexGrow: gameCtx.isStarted && gameCtx.step < 10 ? 1 : 0.5 }}>
        {step < 0 && <Button onClick={startGameHandler}>Start Quiz</Button>}
        {step >= 0 && step < 10 && <Board />}
        {step === 10 && <Result startTime={startTime}/>}
      </main>
    </div>
  );
}

export default App;
