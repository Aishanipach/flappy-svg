// show the start screen

function showStartScreen() {
    layerNamed('startscreen').style.display = 'inline'; // none = hide layer

}

// start the game

function startGame() {
    // this must be configured one mousedown event in the start screen
    layerNamed('startscreen').style.display = 'none'; // none = hide layer
    startFlapping('bird');
    startMovingBackgound('background', -7);
    scaleToFullscreen();
}