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
];

// Sélectionne le conteneur de la bannière
const banner = document.getElementById("banner");
// Sélectionne l'image de la bannière
const bannerImage = banner.querySelector(".banner-img");
// Sélectionne le paragraphe de la bannière
const bannerText = banner.querySelector("p");
// Sélectionne le conteneur des points
const dotContainer = banner.querySelector(".dots");

// Ajout EventListener sur la flèche gauche
const arrowLeft = banner.querySelector(".arrow_left");
arrowLeft.addEventListener("click", () => {
  console.log("Flèche gauche cliquée !");
  updateSlide(-1);
});

// Ajout EventListener sur la flèche droite
const arrowRight = banner.querySelector(".arrow_right");
arrowRight.addEventListener("click", () => {
  console.log("Flèche droite cliquée !");
  updateSlide(1);
});


const dots = slides.map(() => {
  const span = document.createElement("span");
  span.classList.add("dot");
  dotContainer.appendChild(span);
  return span;
});

// Fonction pour mettre à jour la bannière
// Fonction pour passer au slide suivant
let index = 0;

function updateSlide(offset) {
  index = (index + offset + slides.length) % slides.length;
  const slide = slides[index];
  bannerImage.src = `./assets/images/slideshow/${slide.image}`;
  bannerText.innerHTML = slide.tagLine;

  // Mettre à jour le bullet point actif
  dots.forEach((dot, dotIndex) => {
    dot.classList.toggle("dot_selected", dotIndex === index);
  });
}

updateSlide(0);