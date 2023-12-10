import { useContext } from 'react';
import style from './Header.module.css';
import context from '../store/gameCtx';

const Header = () => {

  const gameCtx = useContext(context);
  const { step, score } = gameCtx;

  return (
    <div className={style.wrapper}>
      <span>Color Quiz</span>
      {step > -1 && step < 10 && 
        <>
          <span>Guessed {score}</span> 
          <span>{step + 1}/10</span>
        </>
      }
    </div>
  )
}

export default Header;