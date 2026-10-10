// 音乐按钮
document.getElementById("musicBtn").onclick = () => {

    playSound(mainClickSound);

    show("musicPage");
}

document.getElementById("songsCardBtn").onclick = () => {

    playSound(mainClickSound);

    show("musicSongsPage");
}

document.getElementById("artistsCardBtn").onclick = () => {

    playSound(mainClickSound);

    show("musicArtistsPage")
}

for (let i = 1; i <= document.getElementById("musicArtistsPagePage").children.length; i++) {
    const btn = document.getElementById(`musicArtistsPageCard${i}Btn`);

    if (btn) {
        btn.onclick = () => {

            playSound(mainClickSound);
            show(`musicArtistsPagePage${i}`);
            
        };
    }
}