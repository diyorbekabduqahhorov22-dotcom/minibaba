import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import './PageThree.css';
import { FaAngleRight, FaAngleDown, FaShoppingCart } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { BsPatchCheckFill, BsGridFill } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineVerified, MdOutlineBusiness } from "react-icons/md";


const PageThree = () => {
  const navigate = useNavigate();
  const { slug } = useParams();

  const finalSlug = slug || 'andijon-agro-market';

  const [seller, setSeller] = useState(null);
  const [loading, setLoading] = useState(true);

  async function GetSeller() {
    try {
      const res = await fetch(`https://uzum-api.onrender.com/api/sellers/${finalSlug}`);
      const data = await res.json();

      if (data.success) {
        setSeller(data.data);
      }
    } catch (error) {
      console.log("Xatolik:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    GetSeller();
  }, [finalSlug]);
  if (loading) {
    return <div>Yuklanmoqda...</div>;
  }

  if (!seller) {
    return <div>Sotuvchi topilmadi</div>;
  }

  const products = [
    {
      id: 1,
      name: "Premium Paxta Mateli Ko'ylak - Oq",
      price: "$5.20 - $8.00",
      moq: "MOQ: 100 DONA",
      img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop",
      badge: "Yangi to'plam"
    },
    {
      id: 2,
      name: "Erkaklar Professional Sport Oyoq kiyimi",
      price: "$14.50 - $18.20",
      moq: "MOQ: 50 JUFT",
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
      badge: "In Stock"
    },
    {
      id: 3,
      name: "Haqiqiy Charm Ayollar Sumkasi",
      price: "$25.00 - $32.00",
      moq: "MOQ: 20 DONA",
      img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop",
      badge: "Top selling"
    },
    {
      id: 4,
      name: "Qurilish Asboblari To'plami (82 bo'lak)",
      price: "$45.00 - $60.00",
      moq: "MOQ: 10 TO'PLAM",
      img: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=400&h=400&fit=crop",
      badge: "CUSTOMIZABLE"
    },
    {
      id: 5,
      name: "Oshxona Anjomlari To'plami - Silikon",
      price: "$3.40 - $5.10",
      moq: "MOQ: 200 DONA",
      img: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?w=400&h=400&fit=crop",
      badge: "Eco-friendly"
    },
    {
      id: 6,
      name: "Simsiz Quloqchinlar - V5.3 Bluetooth",
      price: "$12.00 - $15.00",
      moq: "MOQ: 50 DONA",
      img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop",
      badge: "Fast Shipping"
    },
    {
      id: 7,
      name: "Yog'ochdan Bolalar O'yinchoqlari",
      price: "$1.50 - $2.80",
      moq: "MOQ: 1000 DONA",
      img: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=400&fit=crop",
      badge: "Safety Certified"
    },
    {
      id: 8,
      name: "Sifatli Paypoqlar - 100% Paxta",
      price: "$0.45 - $0.70",
      moq: "MOQ: 1000 JUFT",
      img: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=400&h=400&fit=crop",
      badge: "Bulk Ready"
    },
    {
      id: 9,
      name: "Noutbuk uchun sumka va aksessuarlar",
      price: "$8.20 - $11.50",
      moq: "MOQ: 100 DONA",
      img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
      badge: "Tech Grade"
    },
    {
      id: 10,
      name: "Shishali Oziq-ovqat Idishlari To'plami",
      price: "$6.80 - $9.30",
      moq: "MOQ: 150 DONA",
      img: "https://images.unsplash.com/photo-1584346133934-a3afd2a5f41c?w=400&h=400&fit=crop",
      badge: "Fragile Care"
    }
  ];

  return (
    <div className="page900">
      <div className="content900">
        <div className="bread900">
          <span>Asosiy</span>
          <FaAngleRight className="arr900" />
          <span>Yetkazib beruvchilar</span>
          <FaAngleRight className="arr900" />
          <span className="act900">{seller.name}</span>
        </div>

        <div className="head900">
          <div className="logo900">
            <div className="avat" style={{ borderRadius: '5px', overflow: 'hidden' }}>
              <img
                src={seller.logoUrl}
                alt={seller.name}
              />
            </div>

            <div className="info900">
              <h1>{seller.name}</h1>
              <span className="tag900">ISHLAB CHIQARUVCHI</span>

              <p className="loc900">
                <IoLocationOutline /> {seller.location}
              </p>

              <div className="rat900">
                <span className="star900">
                  <IoIosStar /> {seller.rating}
                  <span className="ratingText900">({seller.reviewCount} ta sharh)</span>
                </span>
                <span className="exp900">{seller.experienceLabel}</span>
              </div>

              <div className="trst900">
                <BsPatchCheckFill className="trstIco900" />
                <span>{seller.reliabilityScore}% Ishonchlilik</span>
              </div>
            </div>
          </div>

          <div className="btns900">
            <button className="fol900">+ Follow</button>
            <button className="msg900">Xabar yuborish</button>
          </div>
        </div>

        <div className="tabs900">
          <button className="tab900 active900">
            <BsGridFill className="tabIcon900" /> Mahsulotlar
          </button>
          <button className="tab900">
            <MdOutlineBusiness className="tabIcon900" /> Kompaniya haqida
          </button>
          <button className="tab900">
            <MdOutlineVerified className="tabIcon900" /> Sertifikatlar
          </button>
        </div>

        <div className="grid900">
          {products.map((p) => (
            <div className="card900" key={p.id}>
              <div className="img900">
                <img src={p.img} alt={p.name} />
                <button className="wish900"><FiHeart /></button>
              </div>
              <div className="pinfo900">
                <h3 className="prodName900">{p.name}</h3>
                <p className="price900">{p.price}</p>
                <p className="moq900">{p.moq}</p>
                <div className="prodFooter900">
                  <span className="badge900">{p.badge}</span>
                  <button className="cartIcon900">
                    <FaShoppingCart />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="more900">
          <button className="btnMore900" onClick={() => navigate('/home')}>
            Ko'proq ko'rish <FaAngleDown />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageThree;