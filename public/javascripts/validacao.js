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

$(document).ready(function(){
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

	var tabela=function(){
		var html= "<table>";
		html+="<tr><td>Nome</td><td><input type='text' name='nome' id='nome'></td></tr>";
		html+="<tr><td>Status</td><td><input type='text' name='status' id='status'></td></tr>";
		html+="<tr><td collspan='2'><input type='button' value='ok' id='ok'></td></tr>";
		html+="<tr><td collspan='2'><input type='hidden' name='id' id='id'></td></tr>";
		html+="</table>";
		$("#cadastro").html(html);
	}
	
	var valida=function(){
		if($("#nome").val()==""){
			alert("preencha o nome");
			return false;
		}
		if($("#status").val()==""){
			alert("preencha o status");
			return false;
		}		
		return true
	}

	$("#cadastrar_aparelho").click(function(){
		tabela();
		$("#ok").click(function(){
			if(!valida()) return

			$.ajax({
				method: "POST",
		 		url: "/aparelhos/cadastro",
		 		data: {
		 			nome: $("#nome").val(),
		 			status: $("#status").val()
		 		}
			}).done(function(data){
				$("#cadastro").html("");
				carregarTabela();
			}).fail(function( jqXHR, textStatus ) {
  				alert( "Request failed: " + textStatus );
			});
		})
	})

	var carregarTabela =function(){
		$.ajax({
	 		url: "/aparelhos/tabela"
		}).done(function(data) {

			$("#registros").html(data)
			acoesTabela();
		});
	}

	var acoesTabela=function(){
		$("#tabela_aparelhos #excluir").click(function(){
			if(confirm("deseja realmente apagar?")){
				var id=$(this).data("id")
				$.ajax({
			 		url: "/aparelhos/excluir?id="+id
				}).done(function(data) {
					carregarTabela();
				}).fail(function( jqXHR, textStatus ) {
	  				alert( "Request failed: " + textStatus );
				});
			}
			
		})

		$("#tabela_aparelhos #alterar").click(function(){
			var id=$(this).data("id")
			$.ajax({
		 		url: "/aparelhos/buscar?id="+id
			}).done(function(data) {
				tabela()
				var aparelho=data[0];
				$("#nome").val(aparelho.nome)
				$("#status").val(aparelho.status)
				$("#id").val(aparelho.id)

				$("#ok").click(function(){
					if(!valida()) return
					$.ajax({
						method: "POST",
				 		url: "/aparelhos/alterar",
				 		data: {
				 			nome: $("#nome").val(),
				 			id: $("#id").val(),
				 			status: $("#status").val()
				 		}
					}).done(function(data){
						$("#cadastro").html("");
						carregarTabela();
					}).fail(function( jqXHR, textStatus ) {
		  				alert( "Request failed: " + textStatus );
					});
				})
			}).fail(function( jqXHR, textStatus ) {
  				alert( "Request failed: " + textStatus );
			});
			
		})
	}
	acoesTabela();

})










