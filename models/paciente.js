require("../db/connection")

Paciente=function(nome,sobrenome,endereco,telefone,login,senha){
	//atributos publicos//
	this.nome=nome;
	this.sobrenome=sobrenome;
	this.endereco=endereco;
	this.telefone=telefone;
	this.login=login;
	this.senha=senha;

	//metodos publicos//
	this.cadastrar=function(callback){
		Paciente.cadastrar(this,callback);
	}
}

//metodos estaticos//

Paciente.listar=function(callback){
	var query="select * from pacientes";
	db.cnn.exec(query,callback);
}

Paciente.cadastrar=function(paciente,callback){
	var query="insert into pacientes(nome,sobrenome,endereco,telefone,login,senha)values('"+paciente.nome+"','"+paciente.sobrenome+"','"+paciente.endereco+"','"+paciente.telefone+"','"+paciente.login+"','"+paciente.senha+"')";
	db.cnn.exec(query,callback);
}

Paciente.criar=function(callback){
	var query="create table pacientes(id int auto_increment primary key, nome varchar(30), sobrenome varchar(50), endereco varchar(200), telefone varchar(12), login varchar(12), senha varchar(12));"
	db.cnn.exec(query,callback);
}

Paciente.excluirPorId=function(id,callback){
	var query="delete from pacientes where id="+id;
	db.cnn.exec(query,callback);
}

Paciente.drop=function(callback){
	var query="drop table pacientes;"
	db.cnn.exec(query,callback);
}
Paciente.buscaPorId=function(id,callback){
	var query="select * from pacientes where id="+id;
	db.cnn.exec(query,callback);
}

Paciente.alterar=function(paciente,callback){
	var query="update pacientes set nome='"+paciente.nome+"','"+paciente.sobrenome+"','"+paciente.endereco+"','"+paciente.telefone+"','"+paciente.login+"','"+paciente.senha+" where id="+paciente.id;
	db.cnn.exec(query,callback);
}


module.exports=Paciente;
