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

function slideSuivante(){
	
	

		if(count < slides.length){
			var active = document.querySelectorAll('active');

			console.log("valeur initial", slides[count].image);
			
			items[count++].classList.add('active');
			
			
		}
	
		else{
			
			items[count = 0]
			active.classList.remove('active');
		};
	
	
}




suivant.addEventListener('click', slideSuivante());


function slidePrecedent(){
	

	if(count > slides.length){
		console.log("valeur initial", slides[count].image)
		

		items[count--].classList.add('active');
	} else {
		slides[count = 0]
	}
	
}

precedent.addEventListener('click' , slidePrecedent())



let dots = document.getElementsByClassName('dot');
function showSlides(n){
	

	if(dots < slides.length){
		dots[count].classList.add('.dot_selected');
		
	}
	


}
dots.addEventListener('click', showSlides)



