import { ITEM_LIST, ITEM_LIST_SELL } from "./collection";
import waffleImgSrc from "./images/waffle.png";
import {
  canAffordStoreItems,
  canSell,
  itemAvailableToBuy,
  refreshAvailability,
} from "./store-buttons";
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
  waffleImg.src = waffleImgSrc;

  setTimeout(() => {
    littleWaffle.remove();
  }, 2000);

  littleWaffle.appendChild(waffleImg);
  document.querySelector(".waffle-container").appendChild(littleWaffle);
}

export function autoClickerBUY(i) {
  if (score >= ITEM_LIST[i].price) {
    // Update and Display score
    score -= ITEM_LIST[i].price;
    counter.innerHTML = score;

    // Update quantity
    ITEM_LIST_SELL[i].quantity++;
    // Display(in buy section AND sell section) quantity
    ITEM_LIST[i].divQuantity.innerHTML = ITEM_LIST_SELL[i].quantity;
    ITEM_LIST_SELL[i].divQuantity.innerHTML = ITEM_LIST_SELL[i].quantity;
    // Update and Display(in buy section AND sell section) rentability
    ITEM_LIST[i].divRentability.innerHTML =
      ITEM_LIST_SELL[i].quantity * ITEM_LIST[i].value;
    ITEM_LIST_SELL[i].divRentability.innerHTML =
      ITEM_LIST_SELL[i].quantity * ITEM_LIST[i].value;

    // Upadate price
    ITEM_LIST[i].price *= 2;
    // Display(in buy section AND sell section) price
    ITEM_LIST[i].divPrice.innerHTML = ITEM_LIST[i].price;
    ITEM_LIST_SELL[i].divPrice.innerHTML = ITEM_LIST[i].price / 4;

    // Delete and Update VALUE of bigBossInterval
    clearInterval(bigBossInterval);
    intervalValue += ITEM_LIST[i].value;
    // Start again bigBossInterval becaus he never die!
    bigBossInterval = setInterval(() => {
      score += intervalValue;
      counter.innerHTML = score;
      // Updates items that are affordable or owned
      canAffordStoreItems();
      canSell();
    }, 1000);
  }
}

export function autoClickerSELL(i) {
  if (ITEM_LIST_SELL[i].quantity > 0) {
    // Update and Display score
    score += ITEM_LIST[i].price / 4;
    counter.innerHTML = score;

    // Update quantity
    ITEM_LIST_SELL[i].quantity--;
    // Display(in buy section AND sell section) quantity
    ITEM_LIST[i].divQuantity.innerHTML = ITEM_LIST_SELL[i].quantity;
    ITEM_LIST_SELL[i].divQuantity.innerHTML = ITEM_LIST_SELL[i].quantity;
    // Update and Display(in buy section AND sell section) rentability
    ITEM_LIST[i].divRentability.innerHTML =
      ITEM_LIST_SELL[i].quantity * ITEM_LIST[i].value;
    ITEM_LIST_SELL[i].divRentability.innerHTML =
      ITEM_LIST_SELL[i].quantity * ITEM_LIST[i].value;

    // Upadate price
    ITEM_LIST[i].price /= 2;
    // Display(in buy section AND sell section) price
    ITEM_LIST[i].divPrice.innerHTML = ITEM_LIST[i].price;
    ITEM_LIST_SELL[i].divPrice.innerHTML /= 2;
    if (ITEM_LIST_SELL[i].divPrice.innerHTML < ITEM_LIST[i].minSellPrice) {
      ITEM_LIST_SELL[i].divPrice.innerHTML = ITEM_LIST[i].minSellPrice;
    }

    // Delete and Update VALUE of bigBossInterval
    clearInterval(bigBossInterval);
    intervalValue -= ITEM_LIST[i].value;
    // Start again bigBossInterval becaus he never die!
    bigBossInterval = setInterval(() => {
      // Update and Display score
      score += intervalValue;
      counter.innerHTML = score;
      // Updates items that are affordable or owned
      canAffordStoreItems();
      canSell();
    }, 1000);
  }
}
