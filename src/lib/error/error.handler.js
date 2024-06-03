const InternalServerError = require("./internal.server.error");
const NotFoundError = require("./not.found.error");
const CustomError = require("./custom.error");
const ErrorCode = require('./error.code');
const BadRequestError = require("./bad.request.error");

function errorHandler(err, req, res, next) {
  let httpCode = 500;
  let error;
  if (err instanceof BadRequestError) {
    httpCode = err.getHttpCode();
    error = err.getError();
  } else if (err instanceof CustomError) {
    httpCode = err.getHttpCode();
    error = err.getError();
  } else if (err instanceof InternalServerError || err instanceof Error) {
    error = {
      code: ErrorCode.INTERNAL_SERVER_ERROR_CODE,
      message: err.message,
    };
    console.error(err.stack)
  }

  res.status(httpCode);
  res.send(error);
}

function notFoundHandler() {
  throw new NotFoundError("Route Not Found In Environment "+ process.env.APP_ENV);
}

module.exports = {
  errorHandler,
  notFoundHandler
}