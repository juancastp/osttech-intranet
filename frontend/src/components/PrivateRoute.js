import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth'; // Crear un hook para manejar la autenticación

const PrivateRoute = ({ element: Element, ...rest }) => {
  const { isAuthenticated, user } = useAuth();

  return (
    <Route
      {...rest}
      element={isAuthenticated ? <Element user={user} /> : <Navigate to="/login" />}
    />
  );
};

export default PrivateRoute;
