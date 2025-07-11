import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useLocation, Navigate } from 'react-router-dom';
import { isTokenValid } from '../utils/authUtils';
import AppNavBar from '../components/TopNavBar';

const ProtectedLayout = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('token');
      if(token && isTokenValid(token)){
        setIsAuthenticated(true);
      }else{
        setIsAuthenticated(false);
      }
      setLoading(false);
    };
    checkAuth();
  }, []);

  if(loading) return <p>Loading...</p>


  return isAuthenticated ? (
    <>
        <AppNavBar/>
        <Outlet />
    </>
  ) : (
    <Navigate to="/login" replace state={{ from: location}}/>
  );
};

export default ProtectedLayout;