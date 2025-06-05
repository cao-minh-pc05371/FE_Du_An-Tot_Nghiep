import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import ClientLayout from './layouts/ClientLayout/ClientLayout';
import AdminLayout from './layouts/AdminLayout/AdminLayout';

//Client Pages
import Home from './pages/Client/Home/Home';
import Phone from './pages/Client/Phone/Phone';

//Admin Pages
import Dashboard from './pages/Admin/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        {/* Layout cho client */}
        <Route element={<ClientLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/dien-thoai" element={<Phone />} />
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
