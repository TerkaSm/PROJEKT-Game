import "./style.scss";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import imgSwipeBase from "./img/posouvatko_zaklad.svg"
import imgSwipeHome from "./img/posouvatko_domu.svg"
import imgSwipeInfo from "./img/posouvatko_info.svg"
import { FullscreenButton } from "../FullscreenButton";


export const Navigation = () => {
  const [swipeButton, setSwipeButton] = useState(null)
  const [startPosition, setStartPosition] = useState(null);

  const handleTouchStart = (event) => {
    setStartPosition(event.touches[0].clientX);
  };

  const handleTouchMove = (event) => {
    if (startPosition !== null) {
      const currentPosition = event.touches[0].clientX;
      const deltaPosition = currentPosition - startPosition;

      // omezení pohybu doleva nebo doprava
      const newPosition = Math.min(1, Math.max(0, 15 + deltaPosition / window.innerWidth * 100));

      setSwipeButton(newPosition);
    }
  };

  const navigate = useNavigate()

  const handleTouchEndHome = () => {
    navigate('/')
  };

  const handleTouchEndInfo = () => {
    navigate('/info')
  };

  return (
    <nav>
      <div className="swipe-button swipe-button--1">
        <img className="swipe-button__base" src={imgSwipeBase} alt="ikona posouvátko" />
        <img 
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEndHome} 
            style={{ left: `${swipeButton}vmin` }}
            className="swipe-button__home" 
            src={imgSwipeHome} alt="ikona domů" />
      </div>

      <FullscreenButton />
      <div className="swipe-button swipe-button--2">
        <img className="swipe-button__base" src={imgSwipeBase} alt="ikona posouvátko" />
        <Link to="/info" >
          <img
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEndInfo}
            style={{ right: `${swipeButton}vmin` }} 
            className="swipe-button__info" src={imgSwipeInfo} alt="ikona info" />
        </Link>
      </div>
    </nav>
  );
};
