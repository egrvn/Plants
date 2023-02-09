const burger = document.getElementById('burger');
const menu = document.querySelector('header');
const links = menu.querySelectorAll('a');

burger.addEventListener('click', mobileMenu);

function mobileMenu () {
    menu.classList.toggle('open');
}
links.forEach(element => {
    element.addEventListener('click', () => {
        menu.classList.remove('open');
    })
});

document.addEventListener( 'click', (e) => {
	const withinBoundaries = e.composedPath().includes(menu);
	if ( ! withinBoundaries ) {
		menu.classList.remove('open'); 
	}
})
