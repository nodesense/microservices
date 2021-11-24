const logger = require('../config/logger')
const productService = require('../services/product.service')

module.exports = {
    getProduct: async (req, res) => {
        const {id} = req.params
        try { 
          const product = await  productService.getProduct(id)
          if (!product) {
              return res.status(404).json({
                  errorCode: 404,
                  message: 'product not found'
              })
          }

         return res.json({...product})
        }
        catch (err) {
            logger.info(err.message)
            return res.status(500).json({
                errorCode: 500,
                message: 'product some error'
            })
        }
    },

    getProducts: async (req, res) => {

    },

    createProduct: async (req, res) => {
        console.log("create product call")
        const product = await productService.createProduct(req.body)
        res.json(product)
    },
    updateProduct: async (req, res) => {

    },

    deleteProduct: async (req, res) => {

    },

    searchProducts: async (req, res) => {
        const results = await productService.searchProducts(req.query)
        res.json(results)
    },
}