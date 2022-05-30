let sounds = ["claping", "gasp", "bird", "dog", "rain", "win"];

sounds.forEach((sound) => {
  let btn = document.createElement("button");
  btn.classList.add("btn");
  btn.textContent = sound;
  btn.addEventListener("click", () => {
    stop();
    document.getElementById(sound).play();
  });
  document.getElementById("buttons").appendChild(btn);
});
function stop() {
  sounds.forEach((sound) => {
    let song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
}
