/*console.log("Olá mundo");
console.log(document);
console.log(titulo);
console.log(titulo.textContent);*/

var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");
for(var i = 0; i < pacientes.length; i++){
	console.log(pacientes[i]);
	var paciente = pacientes[i];
	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;
	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;
	var tdImc = paciente.querySelector(".info-imc");

	/*console.log(tdPeso); //td que tem o peso
	console.log(paciente); //tr
	console.log(peso); //100
	console.log(tdAltura); //td que tem a altura
	console.log(altura); //100*/

	var pesoV = validaPeso(peso);
	var alturaV = validaAltura(altura);

	if(!pesoV){
		console.log("Peso inválido");
		pesoV = false;
		tdImc.textContent ="Peso inválido";
		paciente.classList.add("paciente-invalido");
	}

	if(!alturaV){
		console.log("Altura inválida");
		alturaV = false;
		tdImc.textContent ="Altura inválida";
		paciente.classList.add("paciente-invalido");
	}

	if(alturaV && pesoV){
		var imc = calculaImc(peso,altura);
		tdImc.textContent = imc;
	}
}


function validaPeso(peso){
	if(peso >= 0 && peso <= 1000){
		return true;
	}
	else{
		return false;
	}
}

function validaAltura(altura){
	if(altura >= 0 && altura <= 3.0){
		return true;
	}
	else{
		return false;
	}
}

function calculaImc(peso,altura){
	var imc = 0;
	imc = peso / (altura * altura);
	return imc.toFixed(2);
}

/*titulo.addEventListener("click", function(){ //nomeada ou anonima, passa o nome da function ou cria no addEventListener mesmo
	console.log("anonima");
});

function mostraMensagem(){
	console.log("Olá eu fui clicado!");
}*/
