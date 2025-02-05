import BaseError from "./BaseError";

class ValidationError extends BaseError {
    constructor(message: string, details?: string) {
        super(message, 400, 'VALIDATION_ERROR', details);
    }
}

export default ValidationError;
