// 清空按钮
document.getElementById("newGameBtn").onclick = ()=>{

    playSound(clickSound);

    document.getElementById("menu").style.display = "none";
    document.getElementById("deleteConfirm").style.display = "flex";

    document.getElementById("deleteText").innerText =
        language === "zh"
        ? "确定要清空存档吗？"
        : "Are you sure you want to delete your save?";

    document.getElementById("confirmYes").innerText =
        language === "zh"
        ? "确定"
        : "Confirm";

    document.getElementById("confirmNo").innerText =
        language === "zh"
        ? "取消"
        : "Cancel";
};

// 取消
document.getElementById("confirmNo").onclick = ()=>{

    playSound(clickSound);

    document.getElementById("deleteConfirm").style.display = "none";
    document.getElementById("menu").style.display = "flex";
};

// 确定
document.getElementById("confirmYes").onclick = ()=>{

    playSound(clickSound);

    // 删除存档
    localStorage.removeItem("savedLevel");
    localStorage.removeItem("unlockedSkins");
    localStorage.removeItem("equippedSkin");
    localStorage.removeItem("achievements");
    localStorage.removeItem("levelCleared");

    levelCleared = [];

    // 重置内存状态
    unlockedSkins = defaultSkins;
    equippedSkin = "black";
    playerColor = "black";
    previewColor = "black";

    achievements.forEach(a=>{
        a.unlocked = false;
    });

    refreshMenu();

    // 回主界面
    document.getElementById("deleteConfirm").style.display = "none";
    document.getElementById("menu").style.display = "flex";

    showMessage(
        language === "zh"
        ? "存档已删除"
        : "Save deleted"
    );
};