import React, { useEffect, useRef, useState } from 'react';

import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';

const Dashboard = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem('transcript-uid');
  useEffect(() => {
    console.log(userId);
    if (!userId) navigate('/signin');
  }, [userId, navigate]);
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Dashboard;
