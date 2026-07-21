import { LuPackage } from "react-icons/lu"
import { FaBitcoin } from "react-icons/fa"
import { MdOutlineEmail } from "react-icons/md"
import { MdOutlineLocalPhone } from "react-icons/md"
import "./footer.css"

const Footer = () => {
    return (
        <footer className="foo">
            <div className="sec1">
                <h3><div className="box"><span className='m1'><LuPackage /></span></div>Minibaba</h3>
                <p>O'zbekistondagi eng yirik ulgurji savdo <br />
                    platformasi. Biz tadbirkorlar va zavodlarni <br />
                    bitta joyga jamlaymiz.</p>
                <span className='let'>
                    <p><FaBitcoin /></p>
                    <p><MdOutlineEmail /></p>
                    <p><MdOutlineLocalPhone /></p>
                </span>
            </div>

            <div className="sec1">
                <h3>Xaridorlar uchun</h3>
                <p>Qanday buyurtma berish</p>
                <p>To'lov usullari</p>
                <p>Yetkazib berish</p>
                <p>Kafolat va qaytarish</p>
            </div>

            <div className="sec1">
                <h3>Sotuvchilar uchun</h3>
                <p>Sotuvchi bo'lish</p>
                <p>Sotuvchilar qoidalari</p>
                <p>Reklama va marketing</p>
                <p>Logistika yordami</p>
            </div>

            <div className="sec1">
                <h3>Ilovamizni yuklang</h3>
                <p>Har doim aloqada bo'ling va eng yaxshi <br />
                    narxlardan xabardor bo'ling.</p>
                <button className="btn6">App Store</button>
                <button className="btn6">Google Play</button>
            </div>
           
            <div className="copyright">
                <span className="man">© 2024 Minibaba Marketplace. Barcha huquqlar himoyalangan.</span>
            </div>
            <br />
        </footer>
    )
}

export default Footer;