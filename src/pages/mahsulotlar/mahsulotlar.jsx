import React, { useState } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { AiOutlineDelete } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineFilter } from 'react-icons/ai';
import { AiOutlineSortAscending } from 'react-icons/ai';
import { IoFilter } from "react-icons/io5";
import { MdSort } from "react-icons/md";
import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineShopping } from 'react-icons/ai';
import './mahsulotlar.css';
import { HiClipboardCheck } from "react-icons/hi";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
const products = [
  {
    id: 1,
    status: "FAOL",
    sku: "MB-TSH-001",
    name: "Erkaklar paxtali futbolkasi, Premium-Sifat",
    price: "15,000 - 20,000 UZS",
    moq: "50 dona",
    views: "1.2k ko'rilgan",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200",
  },
  {
    id: 2,
    status: "QORALAMA",
    sku: "MB-DRS-042",
    name: "Ayollar shoyi ko'ylagi (Bahorgi kolleksiya)",
    price: null,
    moq: null,
    views: "2 soat oldin yangilangan",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=200",
  },
  {
    id: 3,
    status: "FAOL",
    sku: "MB-SHOE-11",
    name: "Klassik charm poyabzal, Jigarrang",
    price: "120,000 - 150,000 UZS",
    moq: "12 juft",
    views: "842 ko'rilgan",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200",
  },
  {
    id: 4,
    status: "FAOL",
    sku: "MB-SPRT-05",
    name: "Sport kiyimi to'plami, Mikrofibra",
    price: "85,000 - 95,000 UZS",
    moq: "30 to'plam",
    views: "2.3k ko'rilgan",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=200",
  },
];

const Mahsulotlar = () => {
  const [activeTab, setActiveTab] = useState("Barchasi (24)");
  const tabs = [
    "Barchasi (24)", 
    "Faol (18)", 
    "Qoralama (6)"];

  return (
    <div className="l1">
      
      <div className="l2">
        <div className="l3">
          {tabs.map((tab) => {
            let tabClass = "l4";
            if (activeTab === tab) {
              tabClass += " l5";
            }

            return (
              <button
                key={tab}
                className={tabClass}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            );
          })}
        </div>

        <div className="l6">
          <button className="l7">
           <IoFilter /> Filter
          </button>
          <button className="l7">
           <MdSort /> Saralash
          </button>
        </div>
      </div>

      <div className="l8">
        {products.map((product) => {
          
          
          let statusClass = "l14";
          if (product.status === "FAOL") {
            statusClass += " l5";
          } else {
            statusClass += " l15";
          }

          let priceClass = "l18";
          if (!product.price) {
            priceClass += " l19";
          }

          let priceText = "Narx belgilanmagan";
          if (product.price) {
            priceText = product.price;
          }

          return (
            <div className="l9" key={product.id}>
              
              <div className="l10">
                <img src={product.image} alt={product.name} />
                {product.status === "QORALAMA" && (
                  <span className="l11">DRAFT</span>
                )}
              </div>

              <div className="l12">
                <div className="l13">
                  <span className={statusClass}>
                    {product.status}
                  </span>
                  <span className="l16">SKU: {product.sku}</span>
                </div>

                <h3 className="l17">{product.name}</h3>

                <div className={priceClass}>
                  {priceText}
                </div>

                <div className="l20">
                  {product.moq && (
                    <span className="l21">
                      <AiOutlineShopping /> MOQ: {product.moq}
                    </span>
                  )}
                  <span className="l21">
                    <AiOutlineEye /> {product.views}
                  </span>
                </div>
              </div>

              <div className="l22">
                <button className="l222" title="Tahrirlash">
                 <MdOutlineModeEditOutline />
                </button>
                <button className="l23" title="O'chirish">
                 <RiDeleteBin6Line />
                </button>
              </div>

            </div>
          );
        })}
      </div>

      <div className="l26">
        <button className="l27">Yana yuklash</button>
      </div>

      <button className="l28">
       <span><AiOutlinePlus /> </span>Yangi mahsulot
      </button>

    </div>
  );
};

export default Mahsulotlar;