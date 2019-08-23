// burger
document.querySelector('.header__nav__burger').addEventListener('click', ()=>{
  document.querySelector('.header__nav__menu').classList.toggle('header__nav__menu--open')
})

// kits selector magic
function kitsFirst (e) {
  e.classList.add('form__list__item--active')
  // e.nextSibling.nextSibling.classList.add('form__list__item--active')
  e.nextSibling.nextSibling.childNodes[1].disabled = false
}

function kitsSecond (e) {
  const el = e.parentNode.children

  for (var i in el) {
    el[i].classList !== undefined 
    ? (el[i].classList.value.includes('form__list__item') 
      ? el[i].classList.add('form__list__item--active') 
      : null)
    : null
  }
}
