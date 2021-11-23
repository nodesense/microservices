const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({
    name: { type: String, default: '' },
    brand: {type: String},
    location: {
      type: { type: String },
      coordinates: [Number],
    },
    category: {type: String}
  }, { collection: 'products' });
  
ProductSchema.index({location: "2dsphere"})
const Product = mongoose .model('Product', ProductSchema);

module.exports = Product
