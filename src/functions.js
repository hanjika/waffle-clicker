function waffleAnimation() {
  const littleWaffle = document.createElement("div");

  littleWaffle.classList.add("animation");

  setTimeout(() => {
    littleWaffle.remove();
  }, 2000);

  document.body.appendChild(littleWaffle);
}
