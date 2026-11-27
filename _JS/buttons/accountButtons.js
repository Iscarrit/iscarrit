// 账号按钮
function bindButton(id, callback) {
    const btn = document.getElementById(id);

    if (!btn) return;

    btn.onclick = () => {
        callback();
    };
}
