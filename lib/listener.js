// TODO: React to a click on the button!
const button = document.getElementById("clickme");
const audio = new Audio(
  "https://www.myinstants.com/media/sounds/yessir-sound-effect.mp3"
);

button.addEventListener("click", (event) => {
  button.classList.toggle("is-active");
  button.textContent = `Yesssiirrr!!`;
  // button.style.width = "200px"; // setting the width to 200px
  // button.style.height = "200px"; // setting the height to 200px
  button.style.background = "teal"; // setting the background color to teal
  button.style.color = "white"; // setting the color to white
  button.style.fontSize = "20px"; // setting the font size to 20px
  audio.play();
  button.disabled = true;
});
