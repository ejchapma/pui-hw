const params = new URLSearchParams(window.location.search);
rollType = params.get("roll");
let basePrice = rolls[rollType]["basePrice"]; //retrieves new base price
let rollImage = rolls[rollType]["imageFile"]; //retrieves image scr
//changing contents of the page
document.querySelector("#finalPrice").innerText = "$" + basePrice;
document.querySelector("#detailHeader").innerText = rollType + " cinnamon roll";
document.getElementById("rollPicture").src = rollImage;

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

function cartAdd(element) {
    let cartRoll = new Roll(rollType, currGlaze, currSize, basePrice);
    cartSet.add(cartRoll);
    console.log(cartRoll);
    return cartRoll;
}