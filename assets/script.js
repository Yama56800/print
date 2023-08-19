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
const nbSlide = items.length; 
const suivant = document.querySelector('#r')
const precedent = document.querySelector('#l')

let count = 1

let img = document.querySelector('.banner-img')


//fleche suivante
suivant.addEventListener('click', function(){  
	if(count < slides.length){

		let dot = document.querySelectorAll('.dot')
		
		dot[count].classList.remove('dot_selected');

		
		img.src = "./assets/images/slideshow/" + slides[count].image
		
		count++
	} else{
		count = 0
	}
	
	console.log("valeur initial",img.src)

});
// fleche precedente
precedent.addEventListener('click', function(){  
	if(count < slides.length){
		
		img.src = "./assets/images/slideshow/" + slides[count].image
		count--
	} else{
		count = 0
	}
	
	console.log("valeur initial",img.src)

});



// ajoute le dot coché
let dot = document.querySelectorAll('.dot')
function dotmove(){
	
	
	if(count < slides.length){
		
		dot[count].classList.add('dot_selected')
		
		
	} else{
		count = 0
	}
	
}

suivant.addEventListener('click', dotmove)




// code qui permet que le dot sois coché au clic
point1 = document.querySelector('.point1')
point1.addEventListener('click', function(){
	
	img.src = "./assets/images/slideshow/" + slides[count = 0].image
dot[count].classList.add('dot_selected')
})

point2 = document.querySelector('.point2')
point2.addEventListener('click', function(){
	
	img.src = "./assets/images/slideshow/" + slides[count = 1].image
dot[count].classList.add('dot_selected')
})

point3 = document.querySelector('.point3')
point3.addEventListener('click', function(){

	img.src = "./assets/images/slideshow/" + slides[count = 2].image
	dot[count].classList.add('dot_selected')
})

point4 = document.querySelector('.point4')
point4.addEventListener('click', function(){

	img.src = "./assets/images/slideshow/" + slides[count = 3].image
	dot[count].classList.add('dot_selected')
})


//code pour que ca reset les dot avec la fleche suivante
document.addEventListener('click', function() {
    // Code à exécuter lorsque la page est chargée
    dot[count.length].classList.remove('dot_selected');
});


