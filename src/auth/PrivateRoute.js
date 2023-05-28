import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from './index';

const PrivateRoute = ({ children }) => {
    
    return isAuthenticated() ? <>{children}</> : <Navigate to="/" state={{from: location}} />;
};
export default PrivateRoute;
