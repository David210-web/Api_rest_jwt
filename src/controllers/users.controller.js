const User = require("../models/users");
const { generateToken } = require("../security/jwtServices");
const hashPassword = require("../security/passwordHasher");
const bcrypt = require("bcrypt")

const createUser =  async (req,res)=>{
    try
    {
        const { usuario,email,password,rol } = req.body;
        const hashedPassword = hashPassword(password)
        const user = await User.create({usuario,email,password: hashedPassword,rol})
        res.status(201).send({msj: "user created successfully"})
    }catch(err)
    {
        res.status(500).send('Internal Server Error ' + err)
    }
}

const loginUser = async (req, res)=>{
    try{
        const { email, password } = req.body;
        const user = await User.findOne({where: {email}});

        if(!user) return res.status(404).send('User not found')
        const validPassword = bcrypt.compareSync(password, user.password)
    
        if(!validPassword) return res.status(401).send('Invalid Password')

        const payload ={
            email: user.email,
            usuario: user.usuario,
            rol: user.rol
        }

        const token = generateToken(payload)
        res.status(200).send({msj: "Login successful",token})
    }catch(err){
        res.status(500).send('Internal Server Error'+ err)
    }
}

const detailsUser = async(req,res)=>{
    try
    {
        res.status(200).send({user: req.user})
    }catch(err){
        res.status(500).send('Internal Server Error'+ err)
    }
}

module.exports = { createUser,loginUser,detailsUser }