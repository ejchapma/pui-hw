// used to create unique ID for each role, based on the order in which it's added to cart
let rollCounter = 0;

function createElement(cartRoll) {
    // make a clone of the cart template
    const template = document.querySelector('#cart-template');
    const clone = template.content.cloneNode(true);
    // connect this clone to our cartRoll.element
    // from this point we only need to refer to cartRoll.element

    cartRoll.element = clone.querySelector('.rollClone');
  
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

//loading in the rolls from the cart
function initializeCart() {
    let cart = [];
    if (localStorage.getItem('storedRolls')) {
        cart = JSON.parse(localStorage.getItem('storedRolls'));
    }
    for (let item of cart) {
        createElement(item);
    }
}

function price(roll) {
    const glazingCharge = glazingPrices[roll.glazing];
    const multiplier = packPrices[roll.size]
    return (roll.basePrice + glazingCharge) *  multiplier
}

function deleteRoll(cartRoll) {
    let cart = [];
    if (localStorage.getItem('storedRolls')) {
        cart = JSON.parse(localStorage.getItem('storedRolls'));
    }
    // remove the DOM object from the UI
    cartRoll.element.remove();
    // remove the actual roll object from the list of rolls
    cart.splice(cart.indexOf(cartRoll), 1);
    // updating the JSON data
    const cartString = JSON.stringify(cart);
    localStorage.setItem('storedRolls', cartString);
    updatePrice();
}

function updateElement(cartRoll) {
    // get the HTML elements that need updating
    const rollImageElement = cartRoll.element.querySelector('.cartImg');
    const rollTitleElement = cartRoll.element.querySelector('.rollChoice');
    const rollGlazeElement = cartRoll.element.querySelector('.glazingChoice');
    const rollSizeElement = cartRoll.element.querySelector('.sizeChoice');
    const rollPriceElement = cartRoll.element.querySelector('.listPrice');
    const rollRemove = cartRoll.element.querySelector('.delete-Roll');

    console.log(cartRoll)

    // copy our notecard content over to the corresponding HTML elements
    rollImageElement.src = rolls[cartRoll.type].imageFile;
    rollTitleElement.innerText = cartRoll.type + " Cinnamon Roll";
    rollGlazeElement.innerText = "Glaze Choice: " + cartRoll.glazing;
    rollSizeElement.innerText = "Pack Size: " + cartRoll.size;
    rollPriceElement.innerText = "$" + (price(cartRoll).toFixed(2));
}

function updatePrice() {
    let cart = [];
    if (localStorage.getItem('storedRolls')) {
        cart = JSON.parse(localStorage.getItem('storedRolls'));
    }
    const finalPrice = document.querySelector('#finalPrice');
    let sum = 0;
    for (let item of cart) { 
        sum += price(item);
    }
    finalPrice.innerText = "$" + sum.toFixed(2);
}

initializeCart();
updatePrice();

JSON.parse(localStorage.getItem('storedRolls'))