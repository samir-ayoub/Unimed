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

router.get('/excluir', function(req,res,next){
	Tipo.excluir(req.param("id"),function(rows,err){
		if(err){
			res.send("erro ao cadastrar:"+err.message,500);
		}
		else{
			res.redirect("/tipos");
		}
	});
});

router.get('/alterar', function(req,res,next){
	Tipo.buscaPorId(req.param("id"),function(rows,err){
		if(err){
			res.send("erro ao buscar Id"+err.message,500);
		}
		else{
			var tipo=rows[0];
			res.render('tipos/cadastro',{url:"/tipos/update?id="+ tipo.id, tipo:tipo});
		}
	});
});

router.post('/update', function(req,res,next){
	tipo=new Tipo();
	tipo.id=req.param("id");
	tipo.tipo=req.param("tipo");
	tipo.descricao=req.param("descricao");
	Tipo.alterar(tipo,function(rows,err){
		if(err){
			res.send("erro ao atualizar"+err.message,500);
		}
		else{
			res.redirect("/tipos");
		}
	});
});

module.exports = router;
