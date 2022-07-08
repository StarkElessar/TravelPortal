window.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.querySelector('.burger-btn')
  const closeBurgerMenu = document.querySelector('.burger-menu__close-btn')
  const burgerMenu = document.querySelector('.burger-menu')
  const popupWrapper = document.querySelector('.popup__wrapper')

  if (burgerBtn || burgerMenu) {
    burgerBtn.addEventListener('click', showBurgerMenu)
  
    closeBurgerMenu.addEventListener('click', hideBurgerMenu)
    popupWrapper.addEventListener('click', (e) => {
      if (e.target && e.target.classList.contains('popup__wrapper')) {
        hideBurgerMenu()
      }
    })
  }

  function hideBurgerMenu() {
    burgerBtn.classList.remove('active')
    popupWrapper.classList.remove('show')
    burgerMenu.classList.remove('show')
  }
  function showBurgerMenu() {
    burgerBtn.classList.add('active')
    popupWrapper.classList.add('show')
    burgerMenu.classList.add('show')
  }
})