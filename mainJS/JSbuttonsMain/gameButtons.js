// 游戏按钮
document.getElementById("gameBtn").onclick = () => {

    playSound(mainClickSound); 

    show("gamePage");
    document.getElementById("gameFrame").style.display = "none";
    document.getElementById("gameFrame").src = "";
}

document.getElementById("parkourBtn").onclick = () => {

    playSound(mainClickSound);

    show("gameFrame");
    document.getElementById("gameFrame").src = "games/parkour/parkour.html";
}