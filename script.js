const petalsContainer = document.querySelector(".petals");

function createPetal() {
  const petal = document.createElement("div");
  petal.classList.add("petal");

  const flowers = ["🌸", "🌼", "🌺", "🌷"];
  petal.innerText = flowers[Math.floor(Math.random() * flowers.length)];

  petal.style.left = Math.random() * 100 + "vw";

  const duration = Math.random() * 5 + 5;
  petal.style.animationDuration = duration + "s";

  petal.style.fontSize = Math.random() * 15 + 15 + "px";

  petalsContainer.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, duration * 1000);
}

setInterval(createPetal, 300);
