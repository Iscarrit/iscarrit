mainPageIdList = [
    "mainPage", 
    "universePage", 
    "novelPage", 
    "gamePage", 
    "musicPage", 
    "accountPage"
];

universePageIdList = [];

for (let i = 0; i < document.getElementById("universeCharactersPage").children.length; i++) {
    universePageIdList[i] = `universeCharactersPage${i + 1}`;
}

musicPageIdList = [
    "musicSongsPage",
    "musicArtistsPage"
];

musicArtistsPageIdList = [];

for (let i = 0; i < document.getElementById("musicArtistsPagePage").children.length; i++) {
    musicArtistsPageIdList[i] = `musicArtistsPagePage${i + 1}`;
}

// 显示页面
function show(pageId) {
    if (pageId !== "gameFrame") {
        document.getElementById("gameFrame").style.display = "none";
        document.getElementById("gameFrame").src = "";
    }

    // 主页
    for (let i = 0; i < mainPageIdList.length; i++) {
        if (mainPageIdList[i] !== pageId) {
            document.getElementById(mainPageIdList[i]).style.display = "none";
        }
    }

    // 世界观
    for (let i = 0; i < universePageIdList.length; i++) {
        if (universePageIdList[i] !== pageId) {
            document.getElementById(universePageIdList[i]).style.display = "none";
        }
    }

    // 音乐
    for (let i = 0; i < musicPageIdList.length; i++) {
        if (musicPageIdList[i] !== pageId) {
            document.getElementById(musicPageIdList[i]).style.display = "none";
        }
    }

    for (let i = 0; i < musicArtistsPageIdList.length; i++) {
        if (musicArtistsPageIdList[i] !== pageId) {
            document.getElementById(musicArtistsPageIdList[i]).style.display = "none";
        }
    }

    if (pageId.includes("musicArtistsPagePage")) {
        document.getElementById(pageId).style.display = "flex";
    } else {
        document.getElementById(pageId).style.display = "block";
    }
}

show("mainPage");

const date = new Date();

if (
    (date.getMonth() + 1 === 10 && date.getDate() >= 17 - 7 && date.getDate() <= 17 + 7) || 
    (date.getMonth() + 1 === 4 && date.getDate() >= 8 - 7 && date.getDate() <= 8 + 7) 
) {
    
    document.getElementById("birthdayImg").style.display = "block";
    document.getElementById("mikuImg").style.display = "none";
    document.getElementById("miku01Img").style.display = "none";

} else if (
    (date.getMonth() + 1 === 3 && date.getDate() >= 9 - 7 && date.getDate() <= 9 + 7) ||
    (date.getMonth() + 1 === 8 && date.getDate() >= 31 - 7 && date.getDate() <= 31 + 7)
) {

    document.getElementById("mikuImg").style.display = "block";
    document.getElementById("miku01Img").style.display = "block";
    document.getElementById("birthdayImg").style.display = "none";

} else {

    document.getElementById("birthdayImg").style.display = "none";
    document.getElementById("mikuImg").style.display = "none";
    document.getElementById("miku01Img").style.display = "none";

}

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
    -加入了上一更新日志中漏写的部分；
    -修复了上一更新日志中的标点错误；
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

/* 更新日志，版本0.3.3-alpha.9，2026/10/5/17:06/：
    -更改了世界观角色页面的布局，暂时性保留，后面会改；
    -更改了音乐歌单页面的结构；
    -后续将加入日期彩蛋。
*/

/* 更新日志，版本0.3.3-alpha.10，2026/10/6/20:47/：
    -修复了世界观页面卡片标号错误的bug；
    -加入了剩下的所有角色页面；
    -后续将加入日期彩蛋；
    -后续将陆续导入需要的图片。
*/

/* 更新日志，版本0.3.3-alpha.11，2026/10/6/21:34/：
    -修复了世界观角色页面无法正确隐藏的bug；
    -加入了世界观页面按钮的功能；
    -后续将加入日期彩蛋；
    -后续将陆续导入需要的图片；
    -后续将加入人物名言名句。
*/

/* 更新日志，版本0.4.0-alpha.1，2026/10/7/21:44/：
    -更改了导航栏已有按钮的顺序；
    -加入了动漫按钮；
    -加入了漫画按钮；
    -加入了动漫页面；
    -加入了漫画页面；
    -更改了世界观角色页面的结构；
    -加入了世界观角色页面的正文；
    -加入了音乐页面的标题；
    -加入了音乐页面的图片；
    -加入了音乐歌单页面的标题；
    -加入了音乐歌单页面的图片；
    -加入了游戏页面的标题；
    -加入了音乐制作人页面；
    -更改了音乐制作人页面的布局；
    -更改了世界观页面的class和id名称；
    -加入了行高主CSS；
    -后续将加入日期彩蛋。
*/

/* 更新日志，版本0.4.0-alpha.2，2026/10/8/21:30/：
    -加入了更多音乐制作人；
    -加入了生日日期彩蛋；
    -加入了初音未来日期彩蛋。
*/ 

/* 更新日志，版本0.4.1-alpha.1，2026/10/9/21:51/：
    -加入了音乐制作人档案页面；
    -更改了带编号页面显示或隐藏的实现方法；
    -加入了上一更新日志中漏写的标点；
    -更改了0.3.3-alpha.7更新日志中的用词错误。
*/