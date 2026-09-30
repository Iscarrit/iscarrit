const ctx = c.getContext("2d");

let keys = {};
let level = 0;
let frame = 0;

let gameStarted = false;

const VERSION = "1.16.7";

// 音效
function playSound(sound){
    sound.currentTime = 0;
    sound.play();
}

// BGM
bgm.loop = true;
bgm.volume = 0.8;
let bgmStarted = false;
function startBGM(){

    if(bgmStarted) return;

    bgmStarted = true;

    bgm.play().catch(()=>{});
}

window.addEventListener("pointerdown", startBGM, {once:true});

let language =
    localStorage.getItem("language") || "zh";

// 玩家
let playerColor = "black";
let previewColor = "black";
const defaultSkins = ["black","#737373"];

let cheatMode = false;
let tpCheat = false;
let mousePlatformCheat = false;

let mouseX = 0;
let mouseY = 0;

let mobileMode =
    localStorage.getItem("mobileMode") === "true";

let unlockedSkins =
    JSON.parse(localStorage.getItem("unlockedSkins"))
    || defaultSkins;

let equippedSkin =
    localStorage.getItem("equippedSkin")
    || "black";

playerColor = equippedSkin;
previewColor = equippedSkin;

let player = {
    x:50,
    y:200,
    r:15,

    vx:0,
    vy:0,

    onGround:false,
    jumpTime:0,
    onSpeedPad:false
};

// 尾迹
let trail = [];

// 参数
const gravity = 0.6;
const friction = 0.92;
const maxJumpTime = 12;

// 速度参数
let normalMaxSpeed = 7;
let speedPadMaxSpeed = 30;

// 关卡
let levelCleared = JSON.parse(localStorage.getItem("levelCleared")) || [];
document.getElementById("currentLevelsText").innerText = "现在一共有" + levels.length + "关";

const mousePlatform = {
    x:0,y:0,w:10,h:0
};

let platforms = [];

// 刷新页面
function refreshMenu(){

    let savedLevel =
        localStorage.getItem("savedLevel");

    let savedAchievements =
        localStorage.getItem("achievements");

    let savedSkins =
        localStorage.getItem("unlockedSkins");

    const hasSave =
        savedLevel !== null ||
        savedAchievements !== null ||
        savedSkins !== null;

    if(hasSave){

        document.getElementById("startBtn").innerText =
            language === "zh"
            ? "继续游戏"
            : "Continue";

        document.getElementById("newGameBtn").innerText =
            language === "zh"
            ? "清空存档"
            : "Clear Save";

        newGameBtn.disabled = false;
    }
    else{

        document.getElementById("startBtn").innerText =
            language === "zh"
            ? "开始游戏"
            : "Start Game";

        newGameBtn.disabled = true;
    }
}

// 退出游戏
function exitToMenu(){

    gameStarted = false;

    localStorage.setItem("savedLevel", level);

    refreshMenu();

    document.getElementById("menu").style.display = "flex";

    updateMobileUI();
}

// 顶部消息弹窗
function showMessage(text){

    // playSound(popupSoundIn);

    const popup =
        document.getElementById("messagePopup");

    const msg =
        document.getElementById("messageText");

    msg.innerText = text;

    // 弹出
    popup.style.top = "5px";

    // 自动收回
    setTimeout(()=>{

        // playSound(popupSoundOut);

        popup.style.top = "-100px";

    },3000);
}

let inputCallback = null;

// 输入弹窗
let typingInput = false;

function showInput(title, callback){

    typingInput = true;

    keys = {};

    inputCallback = callback;

    document.getElementById("inputTitle").innerText =
        title;

    document.getElementById("popupInput").value = "";

    const popup =
        document.getElementById("inputPopup");

        popup.style.top = "5px";

        popup.style.opacity = "1";

        popup.style.pointerEvents = "auto";

    setTimeout(()=>{

        document
            .getElementById("popupInput")
            .focus();

    },300);
}

// 关闭输入弹窗
function hideInput(){

    keys = {};

    document.getElementById("popupInput").blur();

    const popup =
        document.getElementById("inputPopup");

    popup.style.top = "-250px";

    popup.style.opacity = "0";

    popup.style.pointerEvents = "none";

    setTimeout(()=>{

        typingInput = false;

    },300);
}

// 弹窗确定按钮
document.getElementById("popupConfirm").onclick = ()=>{

    playSound(clickSound);

    const value =
        document.getElementById("popupInput").value;

    hideInput();

    c.focus();

    if(inputCallback){

        inputCallback(value);
    }
};

loadLevel(level);

