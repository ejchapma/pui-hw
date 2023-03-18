//variables
let currGlaze = "Keep original";
let currSize = 1;
let basePrice = 0;
let rollType = NaN;
class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

const glazingPrices = {
    "Keep original" : 0.0,
    "Sugar milk" : 0.0,
    "Vanilla milk" : 0.50,
    "Double chocolate" : 1.50
};
const packPrices = {
    "1" : 1, "3" : 3, "6" : 5, "12" : 10
};

/*****************************************************************************/

function saveToLocalStorage() {
    let cart = [];
    if (localStorage.getItem('storedRolls')) {
        cart = JSON.parse(localStorage.getItem('storedRolls'));
    }

    const roll = new Roll(rollType, currGlaze, currSize, basePrice);
    cart.push(roll);
    
    const cartString = JSON.stringify(cart);
    localStorage.setItem('storedRolls', cartString);
    console.log(localStorage);
}
  
function retrieveFromLocalStorage() {
    let cart = [];
    if (localStorage.getItem('storedRolls')) {
        cart = JSON.parse(localStorage.getItem('storedRolls'));
    }
}
  
if (localStorage.getItem('storedRolls') != null) {
    retrieveFromLocalStorage();
}
  