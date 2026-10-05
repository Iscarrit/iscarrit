pageIdList = [
    "mainPage", 
    "universePage", 
    "novelPage", 
    "gamePage", 
    "musicPage", 
    "accountPage"
];

universePageIdList = [
    "universeCharactersPage1",
    "universeCharactersPage2",
];

musicPageIdList = [
    "musicSongsPage"
];

// 显示页面
function show(pageId) {
    if (pageId !== "gameFrame") {
        document.getElementById("gameFrame").style.display = "none";
        document.getElementById("gameFrame").src = "";
    }

    if (pageId === "gamePage") {
        document.getElementById(pageId).style.display = "grid";
    } else {
        document.getElementById(pageId).style.display = "block";
    }

    // 主页
    for (let i = 0; i < pageIdList.length; i++) {
        if (pageIdList[i] === pageId) {
            continue;
        }
        document.getElementById(pageIdList[i]).style.display = "none";
    }

    // 世界观
    for (let i = 0; i < universePageIdList.length; i++) {
        if (universePageIdList[i] === pageId) {
            continue;
        }
        document.getElementById(universePageIdList[i]).style.display = "none";
    }

    // 音乐
    for (let i = 0; i < musicPageIdList.length; i++) {
        if (musicPageIdList[i] === pageId) {
            continue;
        }
        document.getElementById(musicPageIdList[i]).style.display = "none";
    }
}

show("mainPage");

/* 更新日志，版本0.3.3-alpha.4，2026/9/30/21:45/：
    -重新定位了项目为综合型个人网站；
    -《老爷卡carの跑酷》变为了《老爷卡car官网》下的一个分支；
    -加入了过多功能，根本记不住；
    -更改了部分data的文件，现在不是Base64了；
    -后续可能更改data文件格式为JSON。
*/

/* 更新日志，版本0.3.3-alpha.5，2026/10/1/20:50/：
    -加入了《老爷卡carの跑酷》游戏的封面图片；
    -加入了《是界·局是 Online》游戏的封面图片；
    -加入了《老爷卡carの跑酷》游戏的开始按钮功能，现在可以玩了；
    -加入了更多顶栏按钮，无可用页面；
    -更改了部分CSS属性；
    -后续可能更改data文件格式为JSON。
*/

/* 更新日志，版本0.3.3-alpha.7，2026/10/2/17:26/：
    -加入了世界观页面；
    -加入了世界观页面的单元格及内部元素；
    -加入了世界观角色页面；
    -更改了部分CSS属性；
    -更改了部分CSS的作用域；
    -移动了部分CSS代码的位置；
    -加入了上一更新公告中漏写的部分；
    -修复了上一更新公告中的标点错误；
    -修复了部分大型bug；
    -后续可能更改data文件格式为JSON。
*/

/* 更新日志，版本0.3.3-alpha.8，2026/10/4/20:10/：
    -加入了音乐页面；
    -加入了音乐页面的单元格及内部元素；
    -加入了音乐歌单页面；
    -修复了世界观角色页面无法正确隐藏的bug；
    -暂时搁置更改data文件格式为JSON。
*/