const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');

const Tipos_Usuarios = sequelize.define('Tipos_Usuarios', {
        //define as informações da tabela colunas

        idTipos_Usuarios: {
            type: Sequelize.INTEGER,
            primaryKey: true, // Define essa coluna como a chave primária
            autoIncrement: true // Indica que é uma chave primária autoincrementável
        },
    
    descricao: Sequelize.STRING

},
{
    //precisa disso porque não tem as colunas createdAt e updatedAt no bd
        timestamps: false // Adiciona colunas createdAt e updatedAt automaticamente
    });

module.exports = Tipos_Usuarios;