import { ButtonProps } from "./interface";
import { styles } from "./helpers/styles";

export const Button = ({ type = "button", btnStyle, text, className = "", onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${styles[btnStyle]} ${className}`}>
      {text}
    </button>
  )
}
