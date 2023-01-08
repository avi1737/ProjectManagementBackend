
export function errorhandler(err , req , res , next){
    const status = err.statusCode || 500;
    res.status(status).json({
        message : err.message
    })
    return;
}