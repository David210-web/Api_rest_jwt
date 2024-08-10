const express = require('express');
const userRoutes = require('./routes/users.routes.js')

const productsRoutes = require('./routes/inventario.routes.js')

const app = express();

app.use(express.urlencoded({extended:false}))
app.use(express.json());

app.use('/api/user',userRoutes)
app.use('/api/products',productsRoutes)

module.exports = app;