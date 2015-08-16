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

router.get('/listar',function(req,res,next){
	Paciente.listar(function(rows,err){
		if(err){
			res.send("Erro ao buscar :"+err.message,500);
		}
		else{
			res.send(rows);
		}
	});
});

router.get('/cadastro', function(req, res, next){
  res.render('pacientes/cadastro',{url:"/pacientes/cadastrar",paciente:new Paciente()});
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

			// Paciente.drop(function(rows,err){
			// 	if(err){
			// 		res.send("erro ao executar :"+err.message,500);
			// 	}
			// 	else{
			// 		Paciente.criar(function(rows,err){
			// 			if(err){
			// 				res.send("erro ao executar :"+err.message,500);
			// 			}
			// 			else{
			// 				res.redirect("/pacientes");
			// 			}
			// 		});
			// 	}
			// });
		}
		else{
			res.redirect("/pacientes");
		}
	});
});

router.get('/alterar', function(req,res,next){
	Paciente.buscaPorId(req.param("id"),function(rows,err){
		if(err){
			res.send("erro ao buscar Id"+err.message,500);
		}
		else{
			var paciente=rows[0];
			res.render('pacientes/cadastro',{url:"/pacientes/update?id="+ paciente.id, paciente:paciente});
		}
	});
});

router.post('/update', function(req,res,next){
	paciente={
		id:req.param("id"),
		nome:req.param("nome"),
		sobrenome:req.param("sobrenome"),
		endereco:req.param("endereco"),
		telefone:req.param("telefone"),
		login:req.param("login"),
		senha:req.param("senha")
	}
	Paciente.alterar(paciente,function(rows,err){
				if(err){
			res.send("erro ao atualizar"+err.message,500);
		}
		else{
			res.redirect("/pacientes");
		}
	});
});

router.get('/excluir', function(req,res,next){
	Paciente.excluirPorId(parseInt(req.param('id')),function(rows,err){
		if(err){
			res.send("erro ao excluir :"+err.message,500);
		}
		else{
			res.redirect("/pacientes");
		}
	});
});





module.exports = router;
