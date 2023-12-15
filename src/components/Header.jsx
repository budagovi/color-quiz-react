import { useContext, useEffect } from 'react';
import style from './Header.module.css';
import context from '../store/gameCtx';

const Header = () => {

  const gameCtx = useContext(context);
  const { step, score } = gameCtx;

  const scorePointer = document.getElementById('score');
  useEffect(() => {
    if(!scorePointer) return;
    scorePointer.classList.add(style.score);
    const timer = setInterval(() => {
      scorePointer.classList.remove(style.score);
    }, 500);

    return () => { clearInterval(timer)}
  }, [score])

  return (
    <div className={style.wrapper}>
      <span>Color Quiz</span>
      {step > -1 && step < 10 && 
        <>
          <span>Guessed <span id='score'>{score}</span></span> 
          <span>{step + 1}/10</span>
        </>
      }
    </div>
  )
}

export default Header;