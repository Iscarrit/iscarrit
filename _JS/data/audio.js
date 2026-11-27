/* 按钮
document.addEventListener(
    "click",
    (event) => {
        const button = event.target.closest("button");

        if (!button || button.disabled) return;

        const sound = new Audio("/_DATA/audio/buttonMain.mp3");
        sound.currentTime = 0;
        sound.play();
    },
    true,
);
*/
