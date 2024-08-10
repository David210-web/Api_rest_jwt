const express = require('express');
const { createProduct,deleteProduct,getProductById,getProducts,updateProduct } = require('../controllers/products.controller')
const authentication = require('../middlewares/authMiddleware')
const router = express.Router();

router.get('/',authentication,getProducts)
router.get('/:id',authentication,getProductById)

router.post('/',authentication,createProduct)

router.put('/:id',authentication,updateProduct)

router.delete('/:id',authentication,deleteProduct)

module.exports = router;