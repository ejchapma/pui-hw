//hw 5 pre-existing rolls
cartSet.add(new Roll ("Original", "Sugar milk", 1, 2.49));
cartSet.add(new Roll ("Walnut", "Vanilla milk", 12, 3.49));
cartSet.add(new Roll ("Raisin", "Sugar milk", 3, 2.99));
cartSet.add(new Roll ("Apple", "Keep original", 3, 3.49));
updatePrice();

function createElement(cartRoll) {
    // make a clone of the cart template
    const template = document.querySelector('#cart-template');
    const clone = template.content.cloneNode(true);
    // connect this clone to our cartRoll.element
    // from this point we only need to refer to cartRoll.element
    cartRoll.element = clone.querySelector('.wrapperCart2');
  
    const btnDelete = cartRoll.element.querySelector('.delete-Roll');
    //console.log(btnDelete);
    btnDelete.addEventListener('click', () => {
      deleteRoll(cartRoll);
    });
    
    // add the roll clone to the DOM
    // find the parent (#cart-list) and add roll as a child
    const rollListElement = document.querySelector('#cart-list');
    rollListElement.append(cartRoll.element);
    
    // populate the  clne with the actual content
    updateElement(cartRoll);
}  

for (const item of cartSet) {
    createElement(item);
}

function glazeCharge(glazingName) {
    for (let item of allGlazes) {
        if (item.glaze == glazingName) {
            return item.priceAdd;
        }
    }
}

function multiplier(packSize) {
    for (let item of allSizes) {
        if (item.size == packSize) {
            return item.priceAdaptation;
        }
    }
}

function price(roll) {
    const glazingCharge = glazeCharge(roll.glaze);
    return (roll.basePrice + glazingCharge) *  multiplier(roll.size)
}

function updateElement(cartRoll) {
    // get the HTML elements that need updating
    const rollImageElement = cartRoll.element.querySelector('.cartImg');
    const rollTitleElement = cartRoll.element.querySelector('.rollChoice');
    const rollGlazeElement = cartRoll.element.querySelector('.glazingChoice');
    const rollSizeElement = cartRoll.element.querySelector('.sizeChoice');
    const rollPriceElement = cartRoll.element.querySelector('.listPrice');
    const rollRemove = cartRoll.element.querySelector('.delete-Roll');
    rollRemove.addEventListener("click", () => {
        deleteRoll(cartRoll);
    })

console.log(cartRoll)

    // copy our notecard content over to the corresponding HTML elements
    rollImageElement.src = rolls[cartRoll.type].imageFile;
    rollTitleElement.innerText = cartRoll.type + " Cinnamon Roll";
    rollGlazeElement.innerText = "Glaze Choice: " + cartRoll.glaze;
    rollSizeElement.innerText = "Pack Size: " + cartRoll.size;
    rollPriceElement.innerText = "$" + (price(cartRoll).toFixed(2));
}

  function deleteRoll(cartRoll) {
    // remove the DOM object from the UI
    cartRoll.element.remove();
    // remove the actual Notecard object from our set of notecards
    cartSet.delete(cartRoll);
    updatePrice();
  }

function updatePrice() {
    const finalPrice = document.querySelector('#finalPrice');
    let sum = 0;
    for (let item of cartSet) { 
        sum += price(item);
    }
    finalPrice.innerText = "$" + sum.toFixed(2);
}