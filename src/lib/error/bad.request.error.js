const ErrorCode = require('@lib-error/error.code');
const CustomError = require('@lib-error/custom.error');

class BadRequestError extends CustomError {
  constructor(data, message = "Invalid Request") {
    super(400, ErrorCode.FORM_INVALID_CODE, message, data);
  }
}

module.exports = BadRequestError
