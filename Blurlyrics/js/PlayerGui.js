function setPlayerGUI() {
    document.getElementById("playerBox").style.width = document.body.clientWidth - 560 + "px";
    t = setTimeout('setPlayerGUI()', 1);
}