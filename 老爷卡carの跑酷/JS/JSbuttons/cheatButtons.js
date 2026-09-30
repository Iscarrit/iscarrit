// 作弊
document.addEventListener("keydown", function(e){

    if(e.key === "/" && gameStarted){

        e.preventDefault();

        playSound(clickSound);

        showInput(

            language === "zh"
            ? "输入关卡号（从1开始）"
            : "Enter level number",

            function(input){

                // 作弊码
                if(input === "copenhagen"){

                    unlockAllSkins();

                    showMessage(
                        language === "zh"
                        ? "已解锁全部皮肤！"
                        : "All skins unlocked!"
                    );

                    createColorButtons();

                    return;
                }

                if(input === "soul"){

                    cheatMode = !cheatMode;

                    showMessage(
                        cheatMode
                            ? (language === "zh" ? "已开启无敌模式" : "God Mode Enabled")
                            : (language === "zh" ? "已关闭无敌模式" : "God Mode Disabled")
                    );

                    return;
                }

                if(input === "warp"){

                    tpCheat = !tpCheat;

                    showMessage(
                        tpCheat
                            ? (language === "zh" ? "已开启点击传送" : "Click Teleport Enabled")
                            : (language === "zh" ? "已关闭点击传送" : "Click Teleport Disabled")
                    );

                    return;
                }

                /*踩鼠标 if(input === "gui!!!"){

                    mousePlatformCheat = !mousePlatformCheat;

                    showMessage(
                        mousePlatformCheat
                            ? (language === "zh" ? "已开启幽灵地形鼠标" : "Mouse Ghost Ground Enabled")
                            : (language === "zh" ? "已关闭幽灵地形鼠标" : "Mouse Ghost Ground Disabled")
                    );

                    return;
                }*/

                let target =
                    parseInt(input) - 1;

                if(isNaN(target)){

                    showMessage(
                        language === "zh"
                        ? "请输入数字"
                        : "Please enter a number"
                    );

                    return;
                }

                if(target < 0 || target >= levels.length){

                    showMessage(
                        language === "zh"
                        ? "关卡不存在"
                        : "Level does not exist"
                    );

                    return;
                }

                level = target;

                loadLevel(level);
            }
        );
    }
});
