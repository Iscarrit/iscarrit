// 皮肤按钮
document.getElementById("skinBtn").onclick = ()=>{

    breakLanguageCombo();

    playSound(clickSound);

    document.getElementById("menu").style.display = "none";

    document.getElementById("skinMenu").style.display = "flex";

    updateUIVisibility();

    createColorButtons();

    drawSkinPreview();
};

// 颜色按钮
function createColorButtons(){

    const box = document.getElementById("colorButtons");

    box.innerHTML = "";

    skins.forEach(c => {

        const btn = document.createElement("button");

        const isUnlocked =
        unlockedSkins.includes(c.id);

        btn.disabled = !isUnlocked;

        btn.onclick = () => {

            playSound(clickSound);

            const isUnlocked =
                unlockedSkins.includes(c.id);

            if(!isUnlocked){
                return;
            }

            previewColor = c.id;

            drawSkinPreview();
        };

        let skinName =
        language === "zh"
        ? c.zh
        : c.en;

        // 彩蛋
        const nige3 =
            achievements.find(a=>a.id==="nige_3");

        if(
            c.id === "black" &&
            nige3 &&
            nige3.unlocked
        ){

            skinName =
                language === "zh"
                ? "倪哥"
                : "Nigga";
        }

        btn.innerText =
            isUnlocked
            ? skinName
            : "🔒";

        box.appendChild(btn);
    });
}

// 返回
document.getElementById("backSkin").onclick = ()=>{

    playSound(clickSound);

    previewColor = playerColor;

    document.getElementById("skinMenu").style.display = "none";

    document.getElementById("menu").style.display = "flex";

    updateUIVisibility();
};

// 确定
document.getElementById("confirmSkin").onclick = ()=>{

    playSound(clickSound);

    playerColor = previewColor;

    localStorage.setItem(
        "equippedSkin",
        playerColor
    );

    document.getElementById("skinMenu").style.display = "none";

    document.getElementById("menu").style.display = "flex";

    updateUIVisibility();
};
