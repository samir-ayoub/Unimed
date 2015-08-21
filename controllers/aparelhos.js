var express = require('express');
var router = express.Router();
require("../models/aparelho");

router.get('/',function(req,res,next){
	Aparelho.listar(function(rows,err){
		if(err){
			res.send("Erro ao buscar :"+err.message,500);
		}
		else{
			res.render('aparelhos/index', {registros:rows});
		}
	});
});

router.post('/cadastro',function(req,res,next){
	var aparelho= new Aparelho(null,req.param("nome"),req.param("status"))
	aparelho.salvar(function(rows,err){
		if(err){
			res.send("Erro ao cadastrar :"+err.message,500);
		}
		else{
			res.send('ok', 201);
		}
	})
})

router.get('/tabela',function(req,res,next){
	Aparelho.listar(function(rows,err){
		if(err){
			res.send("Erro ao buscar :"+err.message,500);
		}
		else{
			res.render('aparelhos/tabela', {registros:rows});
		}
	});
});

router.get('/excluir', function(req,res,next){
	Aparelho.excluir(parseInt(req.param('id')),function(rows,err){
		if(err){
			res.send("Erro ao excluir :"+err.message,500);
		}
		else{
			res.send('ok', 200);
		}
	});
});

router.get('/buscar', function(req,res,next){
	Aparelho.buscaPorId(req.param('id'),function(rows,err){
		if(err){
			res.send("Erro ao buscar :"+err.message,500);
		}
		else{
			res.send(rows, 200);
		}		
	})
})

router.post('/alterar',function(req,res,next){
	var aparelho= new Aparelho(req.param("id"),req.param("nome"),req.param("status"))
	aparelho.salvar(function(rows,err){
		if(err){
			res.send("Erro ao alterar:"+err.message,500);
		}
		else{
			res.send('ok', 200);
		}
	})
})

module.exports = router;