function breakLanguageCombo(){

    onlyLanguageSwitching = false;
}

updateLanguageUI();
refreshMenu();
updateMobileUI();

// 输入
document.addEventListener("keydown",e=>{

    if(typingInput) return;

    keys[e.key] = true;
});

document.addEventListener("keyup",e=>{

    if(typingInput) return;

    keys[e.key] = false;
});

document.addEventListener("keydown", function(e){

    if(e.key === "Escape" && gameStarted){

        playSound(clickSound);

        // 保存当前关卡
        localStorage.setItem("savedLevel", level);
        refreshMenu();

        // 回主菜单
        exitToMenu();
    }
});

// 碰撞
function circleRectCollision(p, r){

    let nx = Math.max(r.x, Math.min(p.x, r.x+r.w));
    let ny = Math.max(r.y, Math.min(p.y, r.y+r.h));

    let dx = p.x - nx;
    let dy = p.y - ny;

    return dx*dx + dy*dy < p.r*p.r;
}

// 死亡
function die(){

    playSound(deathSound);

    loadLevel(level);
}

// 更新
function update(){

frame++;

let touchedSpeed = false;

// 左右
if(keys["ArrowLeft"] || keys["a"] || keys["A"])
    player.vx -= 0.4;

if(keys["ArrowRight"] || keys["d"] || keys["D"])
    player.vx += 0.4;

// 跳跃
if(keys["ArrowUp"] || keys["w"] || keys["W"] || keys[" "]){

    if(player.onGround){

        player.vy = -6;

        player.onGround = false;

        player.jumpTime = 0;
    }

    if(player.jumpTime < maxJumpTime){

        player.vy -= 0.35;

        player.jumpTime++;
    }
}

// 重力
player.vy += gravity;

// 惯性
player.vx *= friction;

// X轴
player.x += player.vx;

platforms.forEach(p=>{

    if(circleRectCollision(player,p)){

        if(p.type==="death" && !cheatMode){
             die();
        }

        if(player.vx > 0)
            player.x = p.x - player.r;

        if(player.vx < 0)
            player.x = p.x + p.w + player.r;

        player.vx = 0;
    }
});

// Y轴
player.y += player.vy;

player.onGround = false;

platforms.forEach(p=>{

    if(circleRectCollision(player,p)){

        if(p.type==="death" && !cheatMode){
            die();
            return;
        }

        if(p.type==="bounce" && player.vy > 0){

            player.y = p.y - player.r;

            player.vy = -15;

            return;
        }

        if(player.vy > 0){

            player.y = p.y - player.r;

            player.vy = 0;

            player.onGround = true;

            if(p.type === "speed"){
                touchedSpeed = true;
            }
        }
        else if(player.vy < 0){

            player.y = p.y + p.h + player.r;

            player.vy = 0;
        }

        /*踩鼠标 if(mousePlatformCheat){

            const px = player.x;
            const py = player.y;

            const w = 120;
            const h = 10;

            const mx = mouseX;
            const my = mouseY;

            // 判断玩家是否“踩在鼠标上”
            const isAbove =
                px > mx - w/2 &&
                px < mx + w/2 &&
                py + player.h >= my &&
                py + player.h <= my + 10 &&
                player.vy >= 0;

            if(isAbove){

                player.y = my - player.h;
                player.vy = 0;
                player.onGround = true;
            }
        }*/
    }
});

// 加速系统
player.onSpeedPad = touchedSpeed;

// 动态限速
let maxSpeed =
    player.onSpeedPad
    ? speedPadMaxSpeed
    : normalMaxSpeed;

// 限速
player.vx = Math.max(
    -maxSpeed,
    Math.min(maxSpeed, player.vx)
);

// 加速板提供推力
if(player.onSpeedPad){

    if(player.vx > 0)
        player.vx += 0.4;

    if(player.vx < 0)
        player.vx -= 0.4;
}

// 过关
if(player.x > c.width){

    playSound(passSound);

    const completedLevel = level + 1;

    unlockSkinByLevel(completedLevel);

    if(completedLevel === 1){
        unlockAchievement("finish_level_1");
    }

    const achCompletedLevel = level + 1;

    if(achCompletedLevel === 1 && playerColor === "#eee"){
        unlockAchievement("nige_1");
    }

    if(achCompletedLevel === 2 && playerColor === "#eee" && nige1?.unlocked){
        unlockAchievement("nige_2");
    }

    if(achCompletedLevel === 3 && playerColor === "#eee" && nige2?.unlocked){
        unlockAchievement("nige_3");
    }

    if(!levelCleared.includes(level)){
        levelCleared.push(level);

        localStorage.setItem(
            "levelCleared",
            JSON.stringify(levelCleared)
        );
    }

    checkFinishAll();

    level++;

    localStorage.setItem("savedLevel", level);

    loadLevel(level);
}

// 边界
if(player.y > 600){
    die();
}

if(player.x < -10){
    die();
}

// 尾迹
if(frame % 4 === 0){

    trail.push({
        x:player.x,
        y:player.y,
        life:1
    });
}

trail.forEach(t=>t.life -= 0.04);

trail = trail.filter(t=>t.life > 0);
}

