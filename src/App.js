import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import AllCars from './screens/AllCars/AllCars.jsx';
import Cart from './screens/Cart/Cart.jsx';
import Home from './screens/Home/Home.jsx';
// import Login from "./screens/Login";
import LoginModal from './components/LoginModal/LoginModal.jsx';
import CreateAccountModal from './components/CreateAccountModal/CreateAccountModal.jsx';
import './App.css';

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showCreateAccountModal, setShowCreateAccountModal] = useState(false);

  return (
    <div className='App'>
      <Navbar setShowLoginModal={setShowLoginModal} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/all-cars' element={<AllCars />} />
        <Route path='/cart' element={<Cart />} />
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
      {showLoginModal && (
        <LoginModal
          setShowLoginModal={setShowLoginModal}
          setShowCreateAccountModal={setShowCreateAccountModal}
        />
      )}
      {showCreateAccountModal && (
        <CreateAccountModal
          setShowCreateAccountModal={setShowCreateAccountModal}
        />
      )}
    </div>
  );
}

export default App;
