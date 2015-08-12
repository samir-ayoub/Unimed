var validarUsuario=function(){
	var mensagem="";
	if($("#nome").val()==""){
		mensagem+="Preencha o nome\n";
	}
	if($("#login").val()==""){
		mensagem+="Preencha o login\n";
	}
	if($("#senha").val()==""){
		mensagem+="Preencha a senha\n";
	}
	if(mensagem==""){
		return true;
	}
	else{
		alert(mensagem);
		return false;
	}			
}

var validarTipo=function(){
	var mensagem="";
	if($("#tipo").val()==""){
		mensagem+="Preencha o tipo\n";
	}
	if($("#descricao").val()==""){
		mensagem+="Preencha a descricao\n";
	}
	if(mensagem==""){
		return true;
	}
	else{
		alert(mensagem);
		return false;
	}
}

var validarPaciente=function(){
	var mensagem="";
	if($("#nome").val()==""){
		mensagem+="Preencha o nome\n";
	}
	if($("#sobrenome").val()==""){
		mensagem+="Preencha o sobrenome\n";
	}
	if($("#endereco").val()==""){
		mensagem+="Preencha o endereco\n";
	}
	if($("#telefone").val()==""){
	mensagem+="Preencha o telefone\n";
	}
	if($("#login").val()==""){
		mensagem+="Preencha o login\n";
	}
	if($("#senha").val()==""){
		mensagem+="Preencha a senha\n";
	}
	
	if(mensagem==""){
		return true;
	}
	else{
		alert(mensagem);
		return false;
	}			
}

var excluirPaciente=function(id){
	if(confirm("Deseja realmente excluir")){
		window.location.href='/pacientes/excluir?id='+id;
	}
}

var excluirUsuario=function(id){
	if(confirm("Deseja realmente excluir")){
		window.location.href='/usuarios/excluir?id='+id;
	}
}