let netflixintroTag = document.getElementsByTagName("netflixintro")[0];
let audioTag = document.getElementById("netflix-sound");
let buttonsTag = document.getElementById("buttons");
let allWordBtns = Array.from(document.getElementsByClassName("word-btn"));
let audio = new Audio(audioTag.src);

allWordBtns.forEach((eachBtn) => {
  eachBtn.addEventListener("click", () => {
    netflixintroTag.setAttribute("letter", eachBtn.value);

    netflixintroTag.style.display = "block";
    buttonsTag.style.display = "none";
    audio.play();

    setTimeout(() => {
      netflixintroTag.style.display = "none";
      buttonsTag.style.display = "block";
    }, 5000);
  });
});
