const express = require('express')
const { getProducts,
    createProduct,
    updateProduct,
    getProduct,
    deleteProduct,
    searchProducts
} = require('../controllers/product.controller')

const productRouter = express.Router()

// GET  /products
// POST  /products

productRouter.route('/')
      .get(getProducts)
      .post(createProduct)


// GET  /products/12343
// PUT  /products/12345
// DELETE /products/12345
productRouter.route('/:id')
        .get(getProduct)
         .post(updateProduct)
         .delete(deleteProduct)

// GET /products/search?q=iphone

productRouter.get('/search', searchProducts)

module.exports = productRouter