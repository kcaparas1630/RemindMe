import { Request, Response, NextFunction } from "express";
import passport from "passport";
import User from "../Interface/userInteface";

const handleAuth = (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate('basic', { session: false }, (err: Error | null, user: User, info: { message: string}) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.status(401).json({ message: info.message || 'Authentication failed' });
        }
        req.user = user;
        next();
    })(req, res, next);
};

export default handleAuth;
