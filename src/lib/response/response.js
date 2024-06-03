const ErrorCode = require('@lib-error/error.code')

function responseInternalServerError(errorCode, errorMessage) {
  return {
    success: false,
    httpCode: 500,
    error: {
      code: errorCode || ErrorCode.INTERNAL_SERVER_ERROR_CODE,
      message: errorMessage || ErrorCode.INTERNAL_SERVER_ERROR_MESSAGE,
    },
  };
}

function responseBadRequest(data) {
  return {
    success: false,
    httpCode: 400,
    data
  };
}

function responseNotFoundError(code, message) {
  return {
    success: false,
    httpCode: 404,
    data: {
      code,
      message
    }
  };
}

function responseSuccess(data, message = 'Success') {
  return {
    success: true,
    httpCode: 200,
    data: {
      code: 'SUCCESS',
      message,
      data
    }
  };
}

module.exports = {
  responseInternalServerError,
  responseBadRequest,
  responseNotFoundError,
  responseSuccess
}