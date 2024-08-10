const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const Product = sequelize.define('inventario',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    precio: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    activo: 
    {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
},
{
    timestamps: false,
    tableName: 'inventario'

})

module.exports = Product;