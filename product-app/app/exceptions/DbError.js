class DbError extends Error {
    constructor(errorCode, message, options={}) {
      // Needs to pass both `message` and `options` to install the "cause" property. 
      super(message, options); // calls base class/Error constructor
      this.errorCode = errorCode
    }
  }

module.exports = DbError