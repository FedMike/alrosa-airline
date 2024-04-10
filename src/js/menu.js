export const menus = () => {
    const headerMenuDesktopItems = document.querySelectorAll('.header-menu__desktop-item--link');

    console.log(headerMenuDesktopItems);
    headerMenuDesktopItems.forEach((item) => {
        item.addEventListener('mouseenter', (e) => {
            headerMenuDesktopItems.forEach((item2) => {
                if (item2.classList.contains('active')) {
                    item2.classList.remove('active');
                }
            });
            item.classList.add('active');
        })
    })
}
