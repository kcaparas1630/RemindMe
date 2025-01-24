/***
 * A Function that returns a ReactNode.
 * If Authenticated returns the children of this Route
 * else navigate to login route
 * 
 * @author @Kcaparas
 */
import { FC, ReactNode } from 'react';
import { Navigate, Outlet } from 'react-router-dom'

interface AuthProps {
    isAuthenticated: boolean;
}

const ProtectedRoute: FC<AuthProps> = ({ isAuthenticated }): ReactNode => {
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute;
