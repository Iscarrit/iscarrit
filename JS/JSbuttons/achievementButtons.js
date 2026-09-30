// 成就按钮
document.getElementById("achBtn").onclick = openAch;

document.getElementById("achExit").onclick = closeAch;

document.addEventListener("keydown", function(e){

    if(typingInput) return;

    if(e.key === "l" || e.key === "L"){

        if(achievementMenuOpen){

            closeAch();
        }
        else{

            openAch();
        }
    }
});
