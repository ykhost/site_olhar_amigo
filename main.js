// ABRE E FECHA O MENU QUANDO CLICAR NO ICON: Hamburguer e X
const nav = document.querySelector('#header nav')
const toogle = document.querySelectorAll('nav .toogle')

for (const element of toogle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

//QUANDO CLICAR EM 1 ITEM DO MENU, ESCONDE  O MENU
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

// MUDAR O HEADER DA PAGINA QUANDO DER SCROLL

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    //Scroll eh maior que a altura do header
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll') // menor que a altura do header
  }
})
