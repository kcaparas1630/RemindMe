class BaseError extends Error {
    statusCode: string;
    
    constructor(message: string, statusCode: string) {
        super(message);
        this.statusCode = statusCode;
        this.name = this.constructor.name
        Error.captureStackTrace(this, this.constructor);
    }
}

export default BaseError;
