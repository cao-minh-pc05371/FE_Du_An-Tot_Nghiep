import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ClientLayout from './layouts/ClientLayout/ClientLayout';
import AdminLayout from './layouts/AdminLayout/AdminLayout';

//Client Pages
import Home from './pages/Client/Home/Home';
import Phone from './pages/Client/Phone/Phone';
import Login from './pages/Client/Login/Login';
import Register from './pages/Client/Register/Register';
import Cart from './pages/Client/Cart/Cart';
import Checkout from './pages/Client/Checkout/Checkout';
import UserProfile from './pages/Client/UserProfile/UserProfile';
import ForgotPassword from './pages/Client/ForgotPassword/ForgotPassword';
import ResetPassword from './pages/Client/ResetPassword/ResetPassword';

//Admin Pages
import Dashboard from './pages/Admin/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* Layout cho client */}
        <Route element={<ClientLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/dien-thoai" element={<Phone />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/user-profile" element={<UserProfile />} />
        </Route>

        {/* Layout cho admin */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
