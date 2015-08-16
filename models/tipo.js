require("../db/connection")


Tipo=function(id,tipo,descricao){
	//atributos publicos//
	this.tipo=tipo;
	this.descricao=descricao;
	this.id=id;

	//metodos publicos//
	this.cadastrar=function(callback){
		Tipo.cadastrar(this,callback);
	}
}



//metodos estaticos//
Tipo.cadastrar=function(tipo,callback){
	var query="insert into tipos(tipo,descricao)values('"+tipo.tipo+"','"+tipo.descricao+"')"
	db.cnn.exec(query,callback);
}

Tipo.criar=function(callback){
	var query="create table tipos(id int auto_increment primary key, tipo varchar(30), descricao varchar(200))";
	db.cnn.exec(query,callback);
}

Tipo.drop=function(callback){
	var query="drop table tipos;"
	db.cnn.exec(query,callback);
}

Tipo.listar=function(callback){
	var query="select * from tipos";
	db.cnn.exec(query,callback);
}

Tipo.excluir=function(id,callback){
	var query="delete from tipos where id="+id;
	db.cnn.exec(query,callback);
}

Tipo.buscaPorId=function(id,callback){
	var query="select * from tipos where id="+id;
	db.cnn.exec(query,callback);
}

Tipo.alterar=function(tipo,callback){
	var query="update tipos set tipo='"+tipo.tipo+"',descricao='"+tipo.descricao+"' where id="+tipo.id;
	db.cnn.exec(query,callback);
}

module.exports=Paciente;
