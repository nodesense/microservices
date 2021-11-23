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

    searchProducts: async (query) => {
      return await  Product.find({
        location:
          { $near:
             {
               $geometry: { type: "Point",  coordinates: [ -73.9667, 40.78 ] },
               $minDistance: 1000,
               $maxDistance: 5000
             }
          }
      })
    }
    
}