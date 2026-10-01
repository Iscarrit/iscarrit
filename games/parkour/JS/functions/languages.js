// 切换
let eightCountry = 0;
let onlyLanguageSwitching = true;

function updateLanguageUI(){

    if(language === "zh"){
        
        document.title = "老爷卡carの跑酷";

        document.getElementById("title").innerText = "老爷卡carの跑酷";
        document.getElementById("versionInfo").innerText = "版本 " + VERSION;

        document.getElementById("startBtn").innerText = "开始游戏";
        document.getElementById("newGameBtn").innerText = "清空存档";
        document.getElementById("langBtn").innerText = "Switch Language";
        document.getElementById("skinBtn").innerText = "皮肤";
        
        document.getElementById("backSkin").innerText = "返回";
        document.getElementById("confirmSkin").innerText = "确定";

        document.getElementById("switchLevelsText").innerText = "使用【/】键切换关卡";
        document.getElementById("backToMainText").innerText = "使用【Esc】键回到主菜单";
        document.getElementById("openAchText").innerText = "使用【L】键查看成就";

        document.getElementById("skinTitle").innerText = "选择皮肤";

        document.getElementById("achTitle").innerText = "成就";
        document.getElementById("achExit").innerText = "退出";

        document.getElementById("currentLevelsText").innerText = "现在一共有" + levels.length + "关";
    }
    else{

        document.title = "Iscarrit's Parkour";

        document.getElementById("title").innerText = "Iscarrit's Parkour";
        document.getElementById("versionInfo").innerText = "Version " + VERSION;

        document.getElementById("startBtn").innerText = "Start Game";
        document.getElementById("newGameBtn").innerText = "Clear Save";
        document.getElementById("langBtn").innerText = "切换语言";
        document.getElementById("skinBtn").innerText = "Skin";

        document.getElementById("backSkin").innerText = "Back";
        document.getElementById("confirmSkin").innerText = "Confirm";

        document.getElementById("switchLevelsText").innerText = "Use [/] to switch levels";
        document.getElementById("backToMainText").innerText = "Use [Esc] to return to the main menu";
        document.getElementById("openAchText").innerText = "Use [L] to view achievements";

        document.getElementById("skinTitle").innerText = "Select Skin";

        document.getElementById("achTitle").innerText = "Achievements";
        document.getElementById("achExit").innerText = "Exit";

        document.getElementById("currentLevelsText").innerText = "There are now " + levels.length + " levels";
    }
}
