require("../db/connection")

Aparelho=function(id,nome,status){
	this.id=id;
	this.nome=nome;
	this.status=status;

	this.salvar=function(callback){
		Aparelho.salvar(this,callback);
	}


}
Aparelho.salvar=function(aparelho,callback){
	var query="insert into aparelhos(nome,status)values('"+aparelho.nome+"','"+aparelho.status+"')";
	if(aparelho.id){
		query="update aparelhos set nome='"+aparelho.nome+"',status='"+aparelho.status+"' where id="+aparelho.id;
	}
	db.cnn.exec(query,callback);
}

Aparelho.listar=function(callback){
	var query="select * from aparelhos";
	db.cnn.exec(query,callback);
}

Aparelho.excluir=function(id,callback){
	var query="delete from aparelhos where id="+id;
	db.cnn.exec(query,callback);
}

Aparelho.buscaPorId=function(id,callback){
	var query="select * from aparelhos where id="+id;
	db.cnn.exec(query,callback);
}

Aparelho.criar=function(callback){
	var query="create table aparelhos(id int auto_increment primary key, nome varchar(50), status varchar(100))";
	db.cnn.exec(query,callback);
}

module.exports=Aparelho;
