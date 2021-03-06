import { SHOPITEMS } from "./shop-items";
import cursor from "./images/cursor.png";
import manneken from "./images/manneken-pis.png";
import jeanclaude from "./images/jeanclaude.png";
import bakery from "./images/bakery.png";
import atomium from "./images/atomium.png";
import grandPlace from "./images/grand-place.png";

import { ITEM_LIST_SELL } from "./collection";

var counter = document.querySelector(".counter");
const storeButtons = document.querySelectorAll(".store-button");

// -------------------------------------------------
//           BUY/SELL BUTTON FUNCTIONS
// -------------------------------------------------

const buyBtn = document.querySelector(".buy-button");
const sellBtn = document.querySelector(".sell-button");

export function clickBuy(e) {
  buyBtn.classList.toggle("active");
  if (sellBtn.classList.contains("active")) {
    sellBtn.classList.remove("active");
  }
}

export function clickSell(e) {
  sellBtn.classList.toggle("active");
  if (buyBtn.classList.contains("active")) {
    buyBtn.classList.remove("active");
  }
}

// -------------------------------------------------
//                 PURCHASING ITEM
// -------------------------------------------------

function purchaseItem(e) {
  var item = e.target.id;
  addItemtoCity(item);
  canAffordStoreItems();
  canSell();
  // subtractPriceFromCounter(e.target);
  // editItemDescription(e.target);
}

function subtractPriceFromCounter(item) {
  const price = parseInt(item.querySelector(".price").innerText);
  const counterMoney = parseInt(counter.innerText);
  counter.innerText = counterMoney - price;
}

// -------------------------------------------------
//                 SELLING ITEM
// -------------------------------------------------

function sellItem(e) {
  var item = e.target.id;
  removeItemFromCity(item);
  canAffordStoreItems();
  canSell();
}

// -------------------------------------------------
//          DISPLAYING ITEM IN CITY PICTURE
// -------------------------------------------------

function addItemtoCity(item) {
  if (item === "cursor") {
    const newImg = document.createElement("img");
    newImg.src = cursor;
    document.querySelector(".purchased-cursors").appendChild(newImg);
  } else {
    const city = document.querySelector(".purchased");
    const cityDiv = city.querySelector("." + item);

    const newImg = document.createElement("img");
    if (item === "jean-claude") {
      newImg.src = jeanclaude;
    } else if (item === "manneken-pis") {
      newImg.src = manneken;
    } else if (item === "grand-place") {
      newImg.src = grandPlace;
    } else if (item === "bakery") {
      newImg.src = bakery;
    } else if (item === "atomium") {
      newImg.src = atomium;
    }
    cityDiv.appendChild(newImg);
  }
}

function removeItemFromCity(item) {
  if (item === "cursor") {
    const allCursors = document.querySelector(".purchased-cursors");
    allCursors.removeChild(allCursors.firstChild);
  }

  const city = document.querySelector(".purchased");
  const cityDiv = city.querySelector("." + item);

  cityDiv.removeChild(cityDiv.firstChild);
}

// -------------------------------------------------
//   Change values in description of purchased item
// -------------------------------------------------

function editItemDescription(item) {
  var number = parseInt(item.querySelector(".num").innerText);
  var price = parseInt(item.querySelector(".price").innerText);

  const newNum = number + 1;
  item.querySelector(".num").innerText = newNum;
  item.querySelector(".amount").innerText = newNum;
  item.querySelector(".price").innerText = newNum;

  for (const shopItem of SHOPITEMS) {
    if (shopItem.item === item.id) {
      item.querySelector(".price").innerText = price * shopItem.priceIncrease;
      var newNumWaffles = newNum * shopItem.production;
      if (item.id === "cursor") {
        newNumWaffles = newNumWaffles.toFixed(1);
      }
      item.querySelector(".num-waffles").innerText = newNumWaffles;
    }
  }
}

function increaseCounterfromPurchases() {
  const wafflesPerSec = document.querySelectorAll(".num-waffles");
  const wafflesArr = Array.from(wafflesPerSec);

  for (const wafflesPerItem of wafflesPerSec) {
    const intWaffles = parseInt(wafflesPerItem.innerText);
    let toAdd = parseInt(counter.innerText);
    toAdd += intWaffles;
    counter.innerText = toAdd;
  }
  canAffordStoreItems();
}

export function canAffordStoreItems() {
  const buySection = document.querySelector(".buy-section");
  const allPrices = buySection.querySelectorAll(".price");
  const affordableItems = [];

  for (const price of allPrices) {
    const priceVal = parseInt(price.innerText);
    const counterNum = parseInt(counter.innerText);

    if (priceVal <= counterNum) {
      const item = price.id;
      affordableItems.push(item);
    }
  }
  itemAvailableToBuy(affordableItems);
}

export function canSell() {
  // const storeSellButtons = document.querySelectorAll(".sell-store-button");
  // for (const sellStoreBtn of storeSellButtons) {
  //   const amount = sellStoreBtn.document.querySelector(".amount");
  //   if (amount !== "") {
  //     sellStoreBtn.classList.add("available");
  //     sellStoreBtn.addEventListener("click", sellItem);
  //   }
  // }
  for (let item of ITEM_LIST_SELL) {
    if (item.quantity > 0) {
      item.name.classList.add("available");
      item.name.addEventListener("click", sellItem);
    } else {
      item.name.classList.remove("available");
      item.name.removeEventListener("click", sellItem);
    }
  }
}

export function itemAvailableToBuy(affordableItems) {
  const storeButtons = document.querySelectorAll(".store-button");
  refreshAvailability(storeButtons);
  for (const storeBtn of storeButtons) {
    for (const affordItem of affordableItems) {
      if (storeBtn.id === affordItem) {
        storeBtn.classList.add("available");
        storeBtn.addEventListener("click", purchaseItem);
      }
    }
  }
}

export function refreshAvailability(storeButtons) {
  for (const storeBtn of storeButtons) {
    storeBtn.classList.remove("available");
    storeBtn.removeEventListener("click", purchaseItem);
  }
}
