require("../db/connection")


Tipo=function(tipo,descricao){
	//atributos publicos//
	this.tipo=tipo;
	this.descricao=descricao;

	//metodos publicos//
	this.cadastrar=function(callback){
		Tipo.cadastrar(this,callback);
	}
}



//metodos estaticos//
Tipo.cadastrar=function(tipo,callback){
	var query="insert into tipos(tipo,descricao)values('"+tipo+"','"+descricao+"')"
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


module.exports=Paciente;
