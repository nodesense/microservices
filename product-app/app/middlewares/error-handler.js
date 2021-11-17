const logger = require("../config/logger")
const DbError = require("../exceptions/DbError")


const genericErrorHandler = (err, req, res, next) => {
    let message = "unknown error " 
    let errorCode = 500

    if (err && err.message){
        logger.error(err.message)
    }
    

    if (err instanceof DbError) {
        message = "DB Error " + err.message
    } else 
    if (err instanceof Error) {
        message = err.message
    }

    res.status(500).json({
        errorCode,
        message
    })
}

module.exports = genericErrorHandler