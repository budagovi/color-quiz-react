import style from './Button.module.css';

const Button = ({children, onClick, isDisabled = false}) => {
  return (
    <button 
      className={style.btn}
      onClick={onClick} 
      disabled={isDisabled}
    >
      {children}
    </button>
  )
}

export default Button;