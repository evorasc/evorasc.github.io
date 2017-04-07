// compress and uncompress the card
u('.toggle').on('click', function(){
	u(this).parent().toggleClass("compressed");
})

// show save button when the field is changed
u('.card input').on('keyup', function(){
	u('.save').addClass('save-active')
	u('body').addClass('with-save')
})

// save value and hide save button
u('.save').on('click', function(){
	u('.card').find('input').each(function(node, i){
		var id = u(node).attr("id");
		var valor = document.getElementById(id).value;
		console.log(id)
		localStorage.setItem(id, valor);
	})
	u('.save').removeClass('save-active')
	u('body').removeClass('with-save')
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
	if (valor < 1) {
		u(this).parent().children('.ponto').text("0");
	} else {
		u(this).parent().children('.ponto').text(valor);
	}
})
// save experience points
u('.menos, .mais').on('click', function(){
	var id = u(this).parent().children('.ponto').attr("id");
	var valor = u(this).parent().children('.ponto').text();
	localStorage.setItem(id, valor);
})

// save the value of each experience


// fill the field with the saved values
function fill() {
	// fill the text fields
	u('.card').find('input').each(function(node, i){
		var id = u(node).attr("id");
		var valor = localStorage.getItem(id);
		document.getElementById(id).value = valor;
	})
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
}
