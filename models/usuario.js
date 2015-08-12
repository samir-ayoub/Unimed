require("../db/connection")

Usuario=function(nome,login,senha){
	//atributos publicos//
	this.nome=nome;
	this.login=login;
	this.senha=senha;

	//metodos publicos//
	this.cadastrar=function(callback){
		Usuario.cadastrar(this,callback);
	}
	this.alterar=function(callback){
		Usuario.alterar(this,callback);
	}
}

//metodos estaticos//

Usuario.cadastrar=function(usuario,callback){
	var query="insert into usuarios(nome,login,senha)values('"+usuario.nome+"','"+usuario.login+"','"+usuario.senha+"')";
	db.cnn.exec(query,callback);
}

Usuario.listar=function(callback){
	var query="select * from usuarios";
	db.cnn.exec(query,callback);
}

Usuario.excluirPorId=function(id,callback){
	var query="delete from usuarios where id="+id;
	db.cnn.exec(query,callback);
}

Usuario.buscaPorId=function(id,callback){
	var query="select * from usuarios where id="+id;
	db.cnn.exec(query,callback);
}

Usuario.alterar=function(usuario,callback){
	var query="update usuarios set nome='"+usuario.nome+"',login='"+usuario.login+"',senha='"+usuario.senha+"' where id="+usuario.id;
	db.cnn.exec(query,callback);
}


module.exports=Usuario;
