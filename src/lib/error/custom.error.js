class CustomError extends Error {
  constructor(httpCode, errorCode, errorMessage, data = null) {
    super();

    this.httpCode = httpCode;
    this.errorCode = errorCode;
    this.errorMessage = errorMessage;
    this.data = data;
  }

  getHttpCode() {
    return this.httpCode;
  }

  getError() {
    return {
      code: this.errorCode,
      message: this.errorMessage,
      data: this.data
    };
  }
}

module.exports = CustomError
