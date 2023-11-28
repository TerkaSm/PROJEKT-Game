import React from 'react';
import "./style.scss";
import { useState } from 'react';

export const FullscreenButton = () => {
  const [fullScreen, setFullScreen] = useState(true)
  
  const handleClick = () => {
    setFullScreen(openFullscreen)
    if (!fullScreen) {
      setFullScreen
    }
  }
  const openFullscreen = () => {
    const element = document.documentElement;

    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
  };

  return <button onClick={handleClick} className='full-screen-button'>{!fullScreen? "Zavřít" : "Otevřít na"} plnou obrazovku</button>;
};

