import React, { useEffect, useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Loader2 } from 'lucide-react';




const ProtectedRoutes = ({ children }) => {
  const userData = useSelector((state) => state.auth.userData);
  const loader = useSelector((state) => state.auth.loader);
  const authLoading = useSelector((state) => state.auth.authLoading);
  const location = useLocation();
  const navigate = useNavigate();


  if (loader) {
    return (
      <div className='h-[90vh] flex justify-center items-center'>
        <Loader2 className='w-6 h-6 rounded-full animate-spin' />
      </div>
    )
  }


  return (userData ? children : <Navigate to={"/login"} />)
}

export default ProtectedRoutes