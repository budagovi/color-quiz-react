import style from "./App.module.css";

import { useContext } from "react";
import { gameContext} from './store/gameState';

//components
import Header from './components/Header';

//UI
import Button from "./UI/Button";

const App = () => {

  const gameCtx = useContext(gameContext);
  const {isStarted} = gameContext;

  const startGameHandler = () => {
    console.log('test');
    gameCtx.checkAnswer();
  }

  return (
    <div className={style.wrapper}>
      <Header />
      <main>
        {!gameCtx.isStarted && <Button onClick={startGameHandler}>Start Quiz</Button>}
      </main>
    </div>
  );
}

export default App;
