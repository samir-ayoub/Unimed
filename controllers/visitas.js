var express = require('express');
var router = express.Router();
require("../models/visita");


router.get('/',function(req,res,next){
	Visita.listar(function(rows,err){
		if(err){
			res.send("Erro ao buscar :"+err.message,500);
		}
		else{
			res.render('visitas/index', {registros:rows});
		}
	});
});

router.get('/criar',function(req,res,next){
	Visita.criar(function(rows,err){
		if(err){
			res.send("Erro ao criar:"+err.message,500);
		}
		else{
			res.redirect('/visitas');
		}
	})
})

router.get('/cadastro', function(req, res, next) {
  res.render('visitas/cadastro',{url:"/visitas/cadastrar",visita:new Visita()});
});

router.post('/cadastrar',function(req,res,next){
	var visita=new Visita();
	visita.nome=req.param('nome');
	visita.endereco=req.param('endereco');
	visita.dia=req.param('dia');
	visita.horas=req.param('horas');
	visita.descricao=req.param('descricao');
	visita.cadastrar(function(rows,err){
		if(err){
			res.send("erro ao cadastrar:"+err.message,500);
		}
		else{
			res.redirect('/visitas');
		}
	});
});

router.get('/excluir',function(req,res,next){
	Visita.excluir(req.param("id"),function(rows,err){
		if(err){
			res.send("Erro ao excluir"+err.message,500);
		}
		else{
			res.redirect('/visitas');
		}
	});
});

router.get('/alterar',function(req,res,next){
	Visita.buscaPorId(req.param("id"),function(rows,err){
		if(err){
			res.send("erro ao buscar id"+err.message,500);
		}
		else{
			var visita=rows[0];
			res.render('visitas/cadastro',{url:"/visitas/update?id="+visita.id, visita:visita});
		}
	});
});


router.post('/update',function(req,res,next){
	visita=new Visita();
	visita.id=req.param("id");
	visita.nome=req.param("nome");
	visita.endereco=req.param("endereco");
	visita.dia=req.param("dia");
	visita.horas=req.param("horas");
	visita.descricao=req.param("descricao");
	Visita.alterar(visita,function(rows,err){
		if(err){
			res.send("erro ao atualizar"+err.message,500);
		}
		else{
			res.redirect("/visitas");
		}
	})
})



module.exports = router;
