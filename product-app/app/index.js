const express = require('express')
const DbError = require('./exceptions/DbError')
const genericErrorHandler = require('./middlewares/error-handler')
const notFoundMiddleware = require('./middlewares/not-found')
const productRouter = require('./routes/product.route')
const cors = require('cors')
const app = express()

// check content type for post, put methods, if application/json, it parse the content
// store the the parsed json into req.body
app.use(cors())
app.use(express.json()) 



const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json'); // load yaml

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
 

app.use("/products", productRouter)

app.get("/hello", (req, res)=> {
    console.log("**hello called")
    res.json({result: false})
})

app.get('/order', (req, res) => {
    console.log("order called ", req.query.status)
    res.json({'order_id': 12345, amount: 500, status: 'completed'})
})

app.get("/error", (req, res)=> {
     throw new Error("Boom")
    throw new DbError(50045, "unique name already exist")
    //throw 100
})

// must be at last one for 404
// called when no match found
// middleware
app.use(notFoundMiddleware)

// generic middleware for error
app.use(genericErrorHandler)

// common js
module.exports = app