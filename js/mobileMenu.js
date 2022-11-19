const navbar = document.querySelector('nav')
const mobileMenu = document.querySelector('.mobile-menu')
const mobileMenuWrapper = document.querySelector('.mobile-menu-wrapper')
const openMobileMenuButton = navbar.querySelector('button')
const closeMobileMenuButton = mobileMenu.querySelector('button')

openMobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.remove('hide')
    mobileMenu.classList.add('show')
    mobileMenuWrapper.classList.add('zIndex-1000')

    document.body.classList.add('noscroll')
})

closeMobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.remove('show')
    mobileMenu.classList.add('hide')

    // Delay equals to the duration of the 'show' class animation
    setTimeout(() => {
        mobileMenuWrapper.classList.remove('zIndex-1000')
    }, 400)

    document.body.classList.remove('noscroll')
})