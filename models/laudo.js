require("../db/connection")

Laudo=function(id,nome,resumo,receita,medico){
	this.id=id;
	this.nome=nome;
	this.resumo=resumo;
	this.receita=receita;
	this.medico=medico;

	this.salvar=function(callback){
		Laudo.salvar(this,callback);
	}
}

Laudo.salvar=function(laudo,callback){
	var query="Insert into laudo(nome,resumo,receita,medico)values('"+laudo.nome+"','"+laudo.resumo+"','"+laudo.receita+"','"+laudo.medico+"')";
	if(laudo.id){
		query="Update laudo set nome='"+laudo.nome+"','"+laudo.resumo+"','"+laudo.receita+"','"+laudo.medico+"' where id="+laudo.id;
	}
	db.cnn.exec(query,callback);
}

Laudo.criar=function(callback){
	var query="Create table laudo(id int auto_increment primary key, nome varchar(50), resumo varchar(50), receita varchar(50), medico varchar(50))";
	db.cnn.exec(query,callback);
}

Laudo.listar=function(callback){
	var query="Select * from laudo";
	db.cnn.exec(query,callback);
}

Laudo.excluir=function(id,callback){
	var query="delete from laudo where id="+id;
	db.cnn.exec(query,callback);
}

Laudo.buscaPorId=function(id,callback){
	var query="select * from laudo where id="+id;
	db.cnn.exec(query,callback);
}

module.exports=Laudo;
