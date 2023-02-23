//variables
let glazePrice = [0, 0, 0.5, 1.5];
let sizePrice = [1,3,5,10];
let glazeUpdate = 0;
let sizeUpdate = 1;
let currGlaze = "Keep Original";
let currSize = 1;

//---------------------------------------------------------------------------------

const rollType = window.location.search.split('=')[1]; //retrieves the name of the roll
let basePrice = rolls[rollType]["basePrice"]; //retrieves new base price
let rollImage = rolls[rollType]["imageFile"]; //retrieves image scr
//changing contents of the page
document.querySelector("#finalPrice").innerText = "$" + basePrice;
document.querySelector("#detailHeader").innerText = rollType + " cinnamon roll";
document.getElementById("rollPicture").src = rollImage;

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
function cartAdd(element) {
    let cartRoll = new Roll(rollType, currGlaze, currSize, basePrice);
    cart.push(cartRoll);
    console.log(cart);
}

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
        glaze: 'Double milk',
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

//creating the options in HTML
for (let i = 0; i < allGlazes.length; i++) {
    const select = document.createElement("option"); //creates the option in the html
    select.value = allGlazes[i].priceAdd; //tells the computer what price the glaze is
    select.innerHTML = allGlazes[i].glaze; //displays the correct name of the glaze
    document.querySelector("#glazes").add(select); //adds the option to the select tag
}
for (let i = 0; i < allSizes.length; i++) {
    const select = document.createElement("option");
    select.value = allSizes[i].priceAdaptation;
    select.innerHTML = allSizes[i].size;
    // currSize = select.innerHTML;
    document.querySelector("#sizes").add(select);
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



//let arr = element2.value.split(",");
// currSize = parseInt(arr[1]);
// sizeUpdate = parseInt(arr[0]);