// 绘制
function draw(){

ctx.clearRect(0,0,c.width,c.height);

// 尾迹
trail.forEach(t=>{

    ctx.globalAlpha = t.life;

    ctx.beginPath();

    ctx.arc(t.x,t.y,player.r,0,Math.PI*2);

    ctx.fillStyle = playerColor;

    ctx.fill();
});

ctx.globalAlpha = 1;

// 地形
platforms.forEach(p=>{

    ctx.fillStyle =
        p.type==="death" ? "red" :
        p.type==="bounce" ? "#f0d124" :
        p.type==="speed" ? "green" :
        "black";

    ctx.fillRect(p.x,p.y,p.w,p.h);
});

// 玩家
ctx.beginPath();

ctx.arc(player.x,player.y,player.r,0,Math.PI*2);

ctx.fillStyle = playerColor;

ctx.fill();
}

// 循环
function loop(){

    const achBtn =
        document.getElementById("achBtn");

    const mobileBtn =
        document.getElementById("mobileBtn");

    const mobileExit =
        document.getElementById("mobileExit");

    document.getElementById("versionInfo").style.display =
        gameStarted ? "none" : "block";

    const skinOpen =
        document.getElementById("skinMenu").style.display === "flex";

    const achOpen =
        document.getElementById("achMenu").style.display === "flex";

    // 主菜单按钮显示
    if(gameStarted || skinOpen || achOpen){

        achBtn.style.display = "none";
        mobileBtn.style.display = "none";

    }else{

        achBtn.style.display = "block";
        mobileBtn.style.display = "block";
    }

    // 手机端控制显示
    if(gameStarted && mobileMode){

        document.getElementById("mobileLeft").style.display = "block";
        document.getElementById("mobileRight").style.display = "block";
        document.getElementById("mobileJump").style.display = "block";
        mobileExit.style.display = "block";

    }else{

        document.getElementById("mobileLeft").style.display = "none";
        document.getElementById("mobileRight").style.display = "none";
        document.getElementById("mobileJump").style.display = "none";
        mobileExit.style.display = "none";
    }

    if(gameStarted){
        update();
    }

    draw();

    requestAnimationFrame(loop);
}

loop();










// 更新日志

/* 更新日志，2026/5/7/20:50/：
    -加入了更新日志；
    -加入了空格跳跃；
    -加入了皮肤系统；
    -优化了翻译系统；
    -加入了通关和完成音效；
    -后续可能加入存档系统；
    -后续可能加入手机端适配。
*/

/* 更新日志，2026/5/9/19:37/：
    -加入了存档系统，本地存档；
    -尝试修复了碰撞箱抖动错误，失败；
    -前移了个别函数的定义位置；
    -更改了按钮上的鼠标指针；
    -回退了对按钮和部分文字UI的更改；
    -后续可能加入手机端适配。
*/

/* 更新日志，2026/5/10/21:05/：
    -加入了base64网页图标，老爷卡car；
    -加入了皮肤解锁系统和弹窗；
    -加入了按钮动画；
    -尝试修复了各种UI错误和其他错误，基本成功；
    -前移了皮肤函数的定义位置，现在皮肤是全局常量了；
    -加入了解锁全皮肤作弊码；
    -加入了作弊码音效；
    -后续可能加入手机端适配。
*/

/* 更新日志，2026/5/11/10:13/：
    -更改了【空】皮肤的解锁条件；
    -加入了主页按钮的宽度；
    -更改了alert和prompt的UI，现在是屏幕内弹窗了；
    -后续可能更改清空存档按钮逻辑；
    -后续可能加入云端账号存储系统；
    -后续可能加入手机端适配。
*/

/* 更新日志，2026/5/12/18:13/：
    -加入了成就系统，弹窗和页面；
    -加入了成就分级系统；
    -加入了4个新成就；
    -更改了清空存档按钮的逻辑并加入了单独的页面；
    -加入了无敌作弊码；
    -后续可能加入手机端适配。
*/

