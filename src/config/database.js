const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('ejercicios','root','',{
    host: 'localhost',
    dialect:'mysql',
    logging: false,
});

module.exports = sequelize