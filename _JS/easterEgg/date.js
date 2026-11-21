document.addEventListener("navigateLoaded", () => {
    const date = new Date();

    if (
        (date.getMonth() + 1 === 10 &&
            date.getDate() >= 17 - 7 &&
            date.getDate() <= 17 + 7) ||
        (date.getMonth() + 1 === 4 &&
            date.getDate() >= 8 - 7 &&
            date.getDate() <= 8 + 7)
    ) {
        document.getElementById("birthdayImg").style.display = "block";
        document.getElementById("mikuImg").style.display = "none";
        document.getElementById("miku01Img").style.display = "none";
    } else if (
        (date.getMonth() + 1 === 3 &&
            date.getDate() >= 9 - 7 &&
            date.getDate() <= 9 + 7) ||
        (date.getMonth() + 1 === 8 &&
            date.getDate() >= 31 - 7 &&
            date.getDate() <= 31 + 7)
    ) {
        document.getElementById("mikuImg").style.display = "block";
        document.getElementById("miku01Img").style.display = "block";
        document.getElementById("birthdayImg").style.display = "none";
    } else {
        document.getElementById("birthdayImg").style.display = "none";
        document.getElementById("mikuImg").style.display = "none";
        document.getElementById("miku01Img").style.display = "none";
    }
});
