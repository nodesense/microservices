const DbError = require("../exceptions/DbError")
const Product = require("../models/Product")

module.exports = {
    
    getProduct: async (id) => {
            return {id, name: 'new product'}
    },
    
    createProduct: async (productJson) => {
        // console.log(productJson)
        const product = new Product({ 
                                        ...productJson,
                                        // year: 2020
                                    })

        try {
           const savedProduct =  await product.save()
           return savedProduct
        }
        catch(ex) {
            throw new DbError(10000, ex.message)
        }
    },
    updateProduct: async (id, productJson) => {

    },

    deleteProduct: async (id) => {

    },
}