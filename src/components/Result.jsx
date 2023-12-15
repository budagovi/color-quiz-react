import { useContext } from 'react';
import Button from '../UI/Button';
import style from './Result.module.css';
import context from '../store/gameCtx';

const Result = ({startTime}) => {

  const gameCtx = useContext(context);
  const {score} = gameCtx;

  const time = Date.now() - startTime;

  let text = `You guessed ${score} colors`;
  if(score ===1) text = `You guessed ${score} color`;
  else if (score === 0) text = `Unfortunately, you did not guess any color`;

  const resetHandler = () => {
    gameCtx.reset();
  }

  return (
    <div className={style.wrapper}>
      <span className={style.score}>{text}</span>
      <span className={style.time}>time: {(time/1000).toFixed(0)} seconds</span>
      <Button onClick={resetHandler}>Play Again</Button>
    </div>
  )
}

export default Result;