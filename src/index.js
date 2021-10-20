import { ITEM_LIST } from "./collection";
import {
  waffleAnimation,
  autoClickerBUY,
  autoClickerSELL,
  udpateScore,
} from "./functions";
import { 
  canAffordStoreItems, 
  canSell 
} from "./store-buttons";

// -------------------------------------------------
//      ADD EVENT LISTENERS TO BUY/SELL BUTTONS
// -------------------------------------------------

const buyBtn = document.querySelector(".buy-button");
const sellBtn = document.querySelector(".sell-button");

// buyBtn.addEventListener("click", clickBuy);
// sellBtn.addEventListener("click", clickSell);

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
  waffleAnimation();
  // Updates items that are affordable
  if (buyBtn.classList.contains('active')) {
    canAffordStoreItems();
  } else {
    canSell()
  }  
});

// -----------------------------------------------------------
//               BUY & SELL :  AUTO-CLICK BTNS
// -----------------------------------------------------------
for (let i = 0; i < ITEM_LIST.length; i++) {
  ITEM_LIST[i].name.addEventListener("click", () => autoClickerBUY(i));
}

// BUY BTN
buyBtn.addEventListener("click", () => {
  const buySection = document.querySelector('.buy-section');
  const sellSection = document.querySelector('.sell-section');

  buySection.style.display = 'block';
  sellSection.style.display = 'none';
  buyBtn.classList.toggle('active');
  if (sellBtn.classList.contains('active')) {
      sellBtn.classList.remove('active');
  }
  console.log("mode BUY activé");
  for (let i = 0; i < ITEM_LIST.length; i++) {
    ITEM_LIST[i].name.removeEventListener("click", () => autoClickerSELL(i));
    ITEM_LIST[i].name.addEventListener("click", () => autoClickerBUY(i));
  }
});

// SELL BTN
sellBtn.addEventListener("click", () => {
  const sellSection = document.querySelector('.sell-section');
  const buySection = document.querySelector('.buy-section');

  sellSection.style.display = 'block';
  buySection.style.display = 'none';
  sellBtn.classList.toggle('active');
  if (buyBtn.classList.contains('active')) {
      buyBtn.classList.remove('active');
  }
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
