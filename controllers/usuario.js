var express = require('express');
var router = express.Router();
require("../models/usuario");

router.get('/',function(req,res,next){
	Usuario.listar(function(rows,err){
		if(err){
			res.send("Erro ao buscar :"+err.message,500);
		}
		else{
			res.render('usuarios/index', {registros:rows});
		}
	});
});

router.get('/cadastro', function(req, res, next) {
  res.render('usuarios/cadastro');
});

router.post('/cadastrar', function(req,res,next){
	var usuario=new Usuario();
	usuario.nome=req.param("nome");
	usuario.login=req.param("login");
	usuario.senha=req.param("senha");
	usuario.cadastrar(function(rows,err){
		if(err){
			res.send("erro ao atualizar :"+err.message,500);
		}
		else{
			res.redirect("/usuarios");
		}
	});
});

router.get('/excluir', function(req,res,next){
	Usuario.excluirPorId(parseInt(req.param('id')),function(rows,err){
		if(err){
			res.send("erro ao excluir :"+err.message,500);
		}
		else{
			res.redirect("/usuarios");
		}
	});
});

router.get('/alterar', function(req,res,next){
	Usuario.buscaPorId(req.param("id"),function(rows,err){
		if(err){
			res.send("erro ao buscar Id"+err.message,500);
		}
		else{
			res.render('usuarios/alterar_usuario',{usuario:rows[0]});
		}
	});
});

router.post('/update', function(req,res,next){
	usuario={
		id:req.param("id"),
		nome:req.param("nome"),
		login:req.param("login"),
		senha:req.param("senha")
	}
	Usuario.alterar(usuario,function(rows,err){
				if(err){
			res.send("erro ao atualizar"+err.message,500);
		}
		else{
			res.redirect("/usuarios");
		}
	});
});

module.exports = router;

