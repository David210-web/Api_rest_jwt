const express = require('express');
const User = require('../models/users');
const { createUser, loginUser,detailsUser } = require('../controllers/users.controller');
const authentication = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/ping', function (req, res){
    res.send('pong')
})

router.post('/user/register', createUser)
router.post('/user/login',loginUser)

router.get('/user/me',authentication,detailsUser)

/*router.get('/user/info',authentication,(req,res)=>{
    res.status(200).json({msj: 'Contenido protegido',user: req.user})
})*/


module.exports = router