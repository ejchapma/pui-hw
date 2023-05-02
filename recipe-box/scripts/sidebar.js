function displayChangeSide(color) {
    for (const sidebar of document.querySelectorAll(".sidebar")) {
        sidebar.classList.remove('visible');
    }

    document.querySelector(".sidebar." + color).classList.add('visible');
}

function closeSide() {
    for (const sidebar of document.querySelectorAll(".sidebar")) {
        sidebar.classList.remove('visible');
    }
    document.querySelector(".recipeSection").classList.remove('visible');

    document.querySelector(".sidebar." + color).classList.add('visible');
}

function recipeCard(image, source, alt) {
    document.querySelector(".recipeSection").classList.add('visible');
    document.querySelector("#rollPicture").src = "images/" + image;
    document.querySelector("#rollPicture").alt = alt;
    recipeSource.innerText = source;
}