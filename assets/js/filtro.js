

/* FILTRO */

function iconoPregunta(){
	document.getElementById("respuesta").classList.toggle("mostrar");
}

$(document).ready(function(){
	//FILTRO DE CAPACITACIONES
	$("#filtroPalabrasClaves").on("keyup", function() {
		var value = $(this).val().toLowerCase();
		$("#contenedorRespuesta .tutoria").filter(function() {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	});
	
	//BUSCADOR DE PREGUNTAS FRECUENTES
	$("#filtroBusqueda").on("keyup", function() {
		var value = $(this).val().toLowerCase();
		$("#contenedorInformacion .informacionColpaso").filter(function() {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	});
});

























