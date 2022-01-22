// Activate links of navbar

const links = document.querySelectorAll('.header-navbar a')

function activateLink(link) {
  const url = location.href
  const href = link.href

  if (url.includes(href)) {
    link.classList.add('active')
  }
}

links.forEach(activateLink)


// Activate items of quotation

const parameters = new URLSearchParams(location.search)

function activateProduct(parameter) {
  const element = document.getElementById(parameter)
  if (element) {
    element.checked = true
  }
}

parameters.forEach(activateProduct)


// faq

const faq = document.querySelectorAll('.faq button')

function activateQuestion(event) {
  const question = event.currentTarget
  const controls = question.getAttribute('aria-controls')
  const answer = document.getElementById(controls)

  answer.classList.toggle('active')
  const active = answer.classList.contains('active')
  question.setAttribute('aria-expanded', active)
}

function faqEvents(question) {
  question.addEventListener('click', activateQuestion)
}

faq.forEach(faqEvents)


// bikes gallery

const gallery = document.querySelectorAll('.bike-images img')

const galleryContainer = document.querySelector('.bike-images')

function changePicture(event) {
  const img = event.currentTarget
  const media = matchMedia('(min-width: 937px)').matches
  if (media) {
    galleryContainer.prepend(img)
  }
}

function galleryEvents (img) {
  img.addEventListener('click', changePicture)
}

gallery.forEach(galleryEvents)

// animation
if (window.SimpleAnime) {
  new SimpleAnime();
}

