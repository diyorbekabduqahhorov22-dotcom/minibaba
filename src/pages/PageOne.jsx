import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import './PageOne.css'
import { FaAngleRight } from "react-icons/fa"
import { FaCartPlus } from "react-icons/fa6"
import { BsFileEarmarkPdf } from "react-icons/bs"
import { MdOutlineChat } from "react-icons/md"
import { LiaTruckSolid } from "react-icons/lia"
import { IoIosStarOutline, IoIosStar } from "react-icons/io"
import { FaBoxArchive } from "react-icons/fa6"
import { IoLocationOutline } from "react-icons/io5"
import { BsPatchCheck } from "react-icons/bs"
import { useCart } from '../createContext/createContext';

const PageOne = () => {
    const params = useParams()
    const slug = params.slug
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    
    const [count, setCount] = useState(2) 
      const { addToCart } = useCart();

    async function getData() {
        try {
            const res = await fetch(`https://uzum-api.onrender.com/api/products/${slug}`)
            const data = await res.json()
            console.log(data)
            if (data.success) {
                setProduct(data.data)
            } else {
                toast.warning(data.message, {
                    position: "top-center",
                    autoClose: 2000,
                })
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getData()
    }, [slug])

    const handleDecrement = () => {
        setCount((prev) => (prev > 1 ? prev - 1 : 1))
    }

    const handleIncrement = () => {
        setCount((prev) => prev + 1)
    }

    const handleAddToCart = () => {
        addToCart({ ...product, quantity: count })
    }

    return (
        <div className='page-one'>
            <div className="content100">
                <div className="crumb100">
                    <span>Asosiy</span>
                    <FaAngleRight />
                    <span>Sanoat uskunalari</span>
                    <FaAngleRight />
                    <span className="current100">{product.name}</span>
                </div>

                <div className="tra100">
                    <img src={product.imageUrl} alt={product.name} />
                </div>

                <div className="container100">
                    <p className="new100">Yangi mahsulot</p>
                    <span className='ml100'>ID: {product.id}</span>
                    <h1>{product.name}</h1>

                    <div className="rat100">
                        <IoIosStar className='jk100' />
                        <IoIosStar className='jk100' />
                        <IoIosStar className='jk100' />
                        <IoIosStar className='jk100' />
                        <IoIosStarOutline className='jkk100' />
                        <span className='d100'>4.8</span>
                        <span className='d1100'>· 124 ta sharh · 500+ sotilgan</span>
                    </div>

                    <div className="pe100">
                        <p className='m22100'>Ulgurji narxlar</p>
                        <span className='hl1100'>
                            <FaBoxArchive className='nee100' />
                            MOQ: {product.moq || 2} dona
                        </span>
                        <div className="ke100">
                            <div className="card100">
                                <p className='l100'>1 - 10 dona</p>
                                <h2>{product.price} so'm</h2>
                            </div>
                            <div className="card100 sev100">
                                <span className="bad100">OMMABOP</span>
                                <p className='l100'>11 - 50 dona</p>
                                <h2 className='dal100'>{product.discountedPrice} so'm</h2>
                            </div>
                            <div className="card100">
                                <p className='l100'>50+ dona</p>
                                <h2>{product.wholesalePrice || product.price} so'm</h2>
                            </div>
                        </div>
                    </div>

                    <h3 className='maa100'>KONFIGURATSIYANI TANLANG</h3>
                    <div className="var100">
                        <button className='g100'>Standard</button>
                        <button className="btn11100">Pro-Max X1</button>
                        <button className='g100'>Heavy Duty</button>
                    </div>

                    <div className="com100">
                        <div className='nee1100'>
                            <span className='bekk100'>
                                <BsPatchCheck className='derr100' />
                                TASDIQLANGAN
                            </span>
                            <h4>{product.sellerName || 'Sotuvchi'}</h4>
                            <p>
                                <IoLocationOutline className='o100' />
                                {product.location || 'Toshkent, UZ'}
                            </p>
                        </div>
                        <button className="btn3100">Do'konni ko'rish</button>
                    </div>
                </div>

                <div className="dei100">
                    <span className='lek100'>Tavsif</span>
                    <span className='leee100'>Yetkazib berish</span>
                    <span className='leee100'>Sharhlar</span>
                </div>

                <span className='dap100'>Mahsulot haqida ma'lumot</span>
                <div className='fel100'>
                    {product.description || "Mahsulot haqida ma'lumot"}
                </div>

                <div className="div100">
                    <div className="mep100">
                        <div className="feg100">
                            <p>QUVVATI</p>
                            <h3>5.5 kW</h3>
                        </div>
                    </div>
                    <div className="mep1100">
                        <div className="feg1100">
                            <p>KO'TARISHI</p>
                            <h3>500 kg</h3>
                        </div>
                    </div>
                </div>

                <div className="span1100">
                    <h2>Logistika</h2>
                    <h3>
                        <LiaTruckSolid className='qe100' />
                        Tezkor yetkazib berish
                    </h3>
                    <p>Toshkent bo'ylab 24 soat ichida.</p>
                </div>

                <div className="dik100">
                    <h3>Sifat nazorati</h3>
                    <p>Har bir uskuna test sinovidan o'tkaziladi.</p>
                </div>
            </div>

            <div className="lep100">
                <h3>Umumiy miqdor:</h3>
            <h2>{product.price * count} so'm</h2>
            </div>

            <div className="coun100">
                <button className="btn10100 minus100" onClick={handleDecrement}>-</button>
                <span className="count100">{count}</span>
                <button className="btn10100 plus100" onClick={handleIncrement}>+</button>
            </div>

            <div className="acti100">
                <button className="btn101100 outline100">
                    <MdOutlineChat className="icon1100" />
                    Chat orqali yozish
                </button>
                <button className="btn20100 outline100">
                    <BsFileEarmarkPdf className="icon2100" />
                    RFQ
                </button>
                <button className="btn40100 primary100" onClick={handleAddToCart}>
                    <FaCartPlus className="icon3100" />
                    Savatga qo'shish
                </button>
            </div>
        </div>
    )
}

export default PageOne;