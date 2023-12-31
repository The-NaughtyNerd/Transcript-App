import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/signin');
  }, [navigate]);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
