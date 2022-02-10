function playVideo() {
    let video= document.getElementById("video1");
    video.play();
}
function pauseVideo() {
    let video= document.getElementById("video1");
    video.pause();
}
function seekTo(position) {
    let video= document.getElementById("video1");
    video.currentTime = position;
}
