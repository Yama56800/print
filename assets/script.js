// tableau des images
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
];

// objets
const items = document.querySelectorAll('.banner-img img')
const suivant = document.querySelector('#r')
const precedent = document.querySelector('#l')
let count = 0
let img = document.querySelector('.banner-img')
let text = document.querySelector('#banner p')
let dot = document.querySelectorAll('.dot')


//afficher
function afficherSlide() {
	text.innerHTML = slides[count].tagLine;
	img.src = "./assets/images/slideshow/" + slides[count].image;
	dot[count].classList.add('dot_selected');
  }
  
  // fleche suivante
  suivant.addEventListener('click', function () {
	dot[count].classList.remove('dot_selected');
	if (count < slides.length -1) {
	  count++;
	} else {
	  count = 0;
	}
	afficherSlide();
	console.log("valeur", text);
	console.log("valeur initial", img.src);
  });
  
  // fleche precedente
  precedent.addEventListener('click', function () {
	dot[count].classList.remove('dot_selected');
	if (count > 0) {
	  count--;
	} else {
	  count = slides.length -1;
	}
	afficherSlide();
	console.log("valeur initial", img.src);
  });
  
  // ajoute le dot coché au clic du dot
 
  for (let i = 0; i < dot.length; i++) {
	dot[i].addEventListener('click', function() {
	  dot[count].classList.remove('dot_selected');
	  count = i;
	  afficherSlide();
	  console.log("valeur initial", img.src);
	});
  }
  

  afficherSlide();