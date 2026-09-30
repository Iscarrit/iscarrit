// 成就
let achievements = [
    {
        id:"finish_level_1",
        desc_zh:"完成新手教程",
        desc_en:"Complete the beginner tutorial",
        level:1, 
        color:"grey",
        unlocked:false,
        cheatLocked:false
    },
    {
        id:"finish_all",
        desc_zh:"通过所有关卡",
        desc_en:"Complete all levels",
        level:2,
        color:"green",
        unlocked:false,
        cheatLocked:false
    },
    {
        id:"eight_country",
        desc_zh:"八国联军",
        desc_en:"The Eight-Nation Alliance",
        level:2,
        color:"green",
        unlocked:false,
        cheatLocked:false
    },
    {
        id:"one_nine_seven_country",
        desc_zh:"一百九十七国联军",
        desc_en:"The 197-Nation Alliance",
        level:3,
        color:"blue",
        unlocked:false,
        cheatLocked:false
    },
    {
        id:"nige_1",
        desc_zh:"使用【空】皮肤完成新手教程",
        desc_en:"Complete the beginner tutorial using [Air] skin.",
        level:2,
        color:"green",
        unlocked:false,
        cheatLocked:false
    },
    {
        id:"nige_2",
        desc_zh:"使用【空】皮肤完成第二关",
        desc_en:"Complete the second level using [Air] skin.",
        level:3,
        color:"blue",
        unlocked:false,
        cheatLocked:false
    },
    {
        id:"nige_3",
        desc_zh:"使用【空】皮肤完成第三关",
        desc_en:"Complete the third level using [Air] skin.",
        level:4,
        color:"purple",
        unlocked:false,
        cheatLocked:false
    },
];

const nige1 = achievements.find(a => a.id === "nige_1");
const nige2 = achievements.find(a => a.id === "nige_2");

function checkFinishAll(){

    const totalLevels = levels.length;

    for(let i = 0; i < totalLevels; i++){

        if(!levelCleared.includes(i)){
            return;
        }
    }

    unlockAchievement("finish_all");

    if(!unlockedSkins.includes("#eee")){

        unlockedSkins.push("#eee");

        localStorage.setItem(
            "unlockedSkins",
            JSON.stringify(unlockedSkins)
        );

        const airSkin =
            skins.find(s=>s.id === "#eee");

        showUnlockPopup(airSkin);
    }
}

let achievementMenuOpen = false;
let achOpenedFromGame = false;

const roman = ["Ⅰ","Ⅱ","Ⅲ","Ⅳ","Ⅴ"];

const achievementColors = {
    grey:"#9E9E9E",
    green:"#2ECC71",
    blue:"#3498DB",
    purple:"#9B59B6",
    gold:"#F1C40F"
};

// 读取存档
const savedAchievements =
    JSON.parse(localStorage.getItem("achievements"));

if(savedAchievements){

    achievements.forEach(a=>{

        const saved =
            savedAchievements.find(
                s=>s.id === a.id
            );

        if(saved){

            a.unlocked = saved.unlocked;
        }
    });
}

// 渲染
function renderAchievements(){

    const list =
        document.getElementById("achList");

    list.innerHTML = "";

    achievements.forEach(a=>{

        const div =
            document.createElement("div");

        div.className = "achItem";

        const shape = document.createElement("div");

        shape.style.width = "28px";
        shape.style.height = "28px";

        shape.style.background =
            achievementColors[a.color];

        shape.style.flexShrink = "0";

        shape.style.clipPath =
            a.level === 1 ? "polygon(50% 0%, 0% 100%, 100% 100%)" :
            a.level === 2 ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)" :
            a.level === 3 ? "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)" :
            a.level === 4 ? "polygon(50% 0%, 90% 25%, 100% 70%, 65% 100%, 35% 100%, 0% 70%, 10% 25%)" :
            "polygon(50% 0%, 80% 15%, 100% 50%, 80% 85%, 50% 100%, 20% 85%, 0% 50%, 20% 15%)";

        const romanText =
            document.createElement("div");

        romanText.innerText =
            roman[a.level - 1] || a.level;

        romanText.style.width = "40px";
        romanText.style.textAlign = "center";
        romanText.style.fontSize = "22px";

        const desc =
            document.createElement("div");

        desc.style.flex = "1";
        desc.style.fontSize = "22px";

        if(a.unlocked){

            desc.innerText =
                language === "zh"
                ? a.desc_zh
                : a.desc_en;

        } else {

            desc.innerText = "";

            div.style.opacity = "0.35";
        }

        div.appendChild(shape);
        div.appendChild(romanText);
        div.appendChild(desc);

        list.appendChild(div);
    });
}

// 解锁
function unlockAchievement(id){

    const ach =
        achievements.find(a=>a.id === id);

    if(!ach || ach.unlocked) return;

    ach.unlocked = true;

    playSound(achievementSound);

    localStorage.setItem(
        "achievements",
        JSON.stringify(
            achievements.map(a=>
                ({
                    id:a.id,
                   unlocked:a.unlocked
                })
            )
        )
    );

    showAchievementPopup(ach);
}

// 锁
function safeUnlock(id){

    if(input === "kill @e") return;

    unlockAchievement(id);
}

// 打开
function openAch(){

    breakLanguageCombo();

    keys = {};

    playSound(clickSound);

    achievementMenuOpen = true;
    achOpenedFromGame = gameStarted;

    document.getElementById("menu").style.display = "none";
    document.getElementById("achMenu").style.display = "flex";

    renderAchievements();

    gameStarted = false;
}

// 关闭
function closeAch(){

    playSound(clickSound);

    achievementMenuOpen = false;

    document.getElementById("achMenu").style.display = "none";

    if(achOpenedFromGame){

        gameStarted = true;

        c.focus();
    }
    else{
        document.getElementById("menu").style.display = "flex";
    }
}

// 弹窗
function showAchievementPopup(ach){

    // playSound(popupSoundIn);

    const popup =
        document.getElementById("achUnlockPopup");

    const text =
        document.getElementById("achUnlockText");

    const desc =
        document.getElementById("achUnlockDesc");

    text.innerText =
        language === "zh"
        ? "成就解锁！"
        : "Achievement Unlocked!";

    desc.innerText =
        language === "zh"
        ? ach.desc_zh
        : ach.desc_en;

    // 弹出（左侧进场）
    popup.style.left = "20px";

    setTimeout(()=>{

        // playSound(popupSoundOut);

        popup.style.left = "-300px";

    },3000);
}
