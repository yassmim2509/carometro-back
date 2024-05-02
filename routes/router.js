//routes/router.js
//nesse arquivo estarão todas as rotas
//no caso de um proj com muitas rotas é possível quebrar as rotas em mais arquivos
const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuario')
const turmasController = require("../controllers/turmas")

//retorna todos usuarios
router.get('/usuario', usuarioController.getAll)
router.get('/usuario/:id', usuarioController.getById)
router.get('/turmas', turmasController.getAll)
router.get('/turmas/:id', turmasController.getById)

//cria um usuario passando informações no body
router.post('/turmas', turmasController.createTurmas)


//INSERIR OUTRAS ROTAS -->
/* router.get('/turmas', turmasController.getAll)
router.get('/turma/:id', turmasController.getById) */

/* router.get('/turmas', turmasController.getAll)
router.get('/turmas/:id', turmasController.getById) */

/* router.get('/usuario', usuarioController.listarUsarios) */

module.exports = router;