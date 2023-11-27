import "./style.scss";
import { Link } from "react-router-dom";
import clsx from 'clsx'

export const buttonColor = {
  primary: 'primary',
  secondary: 'secondary',
}

export const Button = ({to, children, color = buttonColor.primary}) => {

  return (
    <Link className={clsx('button', `button--${color}`)} to={to}>{children}</Link>
  );
};
