function displayBtnInterval(price, btn) {
  setInterval(() => {
    if (score < price) {
      btn.style.display = "none";
    } else {
      btn.style.display = "flex";
    }
  }, 600);
}

function waffleAnimation() {
  const littleWaffle = document.createElement("div");

  littleWaffle.classList.add("animation");

  setTimeout(() => {
    littleWaffle.remove();
  }, 2000);

  document.body.appendChild(littleWaffle);
}
