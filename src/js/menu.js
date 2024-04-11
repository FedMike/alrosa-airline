const headerMenuDesktopItems = document.querySelectorAll('.header-menu__desktop-item--link');
const headerDropdownMenu = document.querySelector('.header__dropdown-menu');
const dropdownMenuItems = document.querySelectorAll('.dropdown-menu__item');
const header = document.querySelector('#header');

headerMenuDesktopItems.forEach((item, index) => {
    // console.log(item);
    // console.log(index);
    // console.log(dropdownMenuItems);
    if (index != 1) {
        item.addEventListener('mouseenter', (e) => {
            // console.log(index);
            // console.log(dropdownMenuItems[index]);
            headerMenuDesktopItems.forEach((item2) => {
                if (item2.classList.contains('active')) {
                    item2.classList.remove('active');
                }
            });
            dropdownMenuItems.forEach((item3) => {
                if (item3.classList.contains('active')) {
                    item3.classList.remove('active');
                }
            });
            dropdownMenuItems[index].classList.add('active')
            headerDropdownMenu.classList.add('active');
            item.classList.add('active');
        })
    }
});

header.addEventListener('mouseleave', () => {
    headerDropdownMenu.classList.remove('active');
    headerMenuDesktopItems.forEach((item) => {
        item.classList.remove('active');
    })
});
