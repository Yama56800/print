
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


const items = document.querySelectorAll('.banner-img img')
const nbSlide = items.length; 
const suivant = document.querySelector('#r')
const precedent = document.querySelector('#l')

let count = 0

let img = document.querySelector('.banner-img')








	



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

precedent.addEventListener('click', function(){  
	if(count < slides.length){
		
		img.src = "./assets/images/slideshow/" + slides[count].image
		count--
	} else{
		count = 0
	}
	
	console.log("valeur initial",img.src)

});





function dotmove(){
	let dot = document.querySelectorAll('.dot')
	
	if(count < slides.length){
		dot[count].classList.add('dot_selected')
		
		
	}
	
}

suivant.addEventListener('click', dotmove)





point1 = document.querySelector('.point1')
point1.addEventListener('click', function(){

	img.src = "./assets/images/slideshow/" + slides[count = 0].image

})

point2 = document.querySelector('.point2')
point2.addEventListener('click', function(){

	img.src = "./assets/images/slideshow/" + slides[count = 1].image

})

point3 = document.querySelector('.point3')
point3.addEventListener('click', function(){

	img.src = "./assets/images/slideshow/" + slides[count = 2].image

})

point4 = document.querySelector('.point4')
point4.addEventListener('click', function(){

	img.src = "./assets/images/slideshow/" + slides[count = 3].image

})



