const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


//Variables constantes non modifiable
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const banner = document.getElementById('banner');
const bannerImages = banner.querySelectorAll('.banner-img');
const dots = banner.querySelectorAll('.dot');
const tagLineElement = banner.querySelector('.tagline');



//L'instruction let permet de déclarer une variable avec une valeur '0'
let number = 0;

//ajout Event click
arrowRight.addEventListener('click', showNextImage);
arrowLeft.addEventListener('click', showPreviousImage);

function showNextImage() {
	bannerImages[number].style.display = 'none';
	dots[number].classList.remove('dot_selected');

	number= (number+ 1) % bannerImages.length;

	bannerImages[number].style.display = 'block';
	dots[number].classList.add('dot_selected');

	updateTagline(); // Mettre à jour la tagline après chaque changement d'image
}

function showPreviousImage() {
	bannerImages[number].style.display = 'none';
	dots[number].classList.remove('dot_selected');

	number = ( number- 1 + bannerImages.length) % bannerImages.length;

	bannerImages[number].style.display = 'block';
	dots[number].classList.add('dot_selected');

	updateTagline(); // Mettre à jour la tagline après chaque changement d'image
}

// Afficher les taglines correspondant à chaque diapositive

function updateTagline() {
    tagLineElement.innerHTML = slides[number].tagLine;
}












