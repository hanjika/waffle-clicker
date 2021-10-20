import { ITEM_LIST } from "./collection";
import {
  waffleAnimation,
  autoClickerBUY,
  autoClickerSELL,
  udpateScore,
} from "./functions";
import { canAffordStoreItems, canSell } from "./store-buttons";

// -------------------------------------------------
//      ADD EVENT LISTENERS TO BUY/SELL BUTTONS
// -------------------------------------------------

const buyBtn = document.querySelector(".buy-button");
const sellBtn = document.querySelector(".sell-button");

const buySection = document.querySelector(".buy-section");
const sellSection = document.querySelector(".sell-section");

// BUY BTN
buyBtn.addEventListener("click", () => {
  buySection.style.display = "block";
  sellSection.style.display = "none";
  buyBtn.classList.toggle("active");
  if (sellBtn.classList.contains("active")) {
    sellBtn.classList.remove("active");
  }
});

// SELL BTN
sellBtn.addEventListener("click", () => {
  sellSection.style.display = "block";
  buySection.style.display = "none";
  sellBtn.classList.toggle("active");
  if (buyBtn.classList.contains("active")) {
    buyBtn.classList.remove("active");
  }
});
// -------------------------------------------------
//                   WAFFLE BTN
// -------------------------------------------------
const waffleBTN = document.querySelector(".waffle-img");

waffleBTN.addEventListener("click", () => {
  // Update and Display score
  udpateScore();

  // Create a element with css class : css animation
  waffleAnimation();

  // Updates items that are affordable or owned
  if (buyBtn.classList.contains("active")) {
    canAffordStoreItems();
  } else {
    canSell();
  }
});

// -----------------------------------------------------------
//               AUTO-CLICK BTNS
// -----------------------------------------------------------
// BUY SECTION
for (let i = 0; i < ITEM_LIST.length; i++) {
  ITEM_LIST[i].name.addEventListener("click", () => autoClickerBUY(i));
}

// SELL SECTION
// for (let i = 0; i < ITEM_LIST.length; i++) {
//   .addEventListener("click", () => autoClickerSELL(i));
// }
