const slides = [
	{
		image: "slide1.jpg",
		tagLine: "Impressions tous formats", "en boutique et en ligne"
	}
	{
		image: "slide2.jpg",
		tagLine: "Tirages haute définition grand format", "pour vos bureaux et events"
	}
	{
		image: "slide3.jpg",
		tagLine: "Grand choix de couleurs", "de CMJN aux pantones"
	}
	{
		image: "slide4.png",
		tagLine: "Autocollants", "avec découpe laser sur mesure"
	}
];

//Variables constantes non modifiable
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const banner = document.getElementById('banner');
const bannerImages = banner.querySelectorAll('.banner-img');
const dots = banner.querySelectorAll('.dot');
const tagLineElement = banner.querySelector('.tagline');



//L'instruction let permet de déclarer une variable
let currentIndex = 0;

arrowRight.addEventListener('click', showNextImage);
arrowLeft.addEventListener('click', showPreviousImage);

function showNextImage() {
	bannerImages[currentIndex].style.display = 'none';
	dots[currentIndex].classList.remove('dot_selected');

	currentIndex = (currentIndex + 1) % bannerImages.length;

	bannerImages[currentIndex].style.display = 'block';
	dots[currentIndex].classList.add('dot_selected');

	updateTagline(); // Mettre à jour la tagline après chaque changement d'image
}

function showPreviousImage() {
	bannerImages[currentIndex].style.display = 'none';
	dots[currentIndex].classList.remove('dot_selected');

	currentIndex = (currentIndex - 1 + bannerImages.length) % bannerImages.length;

	bannerImages[currentIndex].style.display = 'block';
	dots[currentIndex].classList.add('dot_selected');

	updateTagline(); // Mettre à jour la tagline après chaque changement d'image
}

// Afficher les taglines correspondant à chaque diapositive

function updateTagline() {
	const currentSlide = slides[currentIndex];
	tagLineElement.innerHTML = `${currentSlide.tagLines[0]} <span>${currentSlide.tagLines[1]}</span>`;
}

updateTagline();

console. log(); //Tester fonctionnenement des events