require("../db/connection")

Visita=function(id,nome,endereco,dia,horas,descricao){
	//atributos publiocos//
	this.nome=nome;
	this.endereco=endereco;
	this.dia=dia;
	this.horas=horas;
	this.descricao=descricao;
	this.id=id;

	// metodos publicos //

	this.cadastrar=function(callback){
		Visita.cadastrar(this,callback);
	}

}

//metodos estaticos//
Visita.cadastrar=function(visita,callback){
	var query="insert into visitas(nome,endereco,dia,horas,descricao)values('"+visita.nome+"','"+visita.endereco+"','"+visita.dia+"','"+visita.horas+"','"+visita.descricao+"')";
	db.cnn.exec(query,callback);
}

Visita.listar=function(callback){
	var query="select * from visitas";
	db.cnn.exec(query,callback);
}

Visita.criar=function(callback){
	var query="create table visitas(id int auto_increment primary key,nome varchar(30),endereco varchar(200),dia datetime, horas int, descricao varchar(255))";
	db.cnn.exec(query,callback);

}

Visita.excluir=function(id,callback){
	var query="delete from visitas where id="+id;
	db.cnn.exec(query,callback);
}

Visita.buscaPorId=function(id,callback){
	var query="select * from visitas where id="+id;
	db.cnn.exec(query,callback);
}

Visita.alterar=function(visita,callback){
	var query="update visitas set nome='"+visita.nome+"', endereco='"+visita.endereco+"', dia='"+visita.dia+"', horas='"+visita.horas+"', descricao='"+visita.descricao+"' where id="+visita.id;
	db.cnn.exec(query,callback);
}


module.exports=Usuario;
