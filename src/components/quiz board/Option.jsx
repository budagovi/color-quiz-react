import { useEffect, useState } from 'react';
import style from './Option.module.css';
import CorrectIcon from '../icons/CorrectIcon';
import IncorrectIcon from '../icons/IncorrectIcon';
import Button from '../../UI/Button';

//flag prop is used to maintain selected option highlited
const Option = ({ color, letter, onClick, answer }) => {


  const [clicked, setClicked] = useState(false);

  const clickHandler = () => {
    setClicked(true);
    onClick(color);
  }

  useEffect(() => {
    setClicked(false);
  }, [color])

  let icon = <CorrectIcon />;
  if (clicked && answer !== color) icon = <IncorrectIcon />;

  return (
    <button
      className={style.wrapper}
      onClick={clickHandler}
      style={clicked || color === answer ? { "backgroundColor": color + "AA" } : undefined}
      disabled={answer}
    >
      <span>
        {answer === color || clicked ? icon : String.fromCharCode(letter + 65)}
      </span>
      <span>
        {color}
      </span>
    </button>
  )
}

export default Option;