require("../db/connection")

Medico=function(id,nome,crm,telefone){
	this.id=id;
	this.nome=nome;
	this.crm=crm;
	this.telefone=telefone;

	this.salvar=function(callback){
		Medico.salvar(this,callback);
	}
}

Medico.salvar=function(medico,callback){
	var query="Insert into medico(nome,crm,telefone)values('"+medico.nome+"','"+medico.crm+"',+'"+medico.telefone+"')";
		if(medico.id){
			query="Update medico set nome='"+medico.nome+"','"+medico.crm+"','"+medico.telefone+"' where id="+medico.id;
		}
	db.cnn.exec(query,callback);
}

Medico.criar=function(callback){
	var query="Create table medico(id int auto_increment primary key, nome varchar(50), crm varchar(50), telefone varchar(50))";
	db.cnn.exec(query,callback);
}

Medico.listar=function(callback){
	var query="Select * from medico";
	db.cnn.exec(query,callback);
}

Medico.excluir=function(id,callback){
	var query="delete from medico where id="+id;
	db.cnn.exec(query,callback);
}

Medico.buscaPorId=function(id,callback){
	var query="select * from medico where id="+id;
	db.cnn.exec(query,callback);
}

module.exports=Medico;
