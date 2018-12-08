var vid = document.querySelector("#myPlayer");

document.querySelector("#playBtn").onclick = function() {
  vid.play();
};

document.querySelector("#pauseBtn").onclick = function() {
  vid.pause();
};

document.querySelector("#rBtn").onclick = function() {
  vid.currentTime = 0;
};
