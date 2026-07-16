import React from 'react';
import { AiOutlineBell, AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai';
import './Navbar.css';

const Navbar = ({ title = "Sahifa", onMenuClick }) => {
  return (
    <div className="m1">
      <button className="m0" onClick={onMenuClick} aria-label="Menyu">
        <AiOutlineMenu />
      </button>

      <h1 className="m2">{title}</h1>
      
      <div className="m3">
        <AiOutlineSearch className="m4" />
        <input 
          type="text" 
          placeholder="Mahsulot nomi yoki SKU bo'yicha qidiruv..."
          className="m5"
        />
      </div>
      
      <div className="m6">
        <span className="m7">
          <AiOutlineBell />
        </span>
      </div>
    </div>
  );
};

export default Navbar;