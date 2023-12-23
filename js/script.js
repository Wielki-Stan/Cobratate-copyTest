document.addEventListener('DOMContentLoaded', function () {
	const btnHover = document.querySelectorAll('.checkout-btn')
	const learnVideoItems = document.querySelectorAll('.video-box')
	const escapeVideoItems = document.querySelectorAll('.rw-escape-video-items')
	const escapeBtn = document.querySelector('.escape-button')
	const rwEscapeCards = document.querySelectorAll('.rw-escape-card')
	const removeShadow = document.querySelector('.video-shadow-btn')

	removeShadow.addEventListener('click', function () {
		removeShadow.classList.add('hidden')
	})

	btnHover.forEach(item => {
		function btnHoverShow() {
			item.style.scale = '1.2'
		}
		function btnHoverRemove() {
			item.removeAttribute('style')
		}
		item.addEventListener('mouseenter', btnHoverShow)
		item.addEventListener('mouseleave', btnHoverRemove)
	})

	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('section-line-animation')
			}
		})
	})
	const sectionLine = document.querySelectorAll('.section-line')
	sectionLine.forEach(el => observer.observe(el))

	learnVideoItems.forEach(item => {
		function hideElement() {
			item.classList.add('hidden')

			const overlays = document.querySelectorAll('.rw-learn-video-overlay')
			overlays.forEach(overlay => {
				const iframe = overlay.querySelector('iframe')

				iframe.classList.remove('hidden')
			})
		}
		item.addEventListener('click', hideElement)
	})

	escapeVideoItems.forEach(item => {
		function hideElement() {
			item.classList.add('hidden')
		}
		item.addEventListener('click', hideElement)
	})

	let visibleCardsIndex = 2

	function removeHidden() {
		if (visibleCardsIndex < rwEscapeCards.length) {
			for (let i = 0; i < 2; i++) {
				let index = (visibleCardsIndex + i) % rwEscapeCards.length
				rwEscapeCards[index].classList.remove('hidden')
			}

			visibleCardsIndex = (visibleCardsIndex + 2) % rwEscapeCards.length
		}
	}

	escapeBtn.addEventListener('click', removeHidden)

	$(document).ready(function () {
		$(window).scroll(function () {
			$('.scroll-element').each(function () {
				let $element = $(this)
				let elementTop = $element.offset().top
				let elementHeight = $element.outerHeight()
				let viewportHeight = $(window).height()
				let scrollPosition = $(window).scrollTop() + viewportHeight / 2
				if (scrollPosition >= elementTop && scrollPosition <= elementTop + elementHeight) {
					let scrollPercentage = ((scrollPosition - elementTop) / viewportHeight) * 100

					let brightnessValue = 0.3 + (scrollPercentage / 25) * 0.6
					brightnessValue = Math.min(1.0, brightnessValue)
					brightnessValue = Math.max(0.3, brightnessValue)

					$element.css('filter', 'brightness(' + brightnessValue + ')')
				}
			})
		})
	})

	const animationElements = document.querySelectorAll('.animation-element')
	const caElements = document.querySelectorAll('.animation-elementUp')
	const animationElementsX = document.querySelectorAll('.animation-elementX')
	const caElementsX = document.querySelectorAll('.animation-elementUpX')

	function handleScroll() {
		
		animationElements.forEach(animationElement => {
			const elementBottom = animationElement.getBoundingClientRect().bottom
			const windowHeight = window.innerHeight
			if (elementBottom + 350 < windowHeight) {
				animationElement.classList.add('visible')
			}
		})
		caElements.forEach(animationElement => {
			const elementBottom = animationElement.getBoundingClientRect().bottom
			const windowHeight = window.innerHeight
			if (elementBottom - 1000 < windowHeight) {
				animationElement.classList.add('visible')
			}
		})
		caElementsX.forEach(animationElement => {
			const elementBottom = animationElement.getBoundingClientRect().bottom
			const windowHeight = window.innerHeight
			if (elementBottom + 20 < windowHeight) {
				animationElement.classList.add('visibleX')
			}
		})
		animationElementsX.forEach(animationElement => {
			const elementBottom = animationElement.getBoundingClientRect().bottom
			const windowHeight = window.innerHeight
			if (elementBottom + 20 < windowHeight) {
				animationElement.classList.add('visibleX')
			}
		})
	}

	window.addEventListener('scroll', handleScroll)

	// Ręczne uruchomienie funkcji po załadowaniu strony
	handleScroll()
})
