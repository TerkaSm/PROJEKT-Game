import "./style.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import imgSwitchBase from "./img/posouvatko_zaklad.svg"
import imgSwitchHome from "./img/posouvatko_domu.svg"
import imgSwitchInfo from "./img/posouvatko_info.svg"


export const SwitchButtons = () => {
  const [switchButton, setSwitchButton] = useState(null)
  const [startPosition, setStartPosition] = useState(null);

  const handleTouchStart = (event) => {
    setStartPosition(event.touches[0].clientX);
  };

  const handleTouchMove = (event) => {
    if (startPosition !== null) {
      const currentPosition = event.touches[0].clientX;
      const deltaPosition = currentPosition - startPosition;

      // omezení pohybu doleva nebo doprava
      const newLeftPosition = Math.min(1, Math.max(0, 15 + deltaPosition / window.innerWidth * 100));

      setSwitchButton(newLeftPosition);
    }
  };

  const handleTouchEnd = () => {
    setStartPosition(null);
  };

  return (
    <>
      <div className="switch-button switch-button--1">
        <img className="switch-button__base" src={imgSwitchBase} alt="ikona posouvátko" />
        <Link to="/vyber-zviratka" >
          <img onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd} 
            style={{ left: `${switchButton}vmin` }}
            className="switch-button__home" 
            src={imgSwitchHome} alt="ikona domů" />
        </Link>
      </div>

      <div className="switch-button switch-button--2">
        <img className="switch-button__base" src={imgSwitchBase} alt="ikona posouvátko" />
        <Link to="/info" >
          <img className="switch-button__info" src={imgSwitchInfo} alt="ikona info" />
        </Link>
      </div>
    </>
  );
};
