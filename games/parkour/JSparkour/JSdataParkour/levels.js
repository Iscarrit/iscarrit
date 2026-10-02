// 关卡
let levels = [

    // 1
    [
        {x:0,y:350,w:1000,h:50,type:"ground"},
        {x:200,y:340,w:200,h:10,type:"speed"},
        {x:500,y:340,w:100,h:10,type:"bounce"},
        {x:800,y:340,w:20,h:10,type:"death"}
    ],

    // 2
    [
        {x:0,y:350,w:1000,h:50,type:"ground"},
        {x:200,y:300,w:100,h:10,type:"ground"},
        {x:350,y:260,w:100,h:10,type:"ground"},
        {x:500,y:220,w:100,h:10,type:"ground"},
        {x:150,y:349,w:600,h:20,type:"death"}
    ],

    // 3
    [
        {x:0,y:350,w:180,h:50,type:"ground"},
        {x:150,y:300,w:30,h:100,type:"ground"},
        {x:200,y:250,w:80,h:10,type:"ground"},
        {x:400,y:300,w:40,h:10,type:"ground"},
        {x:440,y:300,w:40,h:10,type:"bounce"},
        {x:600,y:240,w:50,h:10,type:"ground"},
        {x:800,y:400,w:40,h:10,type:"ground"},
        {x:900,y:350,w:80,h:50,type:"ground"},
        {x:235,y:249,w:10,h:5,type:"death"}
    ],

    // 4
    [
        {x:0,y:350,w:70,h:10,type:"bounce"},
        {x:190,y:260,w:100,h:10,type:"speed"},
        {x:470,y:300,w:80,h:10,type:"ground"},
        {x:700,y:260,w:100,h:10,type:"ground"},
        {x:550,y:300,w:20,h:10,type:"bounce"}
    ],

    // 5
    [
        {x:0,y:350,w:70,h:10,type:"bounce"},
        {x:190,y:100,w:70,h:10,type:"death"},
        {x:250,y:260,w:160,h:300,type:"death"},
        {x:150,y:260,w:100,h:10,type:"bounce"},
        {x:670,y:260,w:30,h:15,type:"ground"},
        {x:450,y:295,w:50,h:10,type:"bounce"},
        {x:700,y:260,w:50,h:15,type:"bounce"},
        {x:750,y:260,w:30,h:15,type:"ground"},
        {x:780,y:260,w:50,h:15,type:"bounce"},
        {x:830,y:260,w:100,h:15,type:"speed"},
        {x:670,y:100,w:180,h:30,type:"death"}
    ],

    // 6
    [
        {x:0,y:350,w:1000,h:50,type:"ground"},
        {x:200,y:300,w:100,h:10,type:"speed"},
        {x:290,y:255,w:10,h:45,type:"death"},
        {x:350,y:260,w:100,h:10,type:"speed"},
        {x:440,y:220,w:10,h:40,type:"death"},
        {x:500,y:220,w:100,h:10,type:"ground"},
        {x:150,y:349,w:600,h:20,type:"death"}
    ],

    // 7
    [
        {x:30,y:350,w:30,h:50,type:"speed"},
        {x:110,y:350,w:30,h:50,type:"death"},
        {x:190,y:350,w:30,h:50,type:"speed"},
        {x:270,y:350,w:30,h:50,type:"death"},
        {x:350,y:350,w:30,h:50,type:"bounce"},
        {x:430,y:350,w:30,h:50,type:"death"},
        {x:510,y:350,w:30,h:50,type:"death"},
        {x:590,y:350,w:30,h:50,type:"speed"},
        {x:670,y:350,w:30,h:50,type:"death"},
        {x:750,y:350,w:30,h:50,type:"bounce"},
        {x:830,y:300,w:30,h:50,type:"speed"}
    ],

    // 8
    [
        {x:0,y:350,w:1000,h:50,type:"ground"},
        {x:0,y:100,w:1000,h:50,type:"death"},
        {x:100,y:340,w:80,h:10,type:"bounce"},
        {x:230,y:340,w:80,h:10,type:"bounce"},
        {x:360,y:340,w:50,h:10,type:"death"},
        {x:490,y:340,w:80,h:10,type:"bounce"},
        {x:620,y:340,w:100,h:10,type:"speed"},
        {x:710,y:295,w:10,h:45,type:"death"},
        {x:840,y:340,w:50,h:10,type:"bounce"},
        {x:880,y:230,w:10,h:110,type:"death"},
        {x:860,y:150,w:30,h:10,type:"speed"}
    ],

    // 9
    [
        {x:0,y:500,w:300,h:30,type:"ground"},
        {x:400,y:500,w:60,h:30,type:"bounce"},
        {x:630,y:500,w:120,h:30,type:"ground"},
        {x:880,y:500,w:100,h:30,type:"speed"}
    ],

    // 10
    [
        {x:150,y:170,w:100,h:20,type:"speed"},
        {x:100,y:340,w:30,h:60,type:"bounce"},
        {x:440,y:200,w:100,h:10,type:"ground"},
        {x:550,y:350,w:50,h:10,type:"bounce"},
        {x:750,y:230,w:100,h:10,type:"ground"},
        {x:840,y:190,w:10,h:40,type:"death"},
        {x:900,y:350,w:100,h:10,type:"speed"}
    ],

    // 11
    [
        {x:0,y:350,w:370,h:10,type:"ground"},
        {x:80,y:340,w:90,h:10,type:"death"},
        {x:90,y:330,w:70,h:10,type:"death"},
        {x:100,y:320,w:50,h:10,type:"death"},
        {x:110,y:310,w:30,h:10,type:"death"},
        {x:120,y:300,w:10,h:10,type:"death"},
        {x:240,y:340,w:90,h:10,type:"death"},
        {x:250,y:330,w:70,h:10,type:"death"},
        {x:260,y:320,w:50,h:10,type:"death"},
        {x:270,y:310,w:30,h:10,type:"death"},
        {x:280,y:300,w:10,h:10,type:"death"},
        {x:400,y:350,w:80,h:10,type:"speed"},
        {x:435,y:310,w:10,h:40,type:"death"},
        {x:550,y:330,w:30,h:10,type:"bounce"},
        {x:725,y:350,w:75,h:10,type:"ground"},
        {x:745,y:0,w:50,h:310,type:"death"},
        {x:670,y:350,w:55,h:10,type:"death"},
        {x:770,y:420,w:50,h:10,type:"bounce"},
        {x:840,y:0,w:50,h:400,type:"death"},
        {x:730,y:490,w:120,h:10,type:"speed"},
        {x:850,y:490,w:40,h:10,type:"bounce"}
    ],

    // 12
    [
        {x:0,y:450,w:80,h:50,type:"ground"},
        {x:0,y:0,w:1000,h:50,type:"ground"},
        {x:80,y:450,w:100,h:50,type:"bounce"},
        {x:180,y:280,w:30,h:20,type:"speed"},
        {x:380,y:490,w:100,h:10,type:"bounce"},
        {x:430,y:50,w:10,h:350,type:"death"},
        {x:550,y:320,w:100,h:10,type:"ground"},
        {x:700,y:490,w:200,h:10,type:"ground"},
    ],
    
];

// 加载关卡
function loadLevel(lv){

    if(lv >= levels.length && lv != 0){
        
        playSound(completeSound);

        showMessage(
            language === "zh"
            ? "通关了！！！"
            : "You Win!!!"
        );

        level = 0;
    }

    platforms = JSON.parse(JSON.stringify(levels[level]));

    player.x = 50;
    player.y = 200;

    player.vx = 0;
    player.vy = 0;

    trail = [];

    document.getElementById("info").innerText =
        language === "zh"
        ? "关卡: " + (level+1)
        : "Level: " + (level+1);
}

