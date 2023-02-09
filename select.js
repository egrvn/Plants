const selectBtn = document.querySelector('.select__btn');
const selectHeader = document.querySelector('.select__header');
const selectBody = document.querySelector('.select__body');
const selectItem = document.querySelectorAll('.select__item');
const selectCurrent = document.querySelector('.select__current');
const adresses = document.querySelectorAll('.select__adress');
const contactsImg = document.querySelector('.contacts__image');
const container = document.querySelector('.select__container');

adresses.forEach(adress => {
    adress.style.display = 'none';
});

selectBtn.addEventListener('click', () => {
    selectBody.classList.toggle('active');
    selectHeader.classList.add('active');
    selectBtn.classList.toggle('active');
    contactsImg.classList.add('delete');
    container.classList.add('active');
    const activeAddress = document.querySelector('.select__adress.active');
    if (!activeAddress) {
        return;
        }
    if (activeAddress) {
        if (activeAddress.style.display === 'block') {
            activeAddress.style.display = 'none';
        } else {
            activeAddress.style.display = 'block';
        }
        activeAddress.classList.remove('active');
    } 
});

selectItem.forEach(item => {
    item.addEventListener('click', function() {
        const city = this.dataset.city;
        adresses.forEach(adress => {
        if (adress.dataset.city === city) {
            adress.classList.add('active');
            selectCurrent.innerHTML = city;
            selectCurrent.classList.add('active')
            if (selectBody.classList.contains('active')) {
                selectBody.classList.remove('active');
            } 
            if (adress.style.display === 'none') {
                adress.style.display = 'block';
                selectBody.classList.remove('active');
                selectHeader.classList.add('active');
                selectBtn.classList.remove('active');
            } else {
                adress.style.display = 'none';
                selectBody.classList.add('active');
                container.classList.remove('active');
                selectHeader.classList.add('active');
            }
        } else {
            adress.style.display = 'none';
        }
        });
    });
})

document.addEventListener('click', (event) => {
    const isOutside = !event.target.closest('.select__header, .select__body, .select__item, .select__adress');
    if (isOutside) {
        selectHeader.classList.remove('active');
        selectBody.classList.remove('active');
        contactsImg.classList.remove('delete');
        container.classList.remove('active');
        selectCurrent.innerHTML = "City";
        adresses.forEach(adress => {
        adress.classList.remove('active');
        adress.style.display = 'none';
        })
    }
});