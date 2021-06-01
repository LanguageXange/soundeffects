const keys = document.querySelectorAll(".key");
function playSound(e) {
  const code = e.keyCode;
  const audio = document.querySelector(`audio[data-key="${code}"]`);
  const key = document.querySelector(`.key[data-key="${code}"]`);
  if (!audio | !key) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}
function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  // if you console log event you will see 5 events! border top, right, bottom, left, and transform!
  this.classList.remove("playing");
  //console.log("fired ");
}

window.addEventListener("keydown", playSound);
keys.forEach((k) => {
  k.addEventListener("transitionend", removeTransition);
});
