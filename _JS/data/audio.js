const mainClickSound = new Audio("/_DATA/audio/buttonMain.mp3");

// 音效
function playSound(sound) {
    sound.currentTime = 0;
    sound.play();
}
