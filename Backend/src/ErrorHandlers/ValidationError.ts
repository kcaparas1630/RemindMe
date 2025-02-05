import BaseError from "./BaseError";

class ValidationError extends BaseError {
    constructor(message: string) {
        super(message || 'Invalid input', '400');
    }
}

export default ValidationError;
