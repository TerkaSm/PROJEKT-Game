import "./style.scss";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import imgSwipeBase from "./img/posouvatko_zaklad.svg"
import imgSwipeHome from "./img/posouvatko_domu.svg"
import imgSwipeInfo from "./img/posouvatko_info.svg"
import { FullscreenButton } from "../FullscreenButton";


// export const Navigation = () => {
//   const [swipeButton, setSwipeButton] = useState(null)
//   const [startPosition, setStartPosition] = useState(null);

//   const handleTouchStart = (event) => {
//     setStartPosition(event.touches[0].clientX);
//   };

//   const handleTouchMove = (event) => {
//     if (startPosition !== null) {
//       const currentPosition = event.touches[0].clientX;
//       const deltaPosition = currentPosition - startPosition;

//       // omezení pohybu doleva nebo doprava
//       const newPosition = Math.min(1, Math.max(0, 15 + deltaPosition / window.innerWidth * 100));

//       setSwipeButton(newPosition);
//     }
//   };

//   const navigate = useNavigate()

//   const handleTouchEndHome = () => {
//     navigate('/')
//   };

//   const handleTouchEndInfo = () => {
//     navigate('/info')
//   };

//   return (
//     <nav>
//       <div className="swipe-button swipe-button--1">
//         <img className="swipe-button__base" src={imgSwipeBase} alt="ikona posouvátko" />
//         <img 
//             onTouchStart={handleTouchStart}
//             onTouchMove={handleTouchMove}
//             onTouchEnd={handleTouchEndHome} 
//             style={{ left: `${swipeButton}vmin` }}
//             className="swipe-button__home" 
//             src={imgSwipeHome} alt="ikona domů" />
//       </div>

//       <FullscreenButton />
//       <div className="swipe-button swipe-button--2">
//         <img className="swipe-button__base" src={imgSwipeBase} alt="ikona posouvátko" />
//         <Link to="/info" >
//           <img
//             onTouchStart={handleTouchStart}
//             onTouchMove={handleTouchMove}
//             onTouchEnd={handleTouchEndInfo}
//             style={{ right: `${swipeButton}vmin` }} 
//             className="swipe-button__info" src={imgSwipeInfo} alt="ikona info" />
//         </Link>
//       </div>
//     </nav>
//   );
// };

// ... (předchozí část kódu)

export const Navigation = () => {
  const [swipeButtonHome, setSwipeButtonHome] = useState(null);
  const [swipeButtonInfo, setSwipeButtonInfo] = useState(null);
  const [startPositionHome, setStartPositionHome] = useState(null);
  const [startPositionInfo, setStartPositionInfo] = useState(null);

  const handleTouchStartHome = (event) => {
    setStartPositionHome(event.touches[0].clientX);
  };

  const handleTouchMoveHome = (event) => {
    if (startPositionHome !== null) {
      const currentPosition = event.touches[0].clientX;
      const deltaPosition = currentPosition - startPositionHome;
      const newPosition = Math.min(1, Math.max(0, 15 + deltaPosition / window.innerWidth * 100));
      setSwipeButtonHome(newPosition);
    }
  };

  const handleTouchEndHome = () => {
    navigate('/');
  };

  const handleTouchStartInfo = (event) => {
    setStartPositionInfo(event.touches[0].clientX);
  };

  const handleTouchMoveInfo = (event) => {
    if (startPositionInfo !== null) {
      const currentPosition = event.touches[0].clientX;
      const deltaPosition = currentPosition - startPositionInfo;
      const newPosition = Math.min(1, Math.max(0, 15 + deltaPosition / window.innerWidth * 100));
      setSwipeButtonInfo(newPosition);
    }
  };

  const handleTouchEndInfo = () => {
    navigate('/info');
  };

  return (
    <nav>
      <div className="swipe-button swipe-button--1">
        <img className="swipe-button__base" src={imgSwipeBase} alt="ikona posouvátko" />
        <img
          onTouchStart={handleTouchStartHome}
          onTouchMove={handleTouchMoveHome}
          onTouchEnd={handleTouchEndHome}
          style={{ left: `${swipeButtonHome}vmin` }}
          className="swipe-button__home"
          src={imgSwipeHome} alt="ikona domů" />
      </div>

      <FullscreenButton />

      <div className="swipe-button swipe-button--2">
        <img className="swipe-button__base" src={imgSwipeBase} alt="ikona posouvátko" />
        <img
          onTouchStart={handleTouchStartInfo}
          onTouchMove={handleTouchMoveInfo}
          onTouchEnd={handleTouchEndInfo}
          style={{ right: `${swipeButtonInfo}vmin` }}
          className="swipe-button__info" src={imgSwipeInfo} alt="ikona info" />
      </div>
    </nav>
  );
};
