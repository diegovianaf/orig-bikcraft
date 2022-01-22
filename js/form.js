const form = document.querySelector('form')

function formSent(answer) {
  if (answer.ok) {
    form.innerHTML =
    "<p class='font-2-l' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7;'><span style='color: #317A00;'>Message sent successfully</span>, we will contact you shortly. We usually respond within 24 hours.</p>"
  } else {
    form.innerHTML =
    "<p class='font-2-l' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7;'><span style='color: #E00000;'>Sending error</span>, you can send it directly to our email at contact@bikcraft.com</p>"
  }
}

function sendForm(event) {
  event.preventDefault()
  const button = document.querySelector('form button')
  button.disabled = true
  button.innerHTML = 'Sending...'

  const data = new FormData(form)

/* form PHPMAILER with the site hosted on hostgator
   fetch('./send.php', {
    method: 'POST',
    body: data
  }).then(formSent) */

  fetch('./', {
  }).then(formSent)
}

form.addEventListener('submit', sendForm)