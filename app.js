let audio = document.getElementById("netflix-sound");
window.addEventListener("load", function () {
  audio
    .play()
    .then(() => {
      console.log("audio is playing");
    })
    .catch((error) => {
      console.log("Audio play failed: " + error);
    });
});
