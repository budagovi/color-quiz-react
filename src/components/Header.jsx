import style from './Header.module.css';

const Header = () => {
  return (
    <div className={style.wrapper}>
      <span>200</span>
      <span>Color Quiz</span>
      <span>1/10</span>
    </div>
  )
}

export default Header;