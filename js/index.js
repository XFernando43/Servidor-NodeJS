document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.header__menu-icon');
    const dropdownMenu = document.querySelector('.menu-mobile');

    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.x-icon');

    button.addEventListener('click', () => {
        if (dropdownMenu.classList.contains('hidden')) {
            dropdownMenu.classList.remove('hidden');
            menuIcon.classList.add('hidden'); 
            closeIcon.classList.remove('hidden'); 
        } else {
            dropdownMenu.classList.add('hidden');
            menuIcon.classList.remove('hidden'); 
            closeIcon.classList.add('hidden'); 
        }
    });
  });