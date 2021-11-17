const notFoundMiddleware = (req, res, next) => {
    console.log("at last use")
    res.status(404).json({
        errorCode: 404,
        message: `The path  ${req.path} not found`
    })
}

module.exports = notFoundMiddleware