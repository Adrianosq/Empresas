export function menuResponsivo(){
    const menuIcon = document.querySelector('.mobile-menu-icon')
    const menu = document.querySelector('.menu')

    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('active')
        menu.classList.toggle('active')
    })
}