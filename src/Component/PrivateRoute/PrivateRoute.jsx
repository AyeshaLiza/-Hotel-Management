import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
 const {user, loading} = useContext(AuthContext)
 if (loading) {
  <div className='flex justify-center h-screen'><span className="loading loading-spinner loading-lg  "></span></div>
 }
 if (user?.email) {
  return children;
 }
 return <Navigate state={location.pathname} to={'/login'} replace></Navigate>
};

export default PrivateRoute;