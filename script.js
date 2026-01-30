const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const heartsContainer = document.querySelector(".hearts");

/* Move NO button */
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

/* YES button */
yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div class="card">
      <h1>YIEEE 💖💖💖</h1>
      <p>I knew it 😘</p>
      <p>Chat mo na ako 🫶</p>
    </div>
    <div class="credit">created by axx</div>
  `;
});

/* Floating hearts generator */
setInterval(() => {
  const heart = document.createElement("span");
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}, 300);
