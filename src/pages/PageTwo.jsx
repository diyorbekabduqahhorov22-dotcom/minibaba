import { useNavigate, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import "./PageTwo.css"

import { IoSearchOutline } from "react-icons/io5"
import { LuPackage } from "react-icons/lu"
import { CiCamera } from "react-icons/ci"
import { IoPersonOutline } from "react-icons/io5"
import { HiOutlineShoppingCart } from "react-icons/hi2"
import { LuMonitorSmartphone } from "react-icons/lu"
import { LuShirt } from "react-icons/lu"
import { BsTools } from "react-icons/bs"
import { FaBoxArchive } from "react-icons/fa6"
import { IoCarOutline } from "react-icons/io5"
import { GoHome } from "react-icons/go"
import { PiBabyBold } from "react-icons/pi"
import { PiMagicWandBold } from "react-icons/pi"
import { FaAngleRight } from "react-icons/fa"
import { MdOutlineTrendingUp } from "react-icons/md"
import { BiBadgeCheck } from "react-icons/bi"
import { PiShieldPlusLight } from "react-icons/pi"
import { FaBitcoin } from "react-icons/fa"
import { MdOutlineEmail } from "react-icons/md"
import { MdOutlineLocalPhone } from "react-icons/md"

const PageTwo = () => {
  const navigate = useNavigate()
  const [product, setProduct] = useState([])
  const [sellers, setSellers] = useState([])

  async function GetProducts() {
    try {
      const res = await fetch("https://uzum-api.onrender.com/api/products")
      const data = await res.json()
      console.log(data)
      setProduct(data.data)
    } catch (error) {
      console.log(error)
    }
  }

  async function GetSellers() {
    try {
      const res = await fetch("https://uzum-api.onrender.com/api/sellers")
      const data = await res.json()
      console.log(data)
      setSellers(data.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    GetProducts()
    GetSellers()
  }, [])

  return (
    <div className="ret">
      <div className='nem'>
        <div className="bek">
          <div className="menu">
            <h2><span className='n'>☰</span> Kategoriyalar</h2>
            <p><span className='dek'><LuMonitorSmartphone /></span>Elektronika <span className='df'><FaAngleRight /></span></p>
            <p><span className='dek1'><LuShirt /></span>Kiyim-kechak <span className='df'><FaAngleRight /></span></p>
            <p><span className='dek2'><BsTools /></span>Qurilish mollari <span className='df'><FaAngleRight /></span></p>
            <p><span className='dek3'><FaBoxArchive /></span>Ulgurji oziq-ovqat <span className='df'><FaAngleRight /></span></p>
            <p><span className='dek4'><IoCarOutline /></span>Avto qismlar <span className='df'><FaAngleRight /></span></p>
            <p><span className='dek5'><GoHome /></span>Uy buyumlari <span className='df'><FaAngleRight /></span></p>
            <p><span className='dek6'><PiBabyBold /></span>Bolalar uchun <span className='df'><FaAngleRight /></span></p>
            <p><span className='dek7'><PiMagicWandBold /></span>Go'zallik <span className='df'><FaAngleRight /></span></p>
          </div>
        </div>

        <div className="main-wrapper">
          <div className="ban">
            <div className="leg">
              <span className="depp">MINIBABA LOGISTICS</span>
              <h1>O'zbekiston <br /> bo'ylab tez <br /> yetkazib berish</h1>
              <p>Eng arzon ulgurji narxlar va ishonchli sotuvchilar bitta <br /> platformada.</p>
              <button className="btn1">Batafsil</button>
            </div>
          </div>

          <div className="jjjj">
            <div className="prod">
              <div className="sect">
                <p><span className='cok'><MdOutlineTrendingUp /></span>Top mahsulotlar</p>
              </div>
              <div className="em">
                {product.map((item) => (

                  <Link
                    to={`/page-one/${item.slug || item.id}`}
                    key={item.id}
                    style={{ textDecoration: 'none' }}
                  >
                    <div className="card">
                      <img src={item.imageUrl} alt={item.name} />
                      <h3>{item.name}</h3>
                      <h1>{item.discountedPrice} UZS</h1>
                      <h4>Minimal buyurtma {item.moq || 10}</h4>
                      <span className='def'>
                        <p><span className='der'><BiBadgeCheck /></span>Tasdiqlangan Sotuvchi</p>
                      </span>
                    </div>
                  </Link>

                ))}
              </div>
            </div>

            <div className="seller">
              <p className="sellers">
                <span className='dek11'><PiShieldPlusLight /></span>
                Tasdiqlangan sotuvchilar
              </p>
              <div className="get1">
                {sellers.map((seller) => (
                  <div className="card1" key={seller.id}>
                    <div className="avat">
                      <img src={seller.logoUrl} alt={seller.name} />
                    </div>
                    <h3>{seller.name}</h3>
                    <p>{seller.experienceLabel} • {seller.location}</p>
                    <div className="sta">
                      <div className="st1">{seller.reliabilityScore}%<br /><span>Ishonchlilik</span></div>
                      <div className="st1">{seller.responseTimeSeconds}s<br /><span>Javob vaqti</span></div>
                    </div>
                    <button
                      className="btn2"
                      onClick={() => navigate(`/page-three/${seller.slug}`)}
                    >
                      Sotuvchi sahifasi
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageTwo;