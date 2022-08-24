
var entrada = document.querySelector(".entrada");
var resultado = document.querySelector(".resultado");

function btnCripto(){

	var codificarTexto = codificar(entrada.value);
	resultado.value = codificarTexto

}

function codificar(stringCodificada){

	var letras = [["e", "enter"],["i", "imes"],["a", "ai"],["o","ober"],["u","ufat"]];
	stringCodificada = stringCodificada.toLowerCase();
	for (var i = 0; i < letras.length; i++) {
		if(stringCodificada.includes(letras[i][0])) {
			stringCodificada = stringCodificada.replaceAll(letras[i][0], letras[i][1]);

		}
	}
	return stringCodificada;	   
}
function btnDecode(){
	var decodificadoTexto = decodificar(entrada.value);
	resultado.value = decodificadoTexto
}

function decodificar(stringDecodificado){

	var letras = [["e", "enter"],["i", "imes"],["a", "ai"],["o","ober"],["u","ufat"]];
	stringDecodificado = stringDecodificado.toLowerCase();

	for (var i = 0; i < letras.length; i++) {
		if(stringDecodificado.includes(letras[i][1])) {
			stringDecodificado = stringDecodificado.replaceAll(letras[i][1], letras[i][0]);

		}
	}
	return stringDecodificado;	  
}
function btnCopy(){
	var conteudo = document.querySelector(".resultado");
	conteudo.select();
	document.execCommand(".copiar");
	alert("Copiou!");
}
