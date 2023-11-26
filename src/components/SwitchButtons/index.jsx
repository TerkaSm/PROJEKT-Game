import "./style.scss";
import { Link } from "react-router-dom";
import imgSwichBase from "./img/posouvatko_zaklad.svg"
import imgSwichHome from "./img/posouvatko_domu.svg"
import imgSwichInfo from "./img/posouvatko_info.svg"


export const SwitchButtons = () => {
  return (
    <>
      <div className="switch-button switch-button--1">
        <img className="switch-button__base" src={imgSwichBase} alt="ikona posouvátko" />
        <Link to="/vyber-zviratka" >
          <img className="switch-button__home" src={imgSwichHome} alt="ikona domů" />
        </Link>
      </div>

      <div className="switch-button switch-button--2">
        <img className="switch-button__base" src={imgSwichBase} alt="ikona posouvátko" />
        <Link to="/info" >
          <img className="switch-button__info" src={imgSwichInfo} alt="ikona info" />
        </Link>
      </div>
    </>
  );
};