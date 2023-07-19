const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
]

// Sélectionner le conteneur de la bannière
const banner = document.getElementById('banner');

// Sélectionner l'image de la bannière
const bannerImage = banner.querySelector('.banner-img');

// Sélectionner le paragraphe de la bannière
const bannerText = banner.querySelector('p');

// Sélectionner le conteneur des points
const dotContainer = banner.querySelector('.dots');

const dot = document.querySelectorAll('.dot');

// Ajoute les points (bullets)
for (let dot = 0; dot < slides.length; dot = dot + 1) {
    const span = document.createElement('span');
    span.classList.add('dot');
    dotContainer.appendChild(span);
    //rend les bullet points cliquable
    // Ajouter un écouteur d'événements de clic à chaque point
    span.addEventListener('click', () => {
        // Mettre à jour l'index avec l'index du point cliqué
        index = dot;
        updateBanner();
    });
}

// Sélection du premier point comme point sur slider en cours
const dots = dotContainer.querySelectorAll('.dot');
dots[0].classList.add('dot_selected');


// Fonction pour mettre à jour la bannière
function updateBanner() {
    bannerImage.src = './assets/images/slideshow/' + slides[index].image;
    bannerText.innerHTML = slides[index].tagLine;

    // Mettre à jour le bullet point actif
    dots.forEach((dot, dotIndex) => {
        dot.classList.remove('dot_selected');
        if (dotIndex === index) {
            dot.classList.add('dot_selected');
        }
    });
}

let index = 0;
// Fonction pour passer au slide suivant
function nextSlide() {
    index = index + 1
    if (index >= slides.length) {
        // nous mettons à jour l'index avec le premier slide (index 0)
        index = 0;
    }
    updateBanner();
}

// Fonction pour passer au slide précédent
function previousSlide() {
    index = index - 1
    if (index < 0) {
        // Mise à jour de l'index avec le dernier slide
        index = slides.length - 1;
    }
    updateBanner();
    console.log(slides[index].image)
    console.log(index)
}

// Ajouter EventListener sur la flèche gauche
const arrowLeft = banner.querySelector('.arrow_left');
arrowLeft.addEventListener('click', () => {
    console.log('Flèche gauche cliquée !');
    previousSlide();
});

// Ajouter EventListener sur la flèche droite
const arrowRight = banner.querySelector('.arrow_right');
arrowRight.addEventListener('click', () => {
    console.log('Flèche droite cliquée !');
    nextSlide();
});