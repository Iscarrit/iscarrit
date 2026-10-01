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

/* 更新日志，版本0.3.3-alpha.4，2026/9/30/21:45/：
    -重新定位了项目为综合型个人网站；
    -《老爷卡carの跑酷》变为了《老爷卡car官网》下的一个分支；
    -加入了过多功能，根本记不住；
    -更改了部分data的文件，现在不是Base64了；
    -后续可能更改data文件格式为JSON。
*/