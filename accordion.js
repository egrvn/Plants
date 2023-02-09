const dropDown = document.querySelectorAll('.accourdion__button');
const dropUp = document.querySelectorAll('.accourdion-button__open');
const prices = document.querySelector('.prices__item');
const pricesContainer = document.querySelectorAll('.prices-item__container');
const accordion = document.querySelector('.accourdion-item__container');
let activeAccordion = null;

dropDown.forEach((dropdownButton) => {
    dropdownButton.addEventListener('click', (e) => {
        let pricesItem = e.target.closest('.prices__item');
        let accordionItem = pricesItem.querySelector('.accordion-item__container');
        let pricesItemContainer = pricesItem.querySelector('.prices-item__container');
        
        if (activeAccordion) {
            activeAccordion.style.display = 'none';
            activeAccordion.previousElementSibling.style.display = 'flex';
            activeAccordion.closest('.prices__item').style.backgroundColor = "#EDF2EC";
        }
        activeAccordion = accordionItem;
        pricesItemContainer.style.display = 'none';
        pricesItem.style.backgroundColor = "#D6E7D2"; 
        accordionItem.style.display = 'block';
    });
});

dropUp.forEach((dropUpButton) => {
    dropUpButton.addEventListener('click', (e) => {
        let pricesItem = e.target.closest('.prices__item');
        let accordionItem = e.target.closest('.accordion-item__container');
        let pricesItemContainer = accordionItem.previousElementSibling;
        
        accordionItem.style.display = 'none';
        pricesItemContainer.style.display = 'flex';
        pricesItem.style.backgroundColor = "#EDF2EC";
        activeAccordion = null;
    });
});
