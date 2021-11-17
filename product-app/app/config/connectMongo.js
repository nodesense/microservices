const mongoose = require("mongoose");
 
const connectMongo = async () => {
    return mongoose.connect(process.env.MONGO_URI);
}

module.exports = connectMongo