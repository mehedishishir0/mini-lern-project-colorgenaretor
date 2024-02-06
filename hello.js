// -------------variabal part----------------
let body = document.querySelector("body");
let color = document.querySelector("#btn");
let output = document.querySelector("#output");
let copy = document.querySelector("#copy-btn");

// -------------variabal part end----------------

function hexacolor() {
  let red = Math.floor(Math.random() * 225);
  let blue = Math.floor(Math.random() * 225);
  let green = Math.floor(Math.random() * 225);
  let hexa = `#${red.toString(16)}${blue.toString(16)}${green.toString(16)}`;
  return hexa;
}

color.addEventListener("click", function () {
  let colorrgb = hexacolor();
  body.style.backgroundColor = colorrgb;
  output.value = colorrgb;
});

copy.addEventListener("click", function () {
  navigator.clipboard.writeText(output.value);

  if (output.value === "") {
  } else {
    let show = document.createElement("div");
    show.className = "show show-animetion-in";
    copy.disabled = true;

    show.addEventListener("click", function () {
      show.classList.remove("show-animetion-in");
      show.classList.add("show-animetion-out");
      copy.disabled = false;
      show.addEventListener("animationend", function () {
        show.remove();
      });
    });
    show.textContent = `${output.value} copy color`;
    document.body.prepend(show);
  }
});

output.addEventListener("keyup", function (evalu) {
  let validColor = evalu.target.value;
  if (validColor && validhexacolor(validColor)) {
    body.style.backgroundColor = validColor;
  }
});

function validhexacolor(color) {
  if (color.length != 7) return false;
  if (color[0] != "#") return false;
  color = color.substring(1);
  return /^[0-9A-Fa-f]{6}$/i.test(color);
}
