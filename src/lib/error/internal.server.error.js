class InternalServerError extends Error {
  constructor(message) {
    super(message ? JSON.stringify(message) : null);
  }
}

module.exports = InternalServerError
