const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const User = sequelize.define('usuarios', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    usuario:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    }
    ,
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rol: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    timestamps: false
})

module.exports = User;