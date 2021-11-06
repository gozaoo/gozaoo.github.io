var audioStatus = "paused";
function play() {
    status()
    if (audioStatus == "playing") {
        audio.pause();
    } else {
        audio.play();
    }
}

function status() {
    audio.addEventListener("playing", function(){
        audioStatus = "playing";
    });
    audio.addEventListener("pause", function(){
        audioStatus = "paused";
    });
}

