// 手机切换按钮
document.getElementById("mobileBtn").onclick = ()=>{

    playSound(clickSound);

    mobileMode = !mobileMode;

    localStorage.setItem(
        "mobileMode",
        mobileMode
    );

    showMessage(

        mobileMode

        ? (
            language === "zh"
            ? "已切换到手机端"
            : "Mobile Mode Enabled"
        )

        : (

            language === "zh"
            ? "已关闭手机端"
            : "Mobile Mode Disabled"
        )
    );

    updateMobileUI();
};

// 手机退出
document.getElementById("mobileExit").onclick = ()=>{

    playSound(clickSound);

    exitToMenu();
};
