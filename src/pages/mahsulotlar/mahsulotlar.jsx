import React, { useState, useEffect } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { IoFilter } from "react-icons/io5";
import { MdSort } from "react-icons/md";
import { AiOutlineEye, AiOutlineShopping } from 'react-icons/ai';
import { MdOutlineModeEditOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import './mahsulotlar.css';

const Mahsulotlar = () => {
  const [activeTab, setActiveTab] = useState("Barchasi (24)");
  const tabs = ["Barchasi (24)", "Faol (18)", "Qoralama (6)"];

  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState("");
  const [minOrderQuantity, setMinOrderQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [seller, setSeller] = useState("6a48bf6f633925fbd368a17e");

  useEffect(() => {
    fetch("https://uzum-api.onrender.com/api/products/")
      .then(res => res.json())
      .then(data => setProducts(Array.isArray(data) ? data : (data.data || [])))
      .catch(err => console.error(err));
  }, []);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
    setErrorMessage("");
    setName("");
    setImageUrl("");
    setPrice("");
    setMinOrderQuantity("");
    setCategory("");
    setSeller("6a48bf6f633925fbd368a17e");
  }

  function stopClick(e) {
    e.stopPropagation();
  }

  function changeName(e) {
    setName(e.target.value);
  }

  function changeImageUrl(e) {
    setImageUrl(e.target.value);
  }

  function changePrice(e) {
    setPrice(e.target.value);
  }

  function changeMinOrderQuantity(e) {
    setMinOrderQuantity(e.target.value);
  }

  function changeCategory(e) {
    setCategory(e.target.value);
  }

  function changeSeller(e) {
    setSeller(e.target.value);
  }

  async function handleAddProduct(e) {
    e.preventDefault();
    setErrorMessage("");

    try {
      const response = await fetch("https://uzum-api.onrender.com/api/products/", {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              name: name,
              imageUrl: imageUrl,
              price: Number(price),
              minOrderQuantity: Number(minOrderQuantity),
              category: category,
              seller: seller,
          })
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        const item = data.data || data;
        const newProduct = {
          id: item.id || item._id || Date.now(),
          status: item.status || "FAOL",
          sku: item.sku || "SKU-YOQ",
          name: item.name || name,
          price: item.price || price,
          minOrderQuantity: item.minOrderQuantity || minOrderQuantity,
          views: "Yangi qo'shildi",
          imageUrl: item.imageUrl || imageUrl,
        };

        setProducts([newProduct, ...products]);
        closeModal();
      } else {
        setErrorMessage(data.message || "Xatolik yuz berdi");
      }
    } catch (err) {
      console.error(err);
      setErrorMessage("Tarmoqda xatolik yuz berdi");
    }
  }

  function selectTab(tab) {
    setActiveTab(tab);
  }

  return (
    <div className="l1">

      <div className="l2">
        <div className="l3">
          {tabs.map((tab) => {
            let tabClass = "l4";
            if (activeTab === tab) {
              tabClass = "l4 l5";
            }

            return (
              <button
                key={tab}
                className={tabClass}
                onClick={() => selectTab(tab)}
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
          return (
            <div className="l9" key={product.id || product._id}>
              <div className="l10">
                <img src={product.imageUrl} alt={product.name} />
                {product.status === "QORALAMA" && <span className="l11">DRAFT</span>}
              </div>

              <div className="l12">
                <div className="l13">
                  <span className="l14">{product.status || "FAOL"}</span>
                  <span className="l16">SKU: {product.sku}</span>
                </div>
                <h3 className="l17">{product.name}</h3>
                <div className="l18">{product.price} UZS</div>
                <div className="l20">
                  <span className="l21"><AiOutlineShopping /> {product.minOrderQuantity}</span>
                  <span className="l21"><AiOutlineEye /> {product.views}</span>
                </div>
              </div>

              <div className="l22">
                <button className="l23" title="Tahrirlash">
                  <MdOutlineModeEditOutline />
                </button>
                <button className="l24" title="O'chirish">
                  <RiDeleteBin6Line />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="l25">
        <button className="l26">Yana yuklash</button>
      </div>

      <button className="l27" onClick={openModal}>
        <span><AiOutlinePlus /></span> Yangi mahsulot
      </button>

      {isModalOpen && (
        <div className="l28" onClick={closeModal}>
          <div className="l29" onClick={stopClick}>

            <div className="l30">
              <h2>Yangi mahsulot qo'shish</h2>
              <button className="l31" onClick={closeModal}>
                <IoClose />
              </button>
            </div>

            <form className="l32" onSubmit={handleAddProduct}>

              {errorMessage && (
                <div>
                  {errorMessage}
                </div>
              )}

              <div className="l33">
                <label>Mahsulot nomi</label>
                <input
                  type="text"
                  value={name}
                  onChange={changeName}
                  placeholder="Yangi mahsulot"
                  required
                />
              </div>

              <div className="l33">
                <label>Rasm URL</label>
                <input
                  type="text" placeholder='Rasm'
                  value={imageUrl}
                  onChange={changeImageUrl}
                  required
                />
              </div>

              <div className="l34">
                <div className="l33">
                  <label>Narx</label>
                  <input
                    type="number"
                    value={price}
                    onChange={changePrice}
                    placeholder="500000"
                    required
                  />
                </div>

                <div className="l33">
                  <label>Min. buyurtma soni</label>
                  <input
                    type="number"
                    value={minOrderQuantity}
                    onChange={changeMinOrderQuantity}
                    required
                  />
                </div>
              </div>

              <div className="l33">
                <label>Kategoriya</label>
                <input
                  type="text"
                  value={category}
                  onChange={changeCategory}
                  placeholder="Elektronika"
                  required
                />
              </div>

              <div className="l33">
                <label>Sotuvchi ID</label>
                <input
                  type="text"
                  value={seller}
                  onChange={changeSeller}
                  required
                />
              </div>

              <div className="l35">
                <button type="submit" className="l37">
                  Qoshish
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default Mahsulotlar;
