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