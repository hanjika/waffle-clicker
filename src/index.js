const counter = document.querySelector(".counter");
const waffleBTN = document.querySelector(".waffle-img");
let score = 0;

const clickX2BTN = document.querySelector(".clickX2");
const spanPriceClickX2 = document.querySelector("#priceClickX2");
let priceX2BTN = 25;
const spanBonusClickX2 = document.querySelector("#bonusClickX2");
let clickValue = 1;

const autoClickBTN = document.querySelector(".autoClicker");
const spanPriceAutoClick = document.querySelector("#priceAutoClick");
let priceAutoClick = 40;
let nbrAutoClick = 0;

const JCVDBTN = document.querySelector(".JCVD");
const spanPriceJCVD = document.querySelector("#priceJCVD");
let priceJCVD = 500;
let nbrJCVD = 0;

const bakeryBTN = document.querySelector(".bakery");
const spanPriceBakery = document.querySelector("#priceBakery");
let priceBakery = 7500;
let nbrBakery = 0;

// -------------------------------------------------
//                   WAFFLE BTN
// -------------------------------------------------
waffleBTN.addEventListener("click", () => {
  score += clickValue;
  counter.innerHTML = score;

  waffleAnimation();
});

// --------------------------------------------------
//                   CLICK X2 BTN
// --------------------------------------------------
clickX2BTN.addEventListener("click", () => {
  if (score >= priceX2BTN) {
    score -= priceX2BTN;
    counter.innerHTML = score;

    clickValue *= 2;

    priceX2BTN *= 2;
    spanPriceClickX2.innerHTML = priceX2BTN;
  }
});

// --------------------------------------------------
//                   AUTO-CLICK BTN
// --------------------------------------------------
autoClickBTN.addEventListener("click", () => {
  if (score >= priceAutoClick) {
    score -= priceAutoClick;
    counter.innerHTML = score;

    nbrAutoClick++;

    priceAutoClick *= 2;
    spanPriceAutoClick.innerHTML = priceAutoClick;

    setInterval(() => {
      score += clickValue;
      counter.innerHTML = score;
    }, 1000);
  }
});

// --------------------------------------------------
//                   JCVD BTN
// --------------------------------------------------

// --------------------------------------------------
//                   BAKERY BTN
// --------------------------------------------------
