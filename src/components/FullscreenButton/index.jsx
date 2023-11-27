export const FullscreenButton = () => {

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

  return <button onClick={openFullscreen}>Otevřít na plnou obrazovku</button>;
};
