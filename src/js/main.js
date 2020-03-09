window.onload = function() {
    const menu = Array.from(document.getElementsByClassName('menu'))[0];
    const menuItems = Array.from(menu.getElementsByTagName('li'));
    const toggler = Array.from(document.getElementsByClassName('toggler'))[0];
    menuItems.forEach(el => {
        el.addEventListener('click', () => {
            toggler.checked = false;
        })
    })
};