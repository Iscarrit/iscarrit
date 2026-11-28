// 加载导航栏
fetch("/navigate.html")
    .then((response) => response.text())
    .then((html) => {
        document.getElementById("nav").innerHTML = html;

        document.getElementById("mainPageBtn").onclick = () =>
            (location.href = "/");
        document.getElementById("universeBtn").onclick = () =>
            (location.href = "/universe/index.html");
        document.getElementById("musicBtn").onclick = () =>
            (location.href = "/music/index.html");
        document.getElementById("animeBtn").onclick = () =>
            (location.href = "/anime/index.html");
        document.getElementById("comicBtn").onclick = () =>
            (location.href = "/comic/index.html");
        document.getElementById("gameBtn").onclick = () =>
            (location.href = "/game/index.html");
        document.getElementById("literatureBtn").onclick = () =>
            (location.href = "/literature/index.html");
        document.getElementById("accountBtn").onclick = () =>
            (location.href = "/account/index.html");

        window.navigateLoaded = true;
        document.dispatchEvent(new Event("navigateLoaded"));
    });
