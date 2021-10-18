const counter = document.querySelector(".counter");
const waffleBTN = document.querySelector(".waffle-img");
let score = 0;

const bonusBtns = document.querySelectorAll(".bonusBtn");

const clickX2BTN = document.querySelector(".clickX2");
const spanPriceClickX2 = document.querySelector("#priceClickX2");
let priceX2BTN = 25;
const spanBonusClickX2 = document.querySelector("#bonusClickX2");
let clickValue = 1;

const autoClickBTN = document.querySelector(".autoClicker");
const spanPriceAutoClick = document.querySelector("#priceAutoClick");
let priceAutoClick = 40;

// -------------------------------------------------
//                   WAFFLE BTN
// -------------------------------------------------
waffleBTN.addEventListener("click", () => {
  score += clickValue;
  counter.innerHTML = score;
});

// --------------------------------------------------
//                   CLICK X2 BTN
// --------------------------------------------------
// Display btn mechanic
setInterval(() => {
  if (score < priceX2BTN) {
    clickX2BTN.style.display = "none";
  } else {
    clickX2BTN.style.display = "flex";
  }
}, 600);

clickX2BTN.addEventListener("click", () => {
  if (score >= priceX2BTN) {
    score -= priceX2BTN;
    counter.innerHTML = score;

    clickValue *= 2;
    spanBonusClickX2.innerHTML = clickValue * 2;

    priceX2BTN *= 2;
    spanPriceClickX2.innerHTML = priceX2BTN;
  }
});

// --------------------------------------------------
//                   AUTO-CLICK BTN
// --------------------------------------------------
// Display btn mechanic
setInterval(() => {
  if (score < priceAutoClick) {
    autoClickBTN.style.display = "none";
  } else {
    autoClickBTN.style.display = "flex";
  }
}, 600);

autoClickBTN.addEventListener("click", () => {
  if (score >= priceAutoClick) {
    score -= priceAutoClick;
    counter.innerHTML = score;

    priceAutoClick *= 2;
    spanPriceAutoClick.innerHTML = priceAutoClick;

    setInterval(() => {
      score += clickValue;
      counter.innerHTML = score;
    }, 1000);
  }
});
