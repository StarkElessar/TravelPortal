window.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.querySelector('.burger-btn')  
  
  if (burgerBtn) {
    burgerBtn.addEventListener ('click', () => {
      burgerBtn.classList.toggle('active')
    })
  }
})