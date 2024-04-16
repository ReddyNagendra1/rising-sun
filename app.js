











document.addEventListener("DOMContentLoaded", function () {
    let sunrise = document.getElementById("sun");
    let btn = document.getElementById("submit");
    let bgd = document.getElementById("background");

    let aniStart = "play";
    let skyStart = "play";

    function stop() {
        if (aniStart === "play" && skyStart === "play") {
            sunrise.style.animationPlayState = "paused";
            bgd.style.animationPlayState = "paused";
            aniStart = "pause";
            skyStart = "pause";
        } else {
            sunrise.style.animationPlayState = "running";
            bgd.style.animationPlayState = "running";
            aniStart = "play";
            skyStart = "play";
        }
    }
    btn.onclick = stop;
});

