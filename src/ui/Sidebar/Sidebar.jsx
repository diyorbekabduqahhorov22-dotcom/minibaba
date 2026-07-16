import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillDashboard } from 'react-icons/ai';
import { AiFillAppstore } from 'react-icons/ai';
import { AiFillShopping } from 'react-icons/ai';
import { MdStorefront } from "react-icons/md";
import { MdOutlineDashboard } from "react-icons/md";
import { AiFillMessage } from 'react-icons/ai';
import { MdOutlineAnalytics } from "react-icons/md";
import { AiOutlineFund } from 'react-icons/ai';
import { MdOutlineInventory2 } from "react-icons/md";
import { AiOutlineSetting } from 'react-icons/ai';
import { LuMessageSquareText } from "react-icons/lu";
import { MdOutlineShoppingCart } from "react-icons/md";
import './Sidebar.css';
import myImage from '../../assets/rasm.png';
const Sidebar = ({ currentPath }) => {
  
  const menuItems = [
    {
      path: '/',
      label: 'Asosiy panel',
      icon: <MdOutlineDashboard />
    },
    {
      path: '/mahsulotlar',
      label: 'Mahsulotlar',
      icon: <MdOutlineInventory2 />
    },
    {
      path: '/buyurtmalar',
      label: 'Buyurtmalar',
      icon:<MdOutlineShoppingCart />
    },
    {
      path: '/xabarlar',
      label: 'Xabarlar',
      icon: <LuMessageSquareText />
    },
    {
      path: '/statistika',
      label: 'Statistika',
      icon: <MdOutlineAnalytics />
    }
  ];


  return (
    <aside className="k1">
      <div className="k2">
        <div className="k3">
          <div className="k4">
           <MdStorefront />
          </div>
          <div className="k5">
            <span className="k6">Minibaba Seller</span>
            <span className="k7">Wholesale Panel</span>
          </div>
        </div>
      </div>

            <nav className="k8">
        {menuItems.map((item) => {
          
          let linkClass = "k9";
          
          if (currentPath === item.path) {
            linkClass += " k10";
          }

          return (
            <Link
              key={item.path}
              to={item.path}
              className={linkClass}
            >
              <span className="k11">{item.icon}</span>
              <span className="k12">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="k13">
        <div className="k14">
          <span className="k11"><AiOutlineSetting /></span>
          <span className="k12">Sozlamalar</span>
        </div>
        <div className="k15">
          <div className="k16">
           <img src={myImage} alt="Rasmni tavsifi" />
          </div>
          <div className="k17">
            <span className="k18">Alijon Valiyev</span>
            <span className="k19">Premium account</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;