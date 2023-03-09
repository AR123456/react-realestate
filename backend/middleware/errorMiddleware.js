const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode);
  // only send the stack trace if in dev
  res.json({
    message: err.message,
    stack: process.nextTick.NODE_ENV === "production" ? null : err.stack,
  });
};
module.exports = { errorHandler };
// put this in serverjs ot use it
