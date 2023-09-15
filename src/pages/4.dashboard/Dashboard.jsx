import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem('transcript-uid');
  useEffect(() => {
    console.log(userId);
    if (!userId) navigate('/signin');
  }, [userId, navigate]);
  return <div>Dashboard</div>;
};

export default Dashboard;
