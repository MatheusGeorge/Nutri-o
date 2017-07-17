var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click",function(event){
	event.preventDefault(); // previni o comportamento defult do botão
	var form = document.querySelector("#form-adiciona");
	//Entraindo o paciente do form
	var paciente = obtemPaciente(form);

	//valida paciente
	var erros = validaPaciente(paciente);
	console.log(erros);
	if(erros.length > 0){
		exibeMensagensDeErro(erros);
		return;
	}
	
	adicionaPacienteTabela(paciente);

	
	console.log(pacienteTr);

	form.reset();
	var msg = document.querySelector("#mensagens-erro");
	msg.innerHTML = "";

});

function exibeMensagensDeErro(erros){
	var ul = document.querySelector("#mensagens-erro");
	ul.innerHTML = "";
	erros.forEach(function(erro){
		var li = document.createElement("li");
		li.textContent = erro;
		ul.appendChild(li);
	});
}

function adicionaPacienteTabela(paciente){
	var pacienteTr = montaTr(paciente);
	var tabela = document.querySelector("#tabela-pacientes");
	tabela.appendChild(pacienteTr);
}

function obtemPaciente(form){

	var paciente = {
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: calculaImc(form.peso.value, form.altura.value)
	}

	return paciente;
}

function montaTr(paciente){
	var pacienteTr = document.createElement("tr");
	pacienteTr.classList.add("paciente");

	pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
	pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
	pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
	pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
	pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

	return pacienteTr
}

function montaTd(dado,classe){
	var td = document.createElement("td");
	td.textContent = dado;
	td.classList.add(classe);
	return td;
}

function validaPaciente(paciente){
	var erros = [];
	if(!validaPeso(paciente.peso)) erros.push("Peso é inválido");
	if(!validaAltura(paciente.altura)) erros.push("Altura é inválida");
	if(paciente.nome.length == 0) erros.push("Nome vazio");
	if(paciente.gordura.length == 0) erros.push("Gordura vazia");
	if(paciente.peso.length == 0) erros.push("Peso vazio");
	if(paciente.altura.length == 0) erros.push("Altura vazia");
	return erros;
}


//console.log(imc);