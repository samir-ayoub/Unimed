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

var validarVisita=function(){
	var mensagem="";
	if($("#nome").val()==""){
		mensagem+="Preencha o nome\n";
	}
	if($("#endereco").val()==""){
		mensagem+="Preencha o endereço\n";
	}
	if($("#dia").val()==""){
		mensagem+="Preencha o dia\n";
	}
	if($("#horas").val()==""){
	mensagem+="Preencha as horas\n";
	}
	if($("#descricao").val()==""){
		mensagem+="Preencha a descrição\n";
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

var excluirTipo=function(id){
		if(confirm("Deseja realmente excluir")){
		window.location.href='/tipos/excluir?id='+id;
	}
}

var excluirVisita=function(id){
	if(confirm("Deseja realmente excluir?")){
		window.location.href='/visitas/excluir?id='+id;
	}
}

if($("#paciente").size()>0){
	$.ajax({
 		url: "/pacientes/listar"
	}).done(function(data) {
		var options=""
		for(i=0;i<data.length;i++){
			options+="<option value='"+data[i].nome+"'>"+data[i].nome+"</option>"
		}
		$("#paciente").html(options)
	});
}








