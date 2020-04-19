const menuButton = document.querySelector('.page-navigation__icon');

menuButton.addEventListener('click', (e) => {
    const navigationItems = document.querySelector('.page-navigation__items');
    navigationItems.classList.toggle('page-navigation__items--display');
});