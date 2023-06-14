// SLIDER PARA LA LISTA DE PARTICIPANTES


let participantesView = 3;

window.addEventListener("resize", secParticipantesSize);
function secParticipantesSize(){
	//Si es menor a 767px, muestra 1 solo objeto y presenta el Glide de nuevo
	if(window.innerWidth <= "576"){
		participantesView = 1;
		//En caso de que arriba haya pasado, este retorna el codigo a su funcion original;
	} 

	else if(window.innerWidth > "992"){
		participantesView = 3;
	} 

	else if(window.innerWidth > "767"){
		participantesView = 2;
	} 
	participantesGlide();
}

//Esta funcion corre el Glide.
function participantesGlide(){
	new Glide('.glide.carruselParticipantes', {
		type: 'slider',
		startAt: 0, 
		perView: participantesView,
		gap: 10,
		bound: true
	}).mount();
}

//Esta funcion debe correr sola para que el "Glide" inicie
participantesGlide();
secParticipantesSize();
