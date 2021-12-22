// * Burger menu
const headerNav = document.querySelector('.header__nav')
const iconMenu = document.querySelector('.menu__icon');
if(iconMenu){
	iconMenu.addEventListener('click', function(e){
		iconMenu.classList.toggle('_active');
		document.body.classList.toggle('_lock')
		headerNav.classList.toggle('_active');
	});
}

//* Smooth scroll
const menuLinks = document.querySelectorAll('.nav__link[data-goto]')
if(menuLinks.length > 0){
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener('click', onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.content-wrapper__header').offsetHeight;

			if(iconMenu.classList.contains('_active')){
				document.body.classList.remove('_lock');
				headerNav.classList.remove('_active');
				iconMenu.classList.remove('_active');
			}
	
			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}	
	}
}
