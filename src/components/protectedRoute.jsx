import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../context/authContext';

const ProtectedRoute = ({ children }) => {
  const { user } = UserAuth();

  if (user) {
   return children
    

  // Or a loading spinner
  }

  if (!user) {
    return <Navigate to='/login' />;
  }


};

export default ProtectedRoute;