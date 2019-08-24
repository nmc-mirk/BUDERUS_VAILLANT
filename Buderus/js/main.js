// burger
document.querySelector(".header__nav__burger").addEventListener("click", () => {
  document.querySelector(".header__nav__menu").classList.toggle("header__nav__menu--open");
});

// kits selector magic
function kitsFirst(e) {
  e.classList.add("form__list__item--active");
  e.nextSibling.nextSibling.childNodes[1].disabled = false;
}

function kitsSecond(e) {
  const el = e.parentNode.children;

  for (var i in el) {
    el[i].classList !== undefined
      ? el[i].classList.value.includes("form__list__item")
        ? el[i].classList.add("form__list__item--active")
        : null
      : null;
  }
}

// modal magic
function modalToggle() {
  const modal = document.querySelector(".modal");
  const top = document.querySelector("body").getBoundingClientRect().top;
  const body = document.querySelector("body");

  if (!modal.classList.value.includes("open")) {
    modal.classList.add("open");
    modal.style.top = `${-top}px`;
    body.style.overflow = "hidden";
  } else {
    modal.classList.remove("open");
    body.style.overflow = "visible";
  }
}
