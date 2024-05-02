const Tipos_Usuarios = require('../models/tipos_usuarios');
exports.getAll = async (req, res) => {
    const tipos_usuarios = await Tipos_Usuarios.findAll();
    res.json(tipos_usuarios)
};

exports.getById = async (req, res) => {
    //no router id é o que vem depois do usuario/
    const idDoParam = req.params.id;
    const tipos_usuariosEncontrados = await Tipos_Usuarios.findOne({ idUsuarios: idDoParam });
    res.json(tipos_usuariosEncontrados)
};

exports.createTipos_Usuarios = async (req, res) => {
const tipos_usuariosCadastrado = await Turmas.findOne({ where: {codigo: req.body.codigo } });
    //verificação duplicidade de usuario cadastrado
    if (tipos_usuariosCadastrado) {
        return res.send('Já existe uma turma cadastrada neste código.')
    }

    const turmaCriada = await Turmas.create(req.body)
    console.log("turmaCriada", turmaCriada)
    return res.send("oi")
    // res.json(usuarios)
};