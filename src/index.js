import { ITEM_LIST } from './collection';
import { waffleAnimation,
  autoClickerBUY,
  autoClickerSELL 
} from './functions';

var counter = document.querySelector(".counter");
const waffleBTN = document.querySelector(".waffle-img");

const buyBtn = document.querySelector(".buy-button");
const sellBtn = document.querySelector(".sell-button");

let score = 0;

// -------------------------------------------------
//                  BIG BOSS INTERVAL
// -------------------------------------------------
let bigBossInterval;
let intervalValue = 0;

// -------------------------------------------------
//                   WAFFLE BTN
// -------------------------------------------------
let clickValue = 1;

waffleBTN.addEventListener("click", () => {
  // Update and Display score
  score += clickValue;
  counter.innerHTML = score;
  // Updates items that are affordable
  // canAffordStoreItems();
  // Create a element with css class : css animation
  waffleAnimation();
});

// -----------------------------------------------------------
//               BUY & SELL :  AUTO-CLICK BTNS
// -----------------------------------------------------------
// BUY BTN
buyBtn.addEventListener("click", () => {
  for (let i = 0; i < ITEM_LIST.length; i++) {
    ITEM_LIST[i].name.removeEventListener("click", autoClickerSELL(i));
    ITEM_LIST[i].name.addEventListener("click", autoClickerBUY(i));
  }
});

// SELL BTN
sellBtn.addEventListener("click", () => {
  for (let i = 0; i < ITEM_LIST.length; i++) {
    ITEM_LIST[i].name.removeEventListener("click", autoClickerBUY(i));
    ITEM_LIST[i].name.addEventListener("click", autoClickerSELL(i));
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