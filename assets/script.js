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
const nbSlide = slides.length; 
const suivant = document.querySelector('#r')
const precedent = document.querySelector('#l')

let count = 0

let img = document.querySelector('.banner-img')
let text = document.querySelector('#banner p')
let dot = document.querySelectorAll('.dot')




function next(){  
	if(count < slides.length){
		
		text.innerHTML = slides[count].tagLine;
		img.src = "./assets/images/slideshow/" + slides[count].image; 
		dot[count].classList.remove('dot_selected');
		count++;
		dotmove(count = 0);
	
	} else{
		count = 0
	}
	console.log("valeur",text)
	console.log("valeur initial",img.src)
	
}


//fleche suivante
suivant.addEventListener('click', function next(){  
	if(count < slides.length){
		dot[count].classList.remove('dot_selected');
		count++;
		dotmove();
		text.innerHTML = slides[count].tagLine;
		img.src = "./assets/images/slideshow/" + slides[count].image; 
		
		
		
	
	} else{
		count = 0
		
	}
	console.log("valeur",text)
	console.log("valeur initial",img.src)
	
} );



document.addEventListener('DOMContentLoaded', function() {
	
    next();
	 
});





// fleche precedente
precedent.addEventListener('click', function(){  
	if(count < slides.length){
		dot[count].classList.remove('dot_selected');
		if (count == 0){
			count = slides.length -1;
		}
		else{
			count --;
		}
		dotmove();
		text.innerHTML = slides[count].tagLine;
		img.src = "./assets/images/slideshow/" + slides[count].image; 
	} 
	
	console.log("valeur initial",img.src)

});



// ajoute le dot coché

function dotmove(){
	
	
	if(count < slides.length){
		console.log(count,dot)
		dot[count].classList.add('dot_selected')
		
		
	} else{
		count = 0
	}
	
}

suivant.addEventListener('click', dotmove)





// code qui permet que le dot sois coché au clic
point1 = document.querySelector('.point1')
point1.addEventListener('click', function(){
	dot[count].classList.remove('dot_selected');
	img.src = "./assets/images/slideshow/" + slides[count = 0].image;
	dot[count].classList.add('dot_selected');
	text.innerHTML = slides[count].tagLine;
})

point2 = document.querySelector('.point2')
point2.addEventListener('click', function(){
	dot[count].classList.remove('dot_selected');
	img.src = "./assets/images/slideshow/" + slides[count = 1].image;
	dot[count].classList.add('dot_selected');
	text.innerHTML = slides[count].tagLine;
})

point3 = document.querySelector('.point3')
point3.addEventListener('click', function(){
	dot[count].classList.remove('dot_selected');
	img.src = "./assets/images/slideshow/" + slides[count = 2].image;
	dot[count].classList.add('dot_selected');
	text.innerHTML = slides[count].tagLine;
})

point4 = document.querySelector('.point4')
point4.addEventListener('click', function(){
	dot[count].classList.remove('dot_selected');
	img.src = "./assets/images/slideshow/" + slides[count = 3].image;
	dot[count].classList.add('dot_selected');
	text.innerHTML = slides[count].tagLine;
})


//code pour que ca reset les dot avec la fleche suivante
document.addEventListener('click', function() {
    // Code à exécuter lorsque la page est chargée
   
});


