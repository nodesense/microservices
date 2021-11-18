const express = require('express')
const DbError = require('./exceptions/DbError')
const genericErrorHandler = require('./middlewares/error-handler')
const notFoundMiddleware = require('./middlewares/not-found')
const productRouter = require('./routes/product.route')

const app = express()

// check content type for post, put methods, if application/json, it parse the content
// store the the parsed json into req.body
app.use(express.json()) 

app.use("/products", productRouter)

app.get("/hello", (req, res)=> {
    console.log("**hello called")
    res.json({result: false})
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