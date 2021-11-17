const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({
    name: { type: String, default: '' },
    brand: {type: String}
  }, { collection: 'products' });
  

const Product = mongoose .model('Product', ProductSchema);

module.exports = Product