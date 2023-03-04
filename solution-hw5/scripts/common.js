//variables
let glazePrice = [0, 0, 0.5, 1.5];
let sizePrice = [1,3,5,10];
let glazeUpdate = 0;
let sizeUpdate = 1;
let currGlaze = "Keep Original";
let currSize = 1;
let rollType = NaN;
const cartSet = new Set(); //creating an empty set for the rolls

//---------------------------------------------------------------------------------

//arrays
let allGlazes = [
    {
        glaze: 'Keep original',
        priceAdd: 0
    },
    {
        glaze: 'Sugar milk',
        priceAdd: 0
    },
    {
        glaze: 'Vanilla milk',
        priceAdd: 0.5
    },
    {
        glaze: 'Double chocolate',
        priceAdd: 1.5
    }
]
let allSizes = [
    {
        size: '1',
        priceAdaptation: 1
    },
    {
        size: '3',
        priceAdaptation: 3
    },
    {
        size: '6',
        priceAdaptation: 5
    },
    {
        size: '12',
        priceAdaptation: 10
    }
]

//cart stuff
let cart = [];
class Roll {
    constructor(rollType, currGlaze, currSize, basePrice) {
        this.type = rollType;
        this.glaze = currGlaze;
        this.size = currSize;
        this.basePrice = basePrice;
    }
}

//calculate the listed price
function priceUpdate() {
    return (basePrice + glazeUpdate) * sizeUpdate;
}

//price updates by select id
function glazeChange(element) {
    let element1 = document.querySelector("#glazes"); //searches through the array
    glazeUpdate = parseFloat(element1.value);
    currGlaze = element1.options[element1.selectedIndex].text;
    const newPrice = priceUpdate();
    //updates the displayed price in the HTML
    document.querySelector("#finalPrice").innerText = "$" + newPrice.toFixed(2);
}
function sizeChange(element) {
    let element2 = document.querySelector("#sizes"); //searches through the array
    sizeUpdate = parseInt(element2.value);
    currSize = element2.options[element2.selectedIndex].text;
    const newPrice = priceUpdate();
    //updates the displayed price in the HTML
    (document.querySelector("#finalPrice")).innerText = "$" + newPrice.toFixed(2);
}