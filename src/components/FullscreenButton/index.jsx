import { useState } from "react";

export const FullscreenButton = () => {
  const [fullScreen, setOpenScreen] = useState(null)

  openFullscreen = () => {
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

  screen.orientation.lock('landscape')

  return <button onClick={this.openFullscreen}>Otevřít na plnou obrazovku</button>;
};
