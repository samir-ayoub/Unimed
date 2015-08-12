var express = require('express');
var router = express.Router();
require("../models/tipo");

router.get('/',function(req,res,next){
	Tipo.listar(function(rows,err){
		if(err){
			res.send("Erro ao buscar :"+err.message,500);
		}
		else{
			res.render('tipos/index', {registros:rows});
		}
	});
});

router.get('/criar', function(req,res,next){
	Tipo.criar(function(rows,err){
		if(err){
			Tipo.drop(function(rows,err){
				if(err){
					res.send("erro ao executar:"+err.message,500);
				}
				else{
					Tipo.criar(function(rows,err){
						if(err){
						res.send("erro ao executar:"+err.message,500);
						}
						else{
							res.redirect("/tipos");
						}
					});
				}
			});
		}
		else{
			res.redirect("/tipos");
		}
	});
});

router.get('/cadastro', function(req,res,next){
	res.render('tipos/cadastro',{url:"/tipos/cadastrar",tipo:new Tipo()});
});

router.get('/cadastro', function(req, res, next) {
  res.render('usuarios/cadastro',{url:"/usuarios/cadastrar",usuario:new Usuario()});
});

router.post('/cadastrar',function(req,res,next){
	var tipo=new Tipo();
	tipo.tipo=req.param("tipo");
	tipo.descricao=req.param("descricao");
	tipo.cadastrar(function(rows,err){
		if(err){
			res.send("erro ao cadastrar:"+err.message,500);
		}
		else{
			res.redirect("/tipos");
		}
	});
});



module.exports = router;
