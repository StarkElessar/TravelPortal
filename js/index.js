window.addEventListener("DOMContentLoaded", () => {
  const loginButton     = document.querySelector(".header__login-btn");
  const modalCloseBtns  = document.querySelectorAll(".btn-close");
  const modalSignIn     = document.querySelector(".modal-sign-in");
  const modalLogIn      = document.querySelector(".modal-login");
  const registerBtn     = document.querySelector(".link-register");
  const loginBtn        = document.querySelector(".link-login");
  const body            = document.querySelector("body");

  if (loginButton) {
    loginButton.addEventListener("click", () => {
      body.classList.add("lock");
      modalLogIn.classList.add("show");
    });
  }

  if (modalCloseBtns.length > 0) {
    modalCloseBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        body.classList.remove("lock");
        if (modalLogIn) {
          modalLogIn.classList.remove("show");
        }
        if (modalLogIn) {
          modalSignIn.classList.remove("show");
        }
      });
    });
  }

  registerBtn.addEventListener("click", (event) => {
    if (modalLogIn.classList.contains("show")) {
      event.preventDefault;
      modalLogIn.classList.remove("show");
      modalSignIn.classList.add("show");
    }
  });

  loginBtn.addEventListener("click", (event) => {
    if (modalSignIn.classList.contains("show")) {
      event.preventDefault;
      modalSignIn.classList.remove("show");
      modalLogIn.classList.add("show");
    }
  });

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

  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 15
      },
      // when window width is >= 480px
      426: {
        slidesPerView: 1.8,
        spaceBetween: 20
      }
    },
    centeredSlides: true
  });
})