

// SLIDER PARA LA SECCIÓN DE NOTICIAS EN LA PÁGINA DE INICIO


//Te permite decidir cuantos objetos pueden presentarse en el Carousel.
let notView = 2;

window.addEventListener("resize", noticiasRecientesSize);
function noticiasRecientesSize(){
	if(window.innerWidth <= "1199"){
		notView = 1;
	} 
	else if(window.innerWidth > "1199"){
		notView = 2;
	} 
	notGlide();
}

function notGlide(){
	new Glide('.glide.noticiasRecientes', {
	type: 'slider',
	startAt: 0,
	perView: notView,
	gap: 0,
	bound: true
}).mount()
}

//Esta funcion debe correr sola para que el "Glide" inicie
notGlide();
noticiasRecientesSize();