const iconPressDrop = document.querySelectorAll('.drop-icon-press')
const navBarIcon = document.getElementById('nav-bars-icon')   
const navBarsHeaderMobile = document.getElementById('nav-bar-main')
const overLay = document.getElementById('overlay')
const modalElement = document.querySelector('.modal2')
const overlayModalCart = document.querySelector('.modal__overlay')
const bodyModalCart = document.querySelector('.modal__body')
const btnClose = document.getElementById('btn-close')
const btnAddCart = document.querySelector('.btn-add-cart')
const btnProductToCart = document.querySelector('.action')

console.log(navBarIcon);
iconPressDrop.forEach((icon, i) => { 
    icon.addEventListener('click', () => {
        const dropDownUlForIcon = icon.parentElement.nextElementSibling
        dropDownUlForIcon.classList.toggle('show')
    }) 
}) 

navBarIcon.addEventListener('click', () => {
    navBarsHeaderMobile.classList.toggle('active')
    overlay.classList.toggle('show')
})

overLay.addEventListener('click', () => {
    navBarsHeaderMobile.classList.toggle('active')
    overlay.classList.toggle('show')
})

btnClose.onclick = function() {  
    modalElement.style.visibility = 'hidden'
    modalElement.style.display = 'flex' 
    overlayModalCart.style.opacity = '-1' 
    bodyModalCart.style.opacity = '-1'
    overlayModalCart.style.zIndex = '0'
    bodyModalCart.style.zIndex = '0' 
    modalElement.style.zIndex = '0'
  
  
  }
   
btnProductToCart.onclick = function() {
    modalElement.style.visibility = 'visible'
    modalElement.style.display = 'flex'
    modalElement.style.opacity = '1'
    overlayModalCart.style.opacity = '1' 
    bodyModalCart.style.opacity = '1'
    overlayModalCart.style.zIndex = '100'
    bodyModalCart.style.zIndex = '100'
    modalElement.style.zIndex = '100' 
}