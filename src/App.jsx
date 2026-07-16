import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Sidebar from './ui/Sidebar/Sidebar';
import Navbar from './ui/Navbar/Navbar';
import Home from './pages/home/home';
import Mahsulotlar from './pages/mahsulotlar/mahsulotlar';
import Buyurtmalar from './pages/buyurtmalar/Buyurtmalar';
import Xabarlar from './pages/xabarlar/Xabarlar';
import Statistika from './pages/statistika/Statistika';
import { pageTitles } from './config/pageTitles';  
import './App.css';

function AppContent() {
  const location = useLocation();
  const title = pageTitles[location.pathname] || 'Sahifa'; 
  
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="a1">
      {sidebarOpen && (
        <div 
          className="sidebar-overlay" 
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <Sidebar 
        currentPath={location.pathname} 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
      />

      <div className="a2">
        <Navbar 
          title={title} 
          onMenuClick={() => setSidebarOpen(true)} 
        />
        
        <main className="a3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mahsulotlar" element={<Mahsulotlar />} />
            <Route path="/buyurtmalar" element={<Buyurtmalar />} />
            <Route path="/xabarlar" element={<Xabarlar />} />
            <Route path="/statistika" element={<Statistika />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;