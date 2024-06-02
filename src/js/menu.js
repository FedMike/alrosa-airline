const headerMenuDesktopItems = document.querySelectorAll(
	'.header-menu__desktop-item--link'
);
const headerDropdownMenu = document.querySelector('.header__dropdown-menu');
const dropdownMenuItems = document.querySelectorAll('.dropdown-menu__item');
const header = document.querySelector('#header');
let timerId;
let timerId2;

headerMenuDesktopItems.forEach((item, index) => {
	// if (index != 1) {
	item.addEventListener('mouseenter', (e) => {
		timerId2 = setTimeout(() => {
			headerMenuDesktopItems.forEach((item2) => {
				if (item2.classList.contains('active')) {
					item2.classList.remove('active');
				}
			});
			item.classList.add('active');
			headerDropdownMenu.classList.add('active');
		}, 200);

		timerId = setTimeout(() => {
			dropdownMenuItems.forEach((item3) => {
				if (item3.classList.contains('active')) {
					item3.classList.remove('active');
				}
			});

			dropdownMenuItems[index].classList.add('active');
		}, 200);
	});
	// }

	item.addEventListener('mouseout', (event) => {
		clearTimeout(timerId);
		clearTimeout(timerId2);
	});
});

header.addEventListener('mouseleave', () => {
	headerDropdownMenu.classList.remove('active');
	headerMenuDesktopItems.forEach((item) => {
		item.classList.remove('active');
	});
});
