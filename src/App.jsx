import { Route, Router, Routes } from 'react-router-dom';

import './App.css';
import Home from './pages/1.home/Home';
import Signin from './pages/2.signin/Signin';
import Signup from './pages/3.signup/Signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/4.dashboard/dashboard';

function App() {
  return (
    <div className="">
      <ToastContainer />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
