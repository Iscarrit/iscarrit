// 开始按钮
document.getElementById("startBtn").onclick = () => {

    breakLanguageCombo();

    playSound(clickSound);

    let saved =
        localStorage.getItem("savedLevel");

    if(saved !== null){

        level = parseInt(saved);
    }
    else{

        level = 0;
    }

    loadLevel(level);

    document.getElementById("menu").style.display =
        "none";

    gameStarted = true;

    c.focus();
};