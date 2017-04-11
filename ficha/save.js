// compress and uncompress the card
u('.toggle, h2, label.select').on('click', function(){
	u(this).parent().toggleClass("compressed");
})

// save the input value
u('.card input').on('keyup', function(){
	if (u(this).parent().parent().is('.qualidades')) {
		u('.add').addClass('add-active')
		u('body').addClass('with-add')
		console.log("oi")
	}
	var id = u(this).attr("id");
	var valor = document.getElementById(id).value;
	localStorage.setItem(id, valor);
})

// add experience points
u('.mais').on('click', function(){
	var valor = u(this).parent().children('.ponto').text();
	var valor = parseInt(valor) + 1;
	u(this).parent().children('.ponto').text(valor);
})
//subtract experience points
u('.menos').on('click', function(){
	var valor = u(this).parent().children('.ponto').text();
	var valor = parseInt(valor) - 1;
	// if (valor < 1) {
		// u(this).parent().children('.ponto').text("0");
	// } else {
		u(this).parent().children('.ponto').text(valor);
	// }
})
// save experience points
u('.menos, .mais').on('click', function(){
	var id = u(this).parent().children('.ponto').attr("id");
	var valor = u(this).parent().children('.ponto').text();
	localStorage.setItem(id, valor);
})

//selecting option
u('p.option').on('click',function(){
	//visually activating the option
	u(this).toggleClass('chosen');
	//Showing the chosen option below
	var option = u(this).data('option')
	u('#'+option).parent().parent().parent().toggleClass('hide')
	//saving choices
	var id = u(this).attr("id");
	if (u(this).is('.chosen')) {
		localStorage.setItem(id, "chosen");	
	} else {
	localStorage.setItem(id, "");
	}
})

// adding quality and defects
u('.add').on('click', function(){
	u('.qualidades').append("<div class='pontos'><h3>Defeito</h3><div class='counter'><button class='menos'>-</button><span class='ponto' id='id'>0</span><button class='mais'>+</button></div></div>")
})
// div.pontos
// 	h3 Defeito
// 	.counter
// 		button.menos -
// 		span.ponto(id='id') 0
// 		button.mais +


// fill the field with the saved values
function fill() {
	// fill the text fields
	u('.card').find('input').each(function(node, i){
		var id = u(node).attr("id");
		var valor = localStorage.getItem(id);
		document.getElementById(id).value = valor;
	})

	// page title = character title
	var personagem = localStorage.getItem("personagem");
	if (personagem == "" || personagem == "null") {
		u('#charTitle').text("ficha de personagem");
	} else {
		u('#charTitle').text("ficha de "+personagem);
	}

	// fill experience points
	u('.card').find('.ponto').each(function(node, i){
		var id = u(node).attr("id");
		var valor = localStorage.getItem(id);
		if (valor == null || valor == "NaN") {
			document.getElementById(id).innerHTML = "0";
		} else {
			document.getElementById(id).innerHTML = valor;
		}
	})

	// fill advantege points
	u('.vantagens').find('.option').each(function(node, i){
		var id = u(node).attr("id");
		var valor = localStorage.getItem(id);
		if (valor == null || valor == "NaN" || valor == "") {
		} else {
			u(node).toggleClass(valor)
			var option = u(node).data('option')
			u('#'+option).parent().parent().parent().toggleClass('hide')
		}
	})
}
