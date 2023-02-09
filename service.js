const gardenButton = document.getElementById("garden__btn");
const plantingButton = document.getElementById("planting__btn");
const lawnButton = document.getElementById("lawn__btn");
const productCards = document.querySelectorAll(".cards__item");

let activeButtons = [];

gardenButton.addEventListener("click", function() {
    toggleButton(1);
});

plantingButton.addEventListener("click", function() {
    toggleButton(2);
});

lawnButton.addEventListener("click", function() {
    toggleButton(3);
});

function toggleButton(buttonId) {
    let button;
    switch (buttonId) {
        case 1:
        button = gardenButton;
        break;
        case 2:
        button = plantingButton;
        break;
        case 3:
        button = lawnButton;
        break;
        default:
        return;
    }

    if (activeButtons.includes(buttonId)) {
        activeButtons = activeButtons.filter((id) => id !== buttonId);
        button.classList.remove("service__button-active");
    } else {
        if (activeButtons.length === 2) return; 
        activeButtons.push(buttonId);
        button.classList.add("service__button-active");
    }
    updateProductCards();
}

function updateProductCards() {
    if (activeButtons.length === 0) {
        productCards.forEach(card => card.classList.remove("blur"));
        return;
}

    productCards.forEach(card => {
        if (activeButtons.includes(+card.dataset.service)) {
        card.classList.remove("blur");
        } else {
        card.classList.add("blur");
        }
    });
}