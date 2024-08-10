const Product = require('../models/inventario')

const createProduct = async (req,res)=>{
    try
    {
        const { nombre, precio, stock,activo } = req.body;
        const product = await Product.create({ nombre, precio, stock, activo })
        res.status(201).send({msj: "Product created successfully"})
    }catch(err){
        res.status(500).send('Internal Server Error'+ err)
    }
}

const getProducts = async (req, res)=>{
    try
    {
        const products = await Product.findAll()
        res.status(200).send(products)
    }catch(err){
        res.status(500).send('Internal Server Error'+ err)
    }
}

const getProductById = async (req, res)=>{
    try
    {
        const { id } = req.params
        const product = await Product.findByPk(id)
        if(!product) return res.status(404).send('Product not found')
        res.status(200).send(product)
    }catch(err){
        res.status(500).send('Internal Server Error'+ err)
    }
}

const updateProduct = async (req, res)=>{
    try
    {
        const { id } = req.params
        const { nombre, precio, stock, activo } = req.body
        const product = await Product.findByPk(id)
        if(!product) return res.status(404).send('Product not found')
        await product.update({ nombre, precio, stock, activo })
        res.status(200).send({msj: "Product updated successfully"})
    }catch(err){
        res.status(500).send('Internal Server Error'+ err)
    }
}

const deleteProduct = async (req, res)=>{
    try
    {
        const { id } = req.params
        const product = await Product.findByPk(id)
        if(!product) return res.status(404).send('Product not found')
        await product.destroy()
        res.status(200).send({msj: "Product deleted successfully"})
    }catch(err){
        res.status(500).send('Internal Server Error'+ err)
    }
}

module.exports = { createProduct, getProducts, getProductById, updateProduct, deleteProduct }