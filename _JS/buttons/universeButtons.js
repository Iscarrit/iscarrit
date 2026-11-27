// 世界观按钮
function bindButton(id, callback) {
    const btn = document.getElementById(id);

    if (!btn) return;

    btn.onclick = () => {
        callback();
    };
}

document
    .querySelectorAll('[id^="universePageCharactersCard"][id$="Btn"]')
    .forEach((btn) => {
        const match = btn.id.match(/^universePageCharactersCard(\d+)Btn$/);

        if (!match) return;

        btn.onclick = () => {
            show(`universe/characters/character${match[1]}`);
        };
    });
