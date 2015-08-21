var excluirMedico=function(id){
	$.ajax({
 		url: "/medicos/excluir?id="+id
	}).done(function(data) {
		recarregarTabelaMedicos();
	}).fail(function( jqXHR, textStatus ) {
		alert( "Request failed: " + textStatus );
	});
}

var carregarFormularioMedico=function(callback){
	$.ajax({
 		url: "/medicos/formulario"
	}).done(function(data) {
		$("#cadastro").html(data);
		callback.call()
	});
}

var recarregarTabelaMedicos=function(){
	$.ajax({
 		url: "/medicos/tabela"
	}).done(function(data) {
		$("#registros").html(data);
	});
}

var salvarMedico=function(){
	$.ajax({
		method: "POST",
 		url: "/medicos/salvar",
 		data: {
 			nome: $("#nome").val(),
 			id: $("#id").val(),
 			crm: $("#crm").val(),
 			telefone: $("#telefone").val()
 		}
	}).done(function(data){
		$("#cadastro").html("");
		recarregarTabelaMedicos();
	}).fail(function( jqXHR, textStatus ) {
			alert( "Request failed: " + textStatus );
	});
}

$(document).ready(function(){
	$("#cadastrar_medico").click(function(){
		carregarFormularioMedico(function(){
			$("#ok").click(function(){
				salvarMedico();
			})
		});
	})
})