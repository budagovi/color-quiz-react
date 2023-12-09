import { useContext } from 'react';
import style from './Header.module.css';
import context from '../store/gameCtx';

const Header = () => {

  const gameCtx = useContext(context);

  return (
    <div className={style.wrapper}>
      <span>{gameCtx.score}</span>
      <span>Color Quiz</span>
      <span>{gameCtx.step+1}/10</span>
    </div>
  )
}

export default Header;