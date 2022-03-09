<<<<<<< HEAD
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

// Testimonial Swiper Slider
const swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets'
  },
  mousewheel: true,
  keyboard: true
})

// SCROLL REAVEL: Revela elementos quando der scroll na pagina
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 1200,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonial header, #testimonial .testimonials,
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
)
=======
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

// Testimonial Swiper Slider
const swiper = new Swiper('.swiper-container', {
  slidePerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})

// SCROLL REAVEL: Revela elementos quando der scroll na pagina
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 1200,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonial header, #testimonial .testimonials
  #contact .text, #contact .links
  `,
  { interval: 100 }
)
>>>>>>> 2419976c80e82cb59e32f9313afaaa63122c2ca3