/* 更新日志，版本 1.13.3，2026/5/13/17:57/：
    -加入了3个新成就，现在有7个成就了；
    -更改了成就页面的滚动区域高度；
    -更改了【通过所有关卡】成就的判定条件；
    -更改了【八国联军】，【196国联军】成就的判定条件；
    -更改了【倪哥】成就1~3的实现代码；
    -加入了版本号；
    -后续将加入手机端适配。
*/

/* 更新日志，版本 1.13.4，2026/5/15/18:09/：
    -加入了成就解锁音效；
    -后续将加入手机端适配。
*/

/* 更新日志，版本 1.13.5，2026/5/15/19:10/：
    -再次更改了【空】皮肤的解锁条件，现在的前置条件为【通过所有关卡】；
    -后续将加入手机端适配。
*/

/* 更新日志，版本 1.13.6，2026/5/15/19:10/：
    -更改了成就解锁音效；
    -后续将加入手机端适配。
*/

/* 更新日志，版本 1.13.7，2026/5/18/18:27/：
    -修复了上一个版本的版本号错误；
    -后续将加入手机端适配。
*/

/* 更新日志，版本 1.14.0，2026/5/18/19:05/：
    -加入了手机端适配；
    -加入了手机端切换按钮；
    -加入了手机端移动和跳跃按钮；
    -加入了手机端返回主页按钮；
    -加入了主页文字检测功能。
*/

/* 更新日志，版本 1.14.1，2026/5/18/19:27/：
    -更改了手机端返回主页按钮对顶的间距。
*/

/* 更新日志，版本 1.14.2，2026/5/19/18:51/：
    -加入了弹窗弹出和收回的音效，但并未使用；
    -修复了【空】皮肤和【通过所有关卡】成就的解锁错误；
    -更改了更新日志中的用语，现在所有的 “增加” 都改为 “加入” 了。
*/

/* 更新日志，版本 1.14.3，2026/5/28/16:37/：
    -加入了关卡11和12；
    -倪哥正式加入工作室；
    -林子鸡正式加入工作室。
*/

/* 更新日志，版本 1.14.4，2026/5/28/20:24/：
    -加入了鼠标点击传送作弊码；
    -加入了踩鼠标作弊码，没用，注释了。
    -加入了背景音乐：元气满满。
*/

/* 更新日志，版本 1.14.5，2026/5/29/14:28/：
    -更改了多个皮肤的解锁条件；
    -《老爷卡carの跑酷》正式在GitHub上发布。
*/

/* 更新日志，版本 1.15.0，2026/5/31/19:14/：
    -创建了Firebase数据库，准备加入云端账号存档；
    -跑了半天报错一大堆，移除了云存档测试代码。
*/

/* 更新日志，版本 1.15.0-alpha.2，2026/5/31/20:09/：
    -更改了版本号命名规则，现在测试版和发布版在同一版本下了；
    -回退了上个版本对云存档测试代码的更改；
    -修复了云存档测试代码的错误。
*/

/* 更新日志，版本1.15.0-alpha.3，2026/5/31/20:22/：
    -修复了上个版本的版本号错误。
*/

/* 更新日志，版本1.15.0-alpha.4，2026/6/3/19:11/：
    -更改了本地存档操作为云端存档函数，未完成。
*/

/* 更新日志，版本1.15.0，2026/6/5/19:51/：
    -云端存档宣布失败，项目暂时搁置；
    -1.15.0正式版回退为1.14.5正式版代码。
*/

/* 更新日志，版本1.15.1，2026/6/8/18:47/：
    -修复了第11关可跳过部分地图的错误。
*/

/* 更新日志，版本1.16.7，2026/9/29/19:28/：
    -拆分了原本的index.html文件，现在是多个分开的文件了；
    -加入了4个文件夹；
    -加入了1个.html文件；
    -加入了16个.js文件；
    -加入了6个.css文件；
    -现文件结构如下：
        -老爷卡carの跑酷
            -CSS
                -CSSmain
                    -achievement.css
                    -main.css
                    -mobile.css
                    -newGame.css
                    -popup.css
                    -skin.css
            -JS
                -JSbuttons
                    -achievementButtons.js
                    -cheatButtons.js
                    -languagaButtons.js
                    -mobileButtons.js
                    -newGameButtons.js
                    -skinButtons.js
                    -startButtons.js
                -JSdata
                    -audio.js
                    -bgm.js
                    -levels.js
                -JSfunctions
                    -achievements.js
                    -cheats.js
                    -languages.js
                    -mobile.js
                    -skins.js
            -index.html
            -main.js
    -加入了1.14.3更新日志中漏写的人员变动；
    -后续可能更改data文件格式为JSON。
*/

