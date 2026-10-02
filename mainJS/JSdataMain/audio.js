const mainClickSound = new Audio("mainData/mainAudio/buttonMain.mp3");

// 音效
function playSound(sound){
    sound.currentTime = 0;
    sound.play();
}
