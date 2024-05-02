const Turmas = require('../models/turmas');
exports.getAll = async (req, res) => {
    const turmas = await Turmas.findAll();
    res.json(turmas)
};

exports.getById = async (req, res) => {
    //no router id é o que vem depois do usuario/
    const idDoParam = req.params.id;
    const turmasEncontrado = await Turmas.findOne({ where: { idTurmas: idDoParam }});
    res.json(turmasEncontrado)
};

exports.createTurmas = async (req, res) => {
const turmasCadastrado = await Turmas.findOne({ where: {codigo: req.body.codigo } });
    //verificação duplicidade de usuario cadastrado
    if (turmasCadastrado) {
        return res.send('Já existe um usuario cadastrado neste CPF.')
    }

    const turmasCriado = await Turmas.create(req.body)
    console.log("turmasCriado", turmasCriado)
    return res.send("Turma cadastradas com sucesso!")
    const turmaEncontrada = await Turmas.findOne({ idUsuarios: idDoParam });
    res.json(turmaEncontrada)
};

exports.createTurma = async (req, res) => {
const turmaCadastrado = await Turmas.findOne({ where: {codigo: req.body.codigo } });
    //verificação duplicidade de usuario cadastrado
    if (turmaCadastrado) {
        return res.send('Já existe uma turma cadastrada neste código.')
    }

exports.updateTurma = async  (req, res) => {
    const codigoTurma = req.params.updateTurma;
    try{
        const turmaCadastrado = await Turmas.findOne({where:{codigo: codigoTurma}});
            if(turmaCadastrado){
                delete req.body.codigo;
                const [numRowsUpdated] = await Turmas.update(req.body,{
                    where: { codigo: codigoTurma}
                });
            }
    }//tenta conferir o código
    catch{

    }//se não der pega o error 
} 
//async:js fica rodando, espera pra chamar pra execultar
    const turmaCriada = await Turmas.create(req.body)
    console.log("turmaCriada", turmaCriada)
    return res.send("oi")

    // res.json(usuarios)
};