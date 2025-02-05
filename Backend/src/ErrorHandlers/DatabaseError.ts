import BaseError from "./BaseError";

class DatabaseError extends BaseError {
    constructor(message: string) {
        super(message || 'Database Operation Failed', '400');
    }
}

export default DatabaseError;
