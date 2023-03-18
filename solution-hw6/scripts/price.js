populateCinnamonData();
populateSelectOptions();

function populateCinnamonData() {
	const params = new URLSearchParams(window.location.search);
	rollType = params.get("roll");
	const imagePath = rolls[rollType]["imageFile"];
	const price = rolls[rollType]["basePrice"];

	const bannerElement = document.querySelector("#detailBanner");
	bannerElement.innerText = rollType + " Cinnamon Roll";

	const imageElement = document.querySelector("#rollPicture");
	imageElement.src = imagePath;

	basePrice = parseFloat(price);
	updateTotalPrice();
}

function populateSelectOptions() {
	// Populate glazing options with corresponding price adaptation values
	const glazingSelect = document.querySelector("#glazes");

	for (const [glazing, price] of Object.entries(glazingPrices)) {
		const option = document.createElement("option");
		option.textContent = glazing;
		option.value = price;
		glazingSelect.appendChild(option);
	}

	// Populate pack options with corresponding price adaptation values
	const packSelect = document.querySelector("#sizes");

	for (const [pack, price] of Object.entries(packPrices)) {
		const option = document.createElement("option");
        console.log(option);
		option.textContent = pack;
		option.value = price;
		packSelect.appendChild(option);
	}
}

/* Record the current glazing option and update the total price */
function glazeChange(element) {
	currGlaze = element.options[element.selectedIndex].text;
	updateTotalPrice();
}

/* Record the current pack option and update the total price */
function sizeChange(element) {
	currSize = element.options[element.selectedIndex].text;
	updateTotalPrice();
}

function updateTotalPrice() {
	const glazingPrice = glazingPrices[currGlaze];
	const packPrice = packPrices[currSize];
	const totalPrice = (basePrice + glazingPrice) * packPrice;
	const totalPriceField = document.querySelector("#finalPrice");
	totalPriceField.textContent = "$" + totalPrice.toFixed(2);
}

function printCart() {
	const roll = new Roll(rollType, currGlaze, currSize, basePrice);
	cart.push(roll);
	console.log(cart);
}