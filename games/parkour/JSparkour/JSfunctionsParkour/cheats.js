// 皮肤作弊码
function unlockAllSkins(){
    unlockedSkins = skins.map(s => s.id);

    playSound(completeSound);

    localStorage.setItem(
        "unlockedSkins",
        JSON.stringify(unlockedSkins)
    );

    createColorButtons();
}

// 传送作弊码
const c = document.getElementById("game");

c.addEventListener("mousemove", e=>{

    const rect = c.getBoundingClientRect();

    mouseX = (e.clientX - rect.left) * (c.width / rect.width);
    mouseY = (e.clientY - rect.top) * (c.height / rect.height);

});

c.addEventListener("click", ()=>{

    if(tpCheat){

        playSound(clickSound);

        player.x = mouseX;
        player.y = mouseY;

        player.vx = 0;
        player.vy = 0;
    }

});

// 踩鼠标作弊码
c.addEventListener("mousemove", e => {

    const rect = c.getBoundingClientRect();

    mouseX = (e.clientX - rect.left) * (c.width / rect.width);
    mouseY = (e.clientY - rect.top) * (c.height / rect.height);

});

document.getElementById("popupInput").addEventListener("keydown", function(e){

    if(e.key === "Enter"){

        document.getElementById("popupConfirm").click();
    }
});

function bindMobileButton(id, key){

    const btn =
        document.getElementById(id);

    // 手机触摸
    btn.addEventListener("touchstart", e=>{

        e.preventDefault();

        keys[key] = true;

        playSound(clickSound);
    });

    btn.addEventListener("touchend", e=>{

        e.preventDefault();

        keys[key] = false;
    });

    btn.addEventListener("touchcancel", e=>{

        e.preventDefault();

        keys[key] = false;
    });

    // 电脑点击
    btn.addEventListener("mousedown", ()=>{

        keys[key] = true;

        playSound(clickSound);
    });

    btn.addEventListener("mouseup", ()=>{

        keys[key] = false;
    });

    btn.addEventListener("mouseleave", ()=>{

        keys[key] = false;
    });
}

bindMobileButton("mobileLeft", "a");

bindMobileButton("mobileRight", "d");

bindMobileButton("mobileJump", " ");
