const { httpStatus } = require("../constant/constant");

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    console.log(statusCode,"----------------");
    switch (statusCode) {
        case httpStatus.VALIDATION_ERROR.code:
            res.json({ title: httpStatus.VALIDATION_ERROR.value, message: err.message, stackTrace: err.stack });
            break;
        case httpStatus.UNAUTHORIZED.code:
            res.json({ title: httpStatus.UNAUTHORIZED.value, message: err.message, stackTrace: err.stack });
            break;
        case httpStatus.FORBIDDEN.code:
            res.json({ title: httpStatus.FORBIDDEN.value, message: err.message, stackTrace: err.stack });
            break;
        case httpStatus.SERVER_ERROR.code:
            res.json({ title: httpStatus.SERVER_ERROR.value, message: err.message, stackTrace: err.stack });
            break;
        case httpStatus.NOT_FOUND.code:
            res.json({ title: httpStatus.NOT_FOUND.value, message: err.message, stackTrace: err.stack });
            break;
        default:
            console.log("No error found, All good !");
            break;
    }
}

module.exports = errorHandler 