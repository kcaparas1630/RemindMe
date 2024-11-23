import { Request, Response, NextFunction } from "express";
import passport from "passport";

const handleAuth = (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate('basic', { session: false }, (err: any, user: any, info: any) => {
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
