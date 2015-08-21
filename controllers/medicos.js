var express = require('express');
var router = express.Router();
require("../models/medico");

router.get('/',function(req,res,next){
	Medico.listar(function(rows,err){
		if(err){
			res.send("Erro ao buscar :"+err.message,500);
		}
		else{
			res.render('medicos/index', {registros:rows});
		}
	});
});

router.get('/formulario',function(req,res,next){
	res.render('medicos/formulario');
});

router.post('/salvar',function(req,res,next){
	var medico= new Medico();
	medico.id=req.param("id");
	medico.nome=req.param("nome");
	medico.crm=req.param("crm");
	medico.telefone=req.param("telefone");
	medico.salvar(function(rows,err){
		if(err){
			res.send("Erro ao buscar :"+err.message,500);
		}
		else{
			res.send("cadastro efetuado", 200);
		}
	});
});

router.get('/excluir',function(req,res,next){
	Medico.excluir(req.param("id"),function(rows,err){
		if(err){
			res.send("Erro ao buscar :"+err.message,500);
		}
		else{
			res.send("exclusão com sucesso", 200);
		}
	})
})

router.get('/tabela',function(req,res,next){
	Medico.listar(function(rows,err){
		if(err){
			res.send("Erro ao buscar :"+err.message,500);
		}
		else{
			res.render('medicos/tabela', {registros:rows});
		}
	});
});



module.exports = router;
