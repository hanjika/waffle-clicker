import { 
  ITEM_LIST, 
  ITEM_LIST_SELL 
} from "./collection";
import {
  waffleAnimation,
  autoClickerBUY,
  autoClickerSELL,
  udpateScore
} from "./functions";
import { 
  canAffordStoreItems, 
  canSell 
} from "./store-buttons";

// -------------------------------------------------
//                TITLE
// -------------------------------------------------

const counter = document.querySelector('.counter');
document.title = counter.innerText + " Waffles | Belgian Waffle Clicker"

setInterval(updateTitleScore, 1000);
setInterval(wafflesPerSecond, 1000);

function updateTitleScore() {
  document.title = counter.innerText + " Waffles | Belgian Waffle Clicker"
}

function wafflesPerSecond() {
  const allPerSec = document.querySelectorAll('.num-waffles');
  let num = 0;

  for (const onePerSec of allPerSec) {
    const number = parseInt(onePerSec.innerText);
    num += number/2;
  }
  document.querySelector('.perSecond').innerText = num;
}

// -------------------------------------------------
//                BUY/SELL BUTTONS
// -------------------------------------------------
const buyBtn = document.querySelector(".buy-button");
const sellBtn = document.querySelector(".sell-button");
const buySection = document.querySelector(".buy-section");
const sellSection = document.querySelector(".sell-section");

// BUY BTN
buyBtn.addEventListener("click", () => {
  buySection.style.display = "flex";
  sellSection.style.display = "none";
  buyBtn.classList.toggle("active");
  if (sellBtn.classList.contains("active")) {
    sellBtn.classList.remove("active");
  }
});

// SELL BTN
sellBtn.addEventListener("click", () => {
  sellSection.style.display = "flex";
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
  canAffordStoreItems();
  canSell();
});

// -----------------------------------------------------------
//                 BONUS/AUTO-CLICK BTNS
// -----------------------------------------------------------
// BUY SECTION
for (let i = 0; i < ITEM_LIST.length; i++) {
  ITEM_LIST[i].name.addEventListener("click", () => autoClickerBUY(i));
}

// SELL SECTION
for (let i = 0; i < ITEM_LIST.length; i++) {
  ITEM_LIST_SELL[i].name.addEventListener("click", () => autoClickerSELL(i));
}
