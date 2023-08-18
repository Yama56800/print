
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






	// function slideSuivante(){
		
	// 	// console.log("valeur initial",img.src)
	
	// 	// img.src = slides[0]
	// 	// console.log("valeur initial",img.src)
	
	// 		// if(count < nbSlide){
	// 		// 	var active = document.querySelectorAll('active');
	
	// 		// 	console.log("valeur initial", slides[count].image);
				
	// 		// 	items[count].classList.add('active');
	// 		// 	count++
				
	// 		// }
		
	// 		// else{
	// 		// 	count = 0
	// 		// 	items[count]
	// 		// 	// items[count].style.display = 'none'
				
	// 		// 	// items.classList.remove('active');
	// 		// };
		
		
	// }


	



suivant.addEventListener('click', function(){  
	if(count < slides.length){
		
		img.src = "./assets/images/slideshow/" + slides[count].image
		count++
	} else{
		count = 0
	}
	
	console.log("valeur initial",img.src)

	

	
	
	


});



// function slidePrecedent(){
	

// 	if(count < slides.length){
		
// 		console.log("valeur initial", slides[count].image)
		

// 		// items[count].classList.add('active');
// 	} else {
// 		count = 0
// 		items[count]
// 	}
	
// }

// precedent.addEventListener('click' , slidePrecedent())



// let dots = document.getElementsByClassName('dot');
// function showSlides(n){
	

// 	if(dots < slides.length){
// 		dots[count].classList.add('.dot_selected');
		
// 	}
	


// }
// dots.addEventListener('click', showSlides)



