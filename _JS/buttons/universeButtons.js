// 世界观按钮
function bindButton(id, callback) {
    const btn = document.getElementById(id);

    if (!btn) return;

    btn.onclick = () => {
        playSound(mainClickSound);
        callback();
    };
}

document.addEventListener("navigateLoaded", () => {
    bindButton("universeBtn", () => show("universe"));
});

document
    .querySelectorAll('[id^="universePageCharactersCard"][id$="Btn"]')
    .forEach((btn) => {
        const match = btn.id.match(/^universePageCharactersCard(\d+)Btn$/);

        if (!match) return;

        btn.onclick = () => {
            playSound(mainClickSound);
            show(`universe/characters/character${match[1]}`);
        };
    });
