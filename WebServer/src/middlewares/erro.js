export function error(err, req, res, next) {
    console.error(err, 2);
    const status = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';

    return res.status(status).json({
        error: {
            message
        },
    });
}
