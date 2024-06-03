const ErrorCode = require('@lib-error/error.code');
const CustomError = require('@lib-error/custom.error');

class NotFoundError extends CustomError {
  constructor(message = "Not Found") {
    super(404, ErrorCode.NOT_FOUND_CODE, message);
  }
}

module.exports = NotFoundError
