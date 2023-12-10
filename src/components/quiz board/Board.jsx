import { useContext, useState } from 'react';
import style from './Board.module.css';
import context from '../../store/gameCtx';
import Option from './Option';
import Button from '../../UI/Button';

const Board = () => {

  const gameCtx = useContext(context);
  const { color, answers } = gameCtx.colors[gameCtx.step];

  const [selected, setSelected] = useState('');


  const checkAnswer = (option) => {
    setSelected(option);

    if(option === color) {
      gameCtx.addScore();
    }
  }

  const nextColor = () => {
    gameCtx.next();
    setSelected('');
  }

  return (
    <>
      <div
        className={style.banner}
        style={{ "backgroundColor": `${color}` }}
      />
      <div className={style.options}>
        {answers.map((c, i = 0) =>
          <Option
            color={c}
            letter={i++}
            key={i++}
            onClick={checkAnswer}
            answer={selected && color}
          />)}
      </div>
      <Button 
        isDisabled={!selected}
        onClick={nextColor}
      >
        Continue
      </Button>
    </>
  )
}

export default Board;