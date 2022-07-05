for (const anchor of document.querySelectorAll('a[href^="#"')) {
	anchor.addEventListener('click', e => {
		e.preventDefault()

		document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' })
	})
}
