//arrays
let allGlazes = [
    {
        glaze: 'Keep original',
        priceAdaptation: '0'
    },
    {
        glaze: 'Sugar milk',
        priceAdaptation: '0'
    },
    {
        glaze: 'Vanilla milk',
        priceAdaptation: '0.5',
    },
    {
        glaze: 'Double milk',
        priceAdaptation: '1.5',
    }
]

//functions
function glazeChange(element) {
    //get value
    const priceUpdate = element.value;
    let glazePrice = parseFloat(allGlazes[priceUpdate].priceAdaptation);
    let sizes = parseInt((document.querySelector('#sizes')).value);
    let finalPrice = (2.49 + glazePrice)*sizes;
    displayPrice("$" + finalPrice.toFixed(2));
}
//change display of final roll price 
function displayPrice(rollPrice) {
    let rollPriceDisplay = document.querySelector('#finalPrice');
    rollPriceDisplay.innerText = rollPrice;
}
function sizeChange(element) {
    //get value
    const sizes = element.value;
    let glazePriceIndex = parseInt(document.querySelector("#glazes").value);
    let glazePrice = parseFloat(allGlazes[glazePriceIndex].priceAdaptation);
    let totalPrice = (2.49 + glazePrice)*sizes;
    displayPrice("$" + totalPrice.toFixed(2));
}
