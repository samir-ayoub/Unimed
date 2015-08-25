var carregarFormularioLaudo=function(callback){
	$.ajax({
		url: "/laudos/formulario"
	}).done(function(data){
		$("#cadastro").html(data);
		callback.call()
	});
}

var recarregarTabelaLaudos=function(callback){
	$.ajax({
		url: "/laudos/tabela"
	}).done(function(data){
		$("#registros").html(data);
		if(callback){
			callback.call();
		}
	});
}

	var validaLaudo=function(){
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

var excluirLaudo=function(id){
	if(confirm("Deseja realmente excluir?")){
		$.ajax({
			url: "/laudos/excluir?id="+id
		}).done(function(data){
			recarregarTabelaLaudos();
		}).fail(function( jqXHR, textStatus ) {
			alert( "Request failed: " + textStatus );
		});
	}
}

var alterarLaudo=function(id){
	$.ajax({
 		url: "/laudos/buscar?id="+id
	}).done(function(data) {
		carregarFormularioLaudo(function(){
			var laudo=data[0];
			$("#nome").val(laudo.nome)
			$("#resumo").val(laudo.resumo)
			$("#receita").val(laudo.receita)
			$("#medico").val(laudo.medico)

			$("#ok").click(function(){
				if(!validaLaudo()) return
				$.ajax({
					method: "POST",
			 		url: "/laudos/alterar",
			 		data: {
			 			nome: $("#nome").val(),
			 			resumo: $("#resumo").val(),
			 			receita: $("#receita").val(),
			 			medico: $("#medico").val()
			 		}
				}).done(function(data){
					$("#cadastro").html("");
					recarregarTabelaLaudos();
				}).fail(function( jqXHR, textStatus ) {
	  				alert( "Request failed: " + textStatus );
				});
			})			
		})
	}).fail(function( jqXHR, textStatus ) {
			alert( "Request failed: " + textStatus );
	});
}
			
var salvarLaudo=function(){
	$.ajax({
		method: "POST",
		url: "/laudos/salvar",
		data: {
			nome: $("#nome").val(),
			resumo: $("#resumo").val(),
			receita: $("#receita").val(),
			medico: $("#medico").val(),
		}
	}).done(function(data){
		$("#cadastro").html("");
		recarregarTabelaLaudos();
	}).fail(function( jqXHR, textStatus ) {
			alert( "Request failed: " + textStatus );
	});
}

$(document).ready(function(){
	$("#cadastrar_laudo").click(function(){
		carregarFormularioLaudo(function(){
			$("#ok").click(function(){
				salvarLaudo();
			})
		})
	})
})