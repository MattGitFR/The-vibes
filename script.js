const petalsContainer = document.querySelector(".petals");

const isMobile = window.innerWidth < 600;
const spawnRate = isMobile ? 200 : 120; // fewer petals on mobile

function createPetal() {
  const petal = document.createElement("div");
  petal.classList.add("petal");

  const flowers = ["🌸", "🌼", "🌺", "🌷"];
  petal.innerText = flowers[Math.floor(Math.random() * flowers.length)];

  petal.style.left = Math.random() * 100 + "vw";

  const duration = Math.random() * 6 + 5;
  petal.style.animationDuration = duration + "s";

  petal.style.fontSize = Math.random() * 16 + 12 + "px";

  petalsContainer.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, duration * 1000);
}

// initial burst
for (let i = 0; i < (isMobile ? 10 : 25); i++) {
  createPetal();
}

setInterval(createPetal, spawnRate);