const counter = document.querySelector(".counter");
const waffleBTN = document.querySelector(".waffle-img");

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

  // Create a element with css class : css animation
  waffleAnimation();
});

// --------------------------------------------------
//                 AUTO-CLICK BTNS
// --------------------------------------------------
for (let i = 0; i < ITEM_LIST.length; i++) {
  ITEM_LIST[i].name.addEventListener("click", (e) => {
    if (score >= ITEM_LIST[i].price) {
      // Update and Display score
      score -= ITEM_LIST[i].price;
      counter.innerHTML = score;

      // Update quantity
      ITEM_LIST[i].quantity++;

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

      // HANNA : function for add images in YOUR CITY
      purchaseItem(e);
    }
  });
}

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
