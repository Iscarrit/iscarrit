// 音乐按钮
function bindButton(id, callback) {
    const btn = document.getElementById(id);

    if (!btn) return;

    btn.onclick = () => {
        playSound(mainClickSound);
        callback();
    };
}

document.addEventListener("navigateLoaded", () => {
    bindButton("musicBtn", () => show("music"));
});

bindButton("songsCardBtn", () => show("music/songs"));
bindButton("artistsCardBtn", () => show("music/artists"));
bindButton("derivativesCardBtn", () => show("music/derivatives"));
bindButton("principlesCardBtn", () => show("music/principles"));

document
    .querySelectorAll('[id^="musicArtistsPageCard"][id$="Btn"]')
    .forEach((btn) => {
        const match = btn.id.match(/^musicArtistsPageCard(\d+)Btn$/);

        if (!match) return;

        btn.onclick = () => {
            playSound(mainClickSound);
            show(`music/artists/artist${match[1]}`);
        };
    });
