
// SLIDER PARA CONTACTOS DENTRO DE LAS LANDING

let itemContactosView = 2;

window.addEventListener("resize", itemContactosResize);
function itemContactosResize(){
	if(window.innerWidth <= "576"){
		itemContactosView = 1;
	} 
	
	else if(window.innerWidth > "1199"){
		itemContactosView = 2;
	}
	
	else if(window.innerWidth > "992"){
		itemContactosView = 1;
	}
	
	else if(window.innerWidth > "767"){
		itemContactosView = 2;
	}
	
	

	

	ContactosGlide();
}


//Esta funcion corre el Glide.
function ContactosGlide(){
new Glide('.glide.carruselContactos', {
	type: 'slider',
	startAt: 0, 
	perView: itemContactosView,
	gap: 10,
	bound: true
}).mount();
}

//Esta funcion debe correr sola para que el "Glide" inicie
ContactosGlide();
itemContactosResize();