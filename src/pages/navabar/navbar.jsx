import { useNavigate } from 'react-router-dom';
import { LuPackage } from "react-icons/lu";
import { IoSearchOutline } from "react-icons/io5";
import { CiCamera } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { useCart } from '../../createContext/createContext';


export default function Navbar() {
  const navigate = useNavigate();
const { cartCount } = useCart();
  return (
    <header className="dep">
      <div className="get">
        <div className="box">
          <span className='m1'><LuPackage /></span>
        </div>
         <span className='logo' onClick={() => navigate('home')} style={{ cursor: 'pointer' }}>
          Minibaba
        </span>
      </div>

      <div className="bar">
        <span className='n22'><IoSearchOutline size={19} color='#8A7260' /></span>
        <input type="text" placeholder="Mahsulot yoki sotuvchini qidiring..." />
        <span className='kl'><CiCamera /></span>
        <button className="btn">Qidirish</button>
      </div>

      <nav className="sev">
        <span className='n1'>Kategoriyalar</span>
        <span className='n1'>Yordam</span>
        <span className='n222' onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          <span className='kll'><IoPersonOutline size={18} /></span>
          Kirish
        </span>
        <span className='n222'>
          <span className='kll1'><HiOutlineShoppingCart /></span>
          Savat
          <span className='net'>{cartCount}</span>
        </span>
      </nav>
    </header>
  );
}