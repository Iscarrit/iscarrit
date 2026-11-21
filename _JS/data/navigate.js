// 加载导航栏
fetch("/navigate.html")
    .then((response) => {
        if (!response.ok) {
            throw new Error("导航栏加载失败：" + response.status);
        }

        return response.text();
    })

    .then((html) => {
        document.getElementById("nav").innerHTML = html;

        window.navigateLoaded = true;

        document.dispatchEvent(new Event("navigateLoaded"));
    })

    .catch((error) => {
        console.error(error);
    });
