import { Route, Router, Routes } from 'react-router-dom';

import './App.css';
import Home from './pages/1.home/Home';
import Signin from './pages/2.signin/Signin';
import Signup from './pages/3.signup/Signup';
import SuccessSignin from './pages/4.successSignin/SuccessSignin';

function App() {
  return (
    <div className="">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/successSignin" element={<SuccessSignin />} />
      </Routes>
    </div>
  );
}

export default App;
