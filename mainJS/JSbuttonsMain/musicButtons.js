// 音乐按钮
document.getElementById("musicBtn").onclick = () => {

    playSound(mainClickSound);

    show("musicPage");
}

document.getElementById("songsCardBtn").onclick = () => {

    playSound(mainClickSound);

    show("musicSongsPage");
}