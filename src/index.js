import { ITEM_LIST } from "./collection";
import {
  waffleAnimation,
  autoClickerBUY,
  autoClickerSELL,
  udpateScore,
} from "./functions";

// -------------------------------------------------
//      ADD EVENT LISTENERS TO BUY/SELL BUTTONS
// -------------------------------------------------

const buyBtn = document.querySelector(".buy-button");
const sellBtn = document.querySelector(".sell-button");

buyBtn.addEventListener("click", clickBuy);
sellBtn.addEventListener("click", clickSell);

// -------------------------------------------------
//                   WAFFLE BTN
// -------------------------------------------------
const waffleBTN = document.querySelector(".waffle-img");

waffleBTN.addEventListener("click", () => {
  // Update and Display score
  udpateScore();

  // Updates items that are affordable
  // canAffordStoreItems();

  // Create a element with css class : css animation
  //waffleAnimation();
  // Updates items that are affordable
  canAffordStoreItems();
});

// -----------------------------------------------------------
//               BUY & SELL :  AUTO-CLICK BTNS
// -----------------------------------------------------------
for (let i = 0; i < ITEM_LIST.length; i++) {
  ITEM_LIST[i].name.addEventListener("click", () => autoClickerBUY(i));
}

// BUY BTN
buyBtn.addEventListener("click", () => {
  console.log("mode BUY activé");
  for (let i = 0; i < ITEM_LIST.length; i++) {
    ITEM_LIST[i].name.removeEventListener("click", () => autoClickerSELL(i));
    ITEM_LIST[i].name.addEventListener("click", () => autoClickerBUY(i));
  }
});

// SELL BTN
sellBtn.addEventListener("click", () => {
  console.log("mode SELL activé");
  for (let i = 0; i < ITEM_LIST.length; i++) {
    ITEM_LIST[i].name.removeEventListener("click", () => autoClickerBUY(i));
    ITEM_LIST[i].name.addEventListener("click", () => autoClickerSELL(i));
  }
});

// --------------------------------------------------
//                   CLICK X2 BTN
// --------------------------------------------------
// clickX2BTN.addEventListener("click", () => {
//   if (score >= priceX2BTN) {
//     score -= priceX2BTN;
//     counter.innerHTML = score;

//     clickValue *= 2;

//     priceX2BTN *= 2;
//     spanPriceClickX2.innerHTML = priceX2BTN;
//   }
// });
