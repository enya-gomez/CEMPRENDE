// SLIDER PARA LA PAGINA INTERNA DEL CENTRO DE EMPRENDIMIENTO


//Te permite decidir cuantos objetos pueden presentarse en el Carousel.
let miembrosView = 4;

window.addEventListener("resize", miembrosResize);
function miembrosResize(){
	//Si es menor a 767px, muestra 1 solo objeto y presenta el Glide de nuevo
	if(window.innerWidth <= "576"){
		miembrosView = 1
	} 

	else if(window.innerWidth > "1199"){
		miembrosView = 4;
	} 

	else if(window.innerWidth > "992"){
		miembrosView = 3;
	} 

	else if(window.innerWidth > "576"){
		miembrosView = 2;
	} 

	miembrosGlide();
}

//Esta funcion corre el Glide.
function miembrosGlide(){
	new Glide('.glide.carruselMiembros', {
		type: 'slider',
		startAt: 0,
		perView: miembrosView,
		gap: 20,
		bound: true
	}).mount()
}

//Esta funcion debe correr sola para que el "Glide" inicie
miembrosGlide();
miembrosResize();