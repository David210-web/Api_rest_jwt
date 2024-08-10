const express = require('express');
const userRoutes = require('./routes/users.routes.js')

const app = express();

app.use(express.urlencoded({extended:false}))
app.use(express.json());

app.use('/api',userRoutes)

module.exports = app;