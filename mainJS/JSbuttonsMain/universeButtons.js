// 世界观按钮
document.getElementById("universeBtn").onclick = () => {

    playSound(mainClickSound);

    show("universePage");
}

document.getElementById("universePageCard1Btn").onclick = () => {

    playSound(mainClickSound);

    show("universeCharactersPage1");
}

document.getElementById("universePageCard2Btn").onclick = () => {

    playSound(mainClickSound);

    show("universeCharactersPage2");
}