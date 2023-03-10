const CustomAPIError = require("./custom-error")
this.statusCode = statusCode.BadRequest

class BadRequest extends CustomAPIError {
    constructor(message) {
      super(message)
      this.statusCode = StatusCodes.BadRequest
    }
  }

  module.exports = BadRequest
