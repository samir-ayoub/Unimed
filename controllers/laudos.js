var express = require('express');
var router = express.Router();
require("../models/laudo");

router.get('/',function(req,res,next){
	Laudo.listar(function(rows,err){
		if(err){
			res.send("Erro ao buscar :"+err.message,500);
		}
		else{
			res.render('laudos/index', {registros:rows});
		}
	});
});

router.get('/tabela',function(req,res,next){
	Laudo.listar(function(rows,err){
		if(err){
			res.send("Erro ao buscar :"+err.message,500);
		}
		else{
			res.render('laudos/tabela', {registros:rows});
		}
	});
});

router.post('/salvar',function(req,res,next){
	laudo=new Laudo();
	laudo.id=req.param("id");
	laudo.nome=req.param("nome");
	laudo.resumo=req.param("resumo");
	laudo.receita=req.param("receita");
	laudo.medico=req.param("medico");
	laudo.salvar(function(rows,err){
		if(err){
			res.send("Erro ao buscar :"+err.message,500);
		}
		else{
			res.send("cadastro efetuado", 200);
		}		
	})
})

router.post('/alterar',function(req,res,next){
	var laudo=new Laudo();
	laudo.id=req.param("id");
	laudo.nome=req.param("nome");
	laudo.resumo=req.param("resumo");
	laudo.receita=req.param("receita");
	laudo.medico=req.param("medico");
	laudo.salvar(function(rows,err){
		if(err){
			res.send("Erro ao buscar :"+err.message,500);
		}
		else{
			res.send("alteracao efetuada", 200);
		}		
	});
});

router.get('/formulario',function(req,res,next){
	res.render('laudos/formulario',{laudo:new Laudo()});
});

router.get('/excluir',function(req,res,next){
	Laudo.excluir(req.param("id"),function(rows,err){
		if(err){
			res.send("Erro ao buscar :"+err.message,500);
		}
		else{
			res.send("exclusão com sucesso", 200);
		}
	});
});

router.get('/buscar',function(req,res,next){
	Laudo.buscaPorId(req.param('id'),function(rows,err){
		if(err){
			res.send("Erro ao buscar :"+err.message,500);
		}
		else{
			res.send(rows, 200);
		}		
	});
});

module.exports = router;
