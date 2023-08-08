const modalElement = document.querySelector('.modal2')
const overlayModalCart = document.querySelector('.modal__overlay')
const bodyModalCart = document.querySelector('.modal__body')
const btnClose = document.getElementById('btn-close')
const btnAddCart = document.querySelector('.btn-add-cart')
 
btnClose.onclick = function() {  
  modalElement.style.visibility = 'hidden'
  modalElement.style.display = 'flex' 
  overlayModalCart.style.opacity = '-1' 
  bodyModalCart.style.opacity = '-1'
  overlayModalCart.style.zIndex = '0'
  bodyModalCart.style.zIndex = '0' 
  modalElement.style.zIndex = '0'


}
 
btnAddCart.onclick = function() {
  modalElement.style.visibility = 'visible'
  modalElement.style.display = 'flex'
  modalElement.style.opacity = '1'
  overlayModalCart.style.opacity = '1' 
  bodyModalCart.style.opacity = '1'
  overlayModalCart.style.zIndex = '100'
  bodyModalCart.style.zIndex = '100'
  modalElement.style.zIndex = '100' 
}