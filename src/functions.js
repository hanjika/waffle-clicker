import { ITEM_LIST } from "./collection";
import waffleImgSrc from './images/waffle.png'
// -------------------------------------------------
//                  VARIABLES
// -------------------------------------------------
export let score = 0;

let bigBossInterval;
let intervalValue = 0;

let clickValue = 1;
var counter = document.querySelector(".counter");

// -------------------------------------------------
//                  FUNCTIONS
// -------------------------------------------------

export function udpateScore() {
  score += clickValue;
  counter.innerHTML = score;
}

export function waffleAnimation() {
  const littleWaffle = document.createElement("div");
  littleWaffle.classList.add("animation");

  const waffleImg = document.createElement("img");
  waffleImg.src = "/images/waffle.png";

  setTimeout(() => {
    littleWaffle.remove();
  }, 2000);

  littleWaffle.appendChild(waffleImg);
  document.querySelector(".waffle-section").appendChild(littleWaffle);
}

export function autoClickerBUY(i) {
  if (score >= ITEM_LIST[i].price) {
    // Update and Display score
    score -= ITEM_LIST[i].price;
    counter.innerHTML = score;

    // Update and Display quantity and rentability
    ITEM_LIST[i].quantity++;
    ITEM_LIST[i].divQuantity.innerHTML = ITEM_LIST[i].quantity;
    ITEM_LIST[i].divRentability.innerHTML =
      ITEM_LIST[i].quantity * ITEM_LIST[i].value;

    // Upadate and Display price
    ITEM_LIST[i].price *= 2;
    ITEM_LIST[i].divPrice.innerHTML = ITEM_LIST[i].price;

    // Delete and Update VALUE of bigBossInterval
    clearInterval(bigBossInterval);
    intervalValue += ITEM_LIST[i].value;
    // Start again bigBossInterval becaus he never die!
    bigBossInterval = setInterval(() => {
      score += intervalValue;
      counter.innerHTML = score;
    }, 1000);
  }
}

export function autoClickerSELL(i) {
  if (ITEM_LIST[i].quantity > 0) {
    // Update and Display score
    score += ITEM_LIST[i].price;
    counter.innerHTML = score;

    // Update and Display quantity and rentability
    ITEM_LIST[i].quantity--;
    ITEM_LIST[i].divQuantity.innerHTML = ITEM_LIST[i].quantity;
    ITEM_LIST[i].divRentability.innerHTML =
      ITEM_LIST[i].quantity * ITEM_LIST[i].value;

    // Upadate and Display price
    ITEM_LIST[i].price /= 2;
    ITEM_LIST[i].divPrice.innerHTML = ITEM_LIST[i].price;

    // Delete and Update VALUE of bigBossInterval
    clearInterval(bigBossInterval);
    intervalValue -= ITEM_LIST[i].value;
    // Start again bigBossInterval becaus he never die!
    bigBossInterval = setInterval(() => {
      score += intervalValue;
      counter.innerHTML = score;
    }, 1000);
  }
}
