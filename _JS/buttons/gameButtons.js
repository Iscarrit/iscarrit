// 游戏按钮
function bindButton(id, callback) {
    const btn = document.getElementById(id);

    if (!btn) return;

    btn.onclick = () => {
        callback();
    };
}

bindButton("gameCollectionCardBtn", () => show("game/gameCollections"));
bindButton("carGameCardBtn", () => show("game/carGames"));

bindButton("parkourBtn", () => {
    if (document.getElementById("gameFrame").style.display === "none") {
        document.getElementById("carGamePage").style.display = "none";
        document.getElementById("gameFrame").style.display = "block";
        document.getElementById("gameFrame").src =
            "/game/carGames/parkour/index.html";
    } else {
        document.getElementById("gameFrame").src = "about:blank";
        document.getElementById("gameFrame").style.display = "none";
        document.getElementById("carGamePage").style.display = "block";
    }
});
