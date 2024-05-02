//routes/router.js
//nesse arquivo estarão todas as rotas
//no caso de um proj com muitas rotas é possível quebrar as rotas em mais arquivos
const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuario')
<<<<<<< HEAD
const turmasController = require("../controllers/turmas")
=======
const turmasController = require('../controllers/turmas')
>>>>>>> 03ed7466f1a6a6234a9740c6f2daedd67ae4c745

//retorna todos usuarios
router.get('/usuario', usuarioController.getAll)
router.get('/usuario/:id', usuarioController.getById)
router.get('/turmas', turmasController.getAll)
router.get('/turmas/:id', turmasController.getById)

//cria um usuario passando informações no body
router.post('/turmas', turmasController.createTurmas)


//INSERIR OUTRAS ROTAS -->
router.get('/turmas', turmasController.getAll)
router.get('/turma/:id', turmasController.getById) 

/* router.get('/turmas', turmasController.getAll)
router.get('/turmas/:id', turmasController.getById) */

/* router.get('/usuario', usuarioController.listarUsarios) */

module.exports = router;