// 世界观按钮
document.getElementById("universeBtn").onclick = () => {

    playSound(mainClickSound);

    show("universePage");
}

for (let i = 1; i <= document.getElementById("universeCharactersPage").children.length; i++) {
    const btn = document.getElementById(`universePageCharactersCard${i}Btn`);

    if (btn) {
        btn.onclick = () => {

            playSound(mainClickSound);
            show(`universeCharactersPage${i}`);

        };
    }
}
