// 游戏按钮
document.getElementById("gameBtn").onclick = () => {

    playSound(mainClickSound); 

    show("gamePage");
    hide("mainPage");
    hide("universePage");
    hide("novelPage");
}