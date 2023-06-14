
// SLIDER PARA LAS LANDINGS

let itemLandingView = 3, itemPeekAfter = 175;

window.addEventListener("resize", itemLandingResize);
function itemLandingResize(){
	if(window.innerWidth <= "576"){
		itemLandingView = 1;
		itemPeekAfter = 50;
	} 
	
	else if(window.innerWidth > "2099"){
		itemLandingView = 3;
		itemPeekAfter = 50;
	}
	
	else if(window.innerWidth > "1999"){
		itemLandingView = 4;
		itemPeekAfter = 75;
	}
	
	else if(window.innerWidth > "1799"){
		itemLandingView = 3;
		itemPeekAfter = 100;
	}
	
	else if(window.innerWidth > "1399"){
		itemLandingView = 3;
		itemPeekAfter = 75;
	}
	
	else if(window.innerWidth > "1199"){
		itemLandingView = 2;
		itemPeekAfter = 125;
	}
	
	else if(window.innerWidth > "992"){
		itemLandingView = 2;
		itemPeekAfter = 50;
	} 
	 
	else if(window.innerWidth > "767"){
		itemLandingView = 2;
		itemPeekAfter = 100;
	} 
	
	else if(window.innerWidth > "576"){
		itemLandingView = 1;
		itemPeekAfter = 250;
	}  
	

	

	landingGlide();
}


//Esta funcion corre el Glide.
function landingGlide(){
new Glide('.glide.carruselLanding', {
	type: 'slider',
	startAt: 0, 
	perView: itemLandingView,
	gap: 10,
	peek:{ before: 0, after: itemPeekAfter },
	bound: true
}).mount();
}

//Esta funcion debe correr sola para que el "Glide" inicie
landingGlide();
itemLandingResize();