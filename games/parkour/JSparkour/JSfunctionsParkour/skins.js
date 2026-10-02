// 颜色
const skins = [

    {id:"black", zh:"黑", en:"Black"},

    {id:"#737373", zh:"灰", en:"Grey"},

    {id:"#733E0A", zh:"棕", en:"Brown",
       unlockLevel:2
    },
        
    {id:"#FF6467", zh:"红", en:"Red",
        unlockLevel:6
    },

    {id:"orange", zh:"橙", en:"Orange",
        unlockLevel:8
    },

    {id:"#2984D1", zh:"蓝", en:"Blue",
        unlockLevel:11
    },

    {id:"#39C5BB", zh:"青", en:"Cyan",
        unlockLevel:18
    },

    {id:"hotpink", zh:"粉", en:"Pink",
        unlockLevel:25
    },

    {id:"#AD46FF", zh:"紫", en:"Purple",
        unlockLevel:32
    },

    {id:"#eee", zh:"空", en:"Air"}
];

// 解锁
function unlockSkinByLevel(lv){

    skins.forEach(s=>{

        if(s.unlockLevel === lv){

            if(!unlockedSkins.includes(s.id)){

                unlockedSkins.push(s.id);

                localStorage.setItem(
                    "unlockedSkins",
                    JSON.stringify(unlockedSkins)
                );

                showUnlockPopup(s);
            }
        }
    });
}

// 皮肤弹窗
function showUnlockPopup(skin){

    // playSound(popupSoundIn);

    const popup =
        document.getElementById("unlockPopup");

    const text =
        document.getElementById("unlockText");

    text.innerText =
        language === "zh"
        ? "新皮肤解锁！"
        : "New Skin Unlocked!";

    popup.style.right = "20px";

    // 绘制皮肤
    const canvas =
        document.getElementById("unlockPreview");

    const ctx3 =
        canvas.getContext("2d");

    ctx3.clearRect(0,0,80,80);

    ctx3.beginPath();

    ctx3.arc(35,35,20,0,Math.PI*2);

    ctx3.fillStyle = skin.id;

    ctx3.fill();

    // 停留几秒
    setTimeout(()=>{

        // playSound(popupSoundOut);

        popup.style.right = "-300px";

    },3000);
}

// 皮肤预览
function drawSkinPreview(){

    const canvas =
        document.getElementById("skinPreview");

    const ctx2 =
        canvas.getContext("2d");

    ctx2.clearRect(0,0,200,200);

    ctx2.beginPath();

    ctx2.arc(100,100,40,0,Math.PI*2);

    ctx2.fillStyle = previewColor;

    ctx2.fill();
}
