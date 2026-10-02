// 语言按钮
document.getElementById("langBtn").onclick = () => {

    playSound(clickSound);

    if(onlyLanguageSwitching){

        eightCountry++;

    } else {

        eightCountry = 1;
        onlyLanguageSwitching = true;
    }

    if(language === "zh"){

        language = "en";

    }
    else{

        language = "zh";

    }

    localStorage.setItem("language", language);

    if(eightCountry === 8){
        unlockAchievement("eight_country");
    }

    if(eightCountry === 197){
        unlockAchievement("one_nine_seven_country");
    }

    updateLanguageUI();
    createColorButtons();
    loadLevel(level);
    refreshMenu();
    updateMobileUI();
};
