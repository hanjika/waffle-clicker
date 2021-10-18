const storeButtons = document.querySelectorAll('.store-button');

for (const storeBtn of storeButtons) {
    storeBtn.addEventListener('click', purchaseItem);
}

function purchaseItem(e) {
    var item = e.target.id;
    addItemtoCity(item);
    editItemDescription(e.target);
}

function addItemtoCity(item) {
    if (item === 'cursor') {
        const newImg = document.createElement('img');
        newImg.src = 'images/cursor.png';
        document.querySelector('.purchased-cursors').appendChild(newImg);
    } else {
        const city = document.querySelector('.purchased');
        const cityDiv = city.querySelector('.' + item);

        const newImg = document.createElement('img');
        if (item === 'jean-claude') {
            newImg.src = 'images/jean-claude.gif';
        } else {
            newImg.src = 'images/' + item + '.png';
        }
        cityDiv.appendChild(newImg);
    }
}

function editItemDescription(item) {
    console.log(item);
    var number = item.querySelector('#num').innerText;

    number = parseInt(number);
    const newNum = number + 1;
    item.querySelector('#num').innerText = newNum;

    for (const shopItem of SHOPITEMS) {
        if (shopItem.item === item.id) {
            var newNumWaffles = newNum * shopItem.production;
            if (item.id === 'cursor') {
               newNumWaffles = newNumWaffles.toFixed(1); 
            }
            item.querySelector('#num-waffles').innerText = newNumWaffles;
        }
    }
}