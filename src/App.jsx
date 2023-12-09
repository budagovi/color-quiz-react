import style from "./App.module.css";

import context from "./store/gameCtx";
//components
import Header from './components/Header';

//UI
import Button from "./UI/Button";
import Board from "./components/quiz board/Board";
import { useContext } from "react";

const App = () => {

  const gameCtx = useContext(context);

  const startGameHandler = () => {
    gameCtx.startGame();
  }

  return (
    <div className={style.wrapper}>
      <Header />
      <main style={{ flexGrow: !gameCtx.isStarted ? 0.5 : 1 }}>
        {!gameCtx.isStarted ? <Button onClick={startGameHandler}>Start Quiz</Button> : <Board />}
      </main>
    </div>
  );
}

export default App;
