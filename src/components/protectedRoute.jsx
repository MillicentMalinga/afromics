import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../context/authContext';

const ProtectedRoute = ({ children }) => {
  const { user } = UserAuth();

  if (user === null) {
    return <div>Loading...</div>; // Or a loading spinner
  }

  if (!user) {
    return <Navigate to='/login' />;
  }

  return children;
};

export default ProtectedRoute;