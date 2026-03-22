const growBtn = document.getElementById("growSunflower");
const sunflowerGarden = document.getElementById("sunflowerGarden");
const sunflowerMessage = document.getElementById("sunflowerMessage");

let hasBloomed = false;

function createSunflower(config) {
  const flower = document.createElement("div");
  flower.className = "sunflower";
  flower.style.setProperty("--x", config.x);
  flower.style.setProperty("--s", config.scale);
  flower.style.setProperty("--delay", `${config.delay}ms`);
  flower.innerHTML = `
    <div class="stem"></div>
    <div class="leaf leaf-left"></div>
    <div class="leaf leaf-right"></div>
    <div class="bloom">
      <span class="petal" style="--i: 0"></span>
      <span class="petal" style="--i: 1"></span>
      <span class="petal" style="--i: 2"></span>
      <span class="petal" style="--i: 3"></span>
      <span class="petal" style="--i: 4"></span>
      <span class="petal" style="--i: 5"></span>
      <span class="petal" style="--i: 6"></span>
      <span class="petal" style="--i: 7"></span>
      <span class="petal" style="--i: 8"></span>
      <span class="petal" style="--i: 9"></span>
      <span class="petal" style="--i: 10"></span>
      <span class="petal" style="--i: 11"></span>
      <div class="center"></div>
    </div>
  `;
  return flower;
}

function getGardenConfiguration() {
  const isMobile = window.matchMedia("(max-width: 860px)").matches;

  if (isMobile) {
    return [
      { x: 12, scale: 0.7, delay: 100 },
      { x: 28, scale: 0.85, delay: 300 },
      { x: 48, scale: 1.05, delay: 0 },
      { x: 69, scale: 0.9, delay: 420 },
      { x: 86, scale: 0.72, delay: 180 }
    ];
  }

  return [
    { x: 9, scale: 0.7, delay: 260 },
    { x: 22, scale: 0.86, delay: 420 },
    { x: 36, scale: 1.02, delay: 100 },
    { x: 50, scale: 1.2, delay: 0 },
    { x: 63, scale: 0.98, delay: 220 },
    { x: 77, scale: 0.84, delay: 460 },
    { x: 90, scale: 0.7, delay: 340 }
  ];
}

function growSunflowerGarden() {
  if (hasBloomed) return;

  hasBloomed = true;
  const flowers = getGardenConfiguration().map(createSunflower);

  sunflowerGarden.replaceChildren(...flowers);
  window.requestAnimationFrame(() => {
    flowers.forEach((flower) => flower.classList.add("growing"));
  });

  growBtn.disabled = true;
  growBtn.textContent = "Nuestro jardin esta floreciendo...";
  sunflowerMessage.textContent = "Mi niña, mira como florece este jardin solo para ti.";

  window.setTimeout(() => {
    flowers.forEach((flower) => {
      flower.classList.remove("growing");
      flower.classList.add("bloomed");
    });
    growBtn.textContent = "Nuestro jardin ya florecio";
    sunflowerMessage.textContent = "Mi niña, como estas flores, mi amor por ti crece cada dia.";
  }, 2700);
}

growBtn.addEventListener("click", growSunflowerGarden);
