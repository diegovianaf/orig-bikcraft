const links = document.querySelectorAll('.header-navbar a')

function activateLink(link) {
  const url = location.href
  const href = link.href

  if (url.includes(href)) {
    link.classList.add('active')
  }
}

links.forEach(activateLink)