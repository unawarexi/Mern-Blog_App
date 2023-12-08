const errorResponderHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 400;
    res.status(statusCode).json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
}


const inValidPathHandler = (req, res, next) => {
    let error = new Error("Invalid Code");
    error.statusCode = 404;
    next(error)

}

module.exports = {
    errorResponderHandler,
    inValidPathHandler
}