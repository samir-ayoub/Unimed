var express = require('express');
var router = express.Router();
require("../models/paciente");

router.get('/',function(req,res,next){
	Paciente.listar(function(rows,err){
		if(err){
			res.send("Erro ao buscar :"+err.message,500);
		}
		else{
			res.render('pacientes/index', {registros:rows});
		}
	});
});

router.get('/cadastro', function(req, res, next) {
  res.render('pacientes/cadastro');
});

router.post('/cadastrar', function(req,res,next){
	var paciente=new Paciente();
	paciente.nome=req.param("nome");
	paciente.sobrenome=req.param("sobrenome");
	paciente.endereco=req.param("endereco");
	paciente.telefone=req.param("telefone");
	paciente.login=req.param("login");
	paciente.senha=req.param("senha");
	paciente.cadastrar(function(rows,err){
		if(err){
			res.send("erro ao atualizar :"+err.message,500);
		}
		else{
			res.redirect("/pacientes");
		}
	});
});

router.get('/criar', function(req,res,next){
	Paciente.criar(function(rows,err){
		if(err){
			res.send("erro ao executar :"+err.message,500);
		}
		else{
			res.redirect("/");
		}
	});
});


module.exports = router;
