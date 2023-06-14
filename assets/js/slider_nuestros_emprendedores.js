// SLIDER PARA LA SECCIÓN DE EMPRENDEDORES EN LA PÁGINA DE INICIO


//Te permite decidir cuantos objetos pueden presentarse en el Carousel.
let gruposView = 3;

window.addEventListener("resize", secEmprendedoresSize);
function secEmprendedoresSize(){
	//Si es menor a 767px, muestra 1 solo objeto y presenta el Glide de nuevo
	if(window.innerWidth <= "767"){
		gruposView = 1;
		//En caso de que arriba haya pasado, este retorna el codigo a su funcion original;
	} 

	else if(window.innerWidth > "1599"){
		gruposView = 3;
	} 

	else if(window.innerWidth > "767"){
		gruposView = 2;
	} 
	gruposGlide();
}

//Esta funcion corre el Glide.
function gruposGlide(){
	new Glide('.glide.carruselEquipos', {
		type: 'slider',
		startAt: 0, 
		perView: gruposView,
		bound: true
	}).mount();
}

//Esta funcion debe correr sola para que el "Glide" inicie
gruposGlide();
secEmprendedoresSize();