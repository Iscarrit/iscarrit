// 刷新UI
function updateMobileUI(){

    const left =
        document.getElementById("mobileLeft");

    const right =
        document.getElementById("mobileRight");

    const jump =
        document.getElementById("mobileJump");

    const exit =
        document.getElementById("mobileExit");

    const mobileBtn =
        document.getElementById("mobileBtn");

    // 主菜单显示手机按钮
    mobileBtn.style.display =
        gameStarted ? "none" : "block";

    // 游戏内显示虚拟按键
    if(gameStarted && mobileMode){

        left.style.display = "block";

        right.style.display = "block";

        jump.style.display = "block";

        exit.style.display = "block";
    }
    else{

        left.style.display = "none";

        right.style.display = "none";

        jump.style.display = "none";

        exit.style.display = "none";
    }

    // 隐藏键盘提示
    document.getElementById("switchLevelsText").style.display =
        mobileMode ? "none" : "block";

    document.getElementById("backToMainText").style.display = 
        mobileMode ? "none" : "block";

    document.getElementById("openAchText").style.display = 
        mobileMode ? "none" : "block";
}

function updateUIVisibility(){

    const achBtn = document.getElementById("achBtn");

    // 皮肤界面时隐藏
    if(document.getElementById("skinMenu").style.display === "flex"){
        achBtn.style.display = "none";
    }
    else{
        achBtn.style.display = "block";
    }
}
