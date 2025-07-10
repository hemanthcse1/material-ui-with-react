import { Outlet, Navigate } from 'react-router-dom';

const isAuthenticated = () => {
  // Replace with actual auth check (localStorage/token/context)
  return !!localStorage.getItem('authToken');
};

const ProtectedLayout = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedLayout;