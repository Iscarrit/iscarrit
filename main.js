// 音效
function playSound(sound){
    sound.currentTime = 0;
    sound.play();
}

// 隐藏页面
function hide(pageId) {
    document.getElementById(pageId).style.display = "none";
}

// 显示页面
function show(pageId) {
    if (pageId === "gamePage") {
        document.getElementById(pageId).style.display = "grid";
    } else {
        document.getElementById(pageId).style.display = "block";
    }
}

show("mainPage");

hide("gamePage");
hide("universePage");
hide("novelPage");
