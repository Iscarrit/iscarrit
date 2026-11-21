// 主页按钮
function bindButton(id, callback) {
    const btn = document.getElementById(id);

    if (!btn) return;

    btn.onclick = () => {
        playSound(mainClickSound);
        callback();
    };
}

document.addEventListener("navigateLoaded", () => {
    bindButton("mainPageBtn", () => show("main"));
});
