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

	var pesoV = true;
	var alturaV = true;

	if(peso <= 0 || peso >= 1000){
		console.log("Peso inválido");
		pesoV = false;
		tdImc.textContent ="Peso inválido";
		paciente.classList.add("paciente-invalido");
	}

	if(altura <= 0 || altura >= 3.00){
		console.log("Altura inválida");
		alturaV = false;
		tdImc.textContent ="Altura inválida";
		paciente.classList.add("paciente-invalido");
	}

	if(alturaV && pesoV){
		var imc = peso / (altura * altura);
		tdImc.textContent = imc.toFixed(2);
	}
}

//console.log(imc);