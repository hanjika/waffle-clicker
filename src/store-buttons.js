// const storeButtons = document.querySelectorAll('.store-button');

// for (const storeBtn of storeButtons) {
//     storeBtn.addEventListener('click', purchaseItem);
// }

function purchaseItem(e) {
  var item = e.target.id;
  addItemtoCity(item);
}

function addItemtoCity(item) {
  if (item === "cursor") {
    const newImg = document.createElement("img");
    newImg.src = "images/cursor.png";
    console.log(newImg);
    document.querySelector(".purchased-cursors").appendChild(newImg);
  } else {
    const city = document.querySelector(".purchased");
    const cityDiv = city.querySelector("." + item);

    const newImg = document.createElement("img");
    if (item === "jean-claude") {
      newImg.src = "images/jean-claude.gif";
    } else {
      newImg.src = "images/" + item + ".png";
    }
    console.log(newImg);
    cityDiv.appendChild(newImg);
  }
}
