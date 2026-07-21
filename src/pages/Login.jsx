import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/home');
  };

  return (
    <div className="au-log">
      <div className="a-card">
        <h2>Xush kelibsiz!</h2>
        <p>Kirish va xaridni davom ettirish</p>
        <h3>SMS KOD ORQALI KIRISH</h3>
        <div className="auth-goo">
          <div className="auth-sev">

            <input type="text" placeholder="+998   90 123 45 67" />
            <h4 className='au-n'>Sizga SMS orqali tasdiqlash kodi yuboriladi.</h4>
          </div>
        </div>

        <button className="au-btn" onClick={handleLogin}>Kirish</button>
        <button className="au-btn1">Ro‘yxatdan o‘tish</button>

        <div className="au-dep">
        </div>
        <p className='au-m'>Davom etish orqali siz bizning
          <span>Xizmat ko'rsatish</span> <br />
          <span>shartlari</span>
          va <span>Maxfiylik siyosatimizga</span> rozilik <br />
          bildirasiz.</p>
      </div>
    </div>
  );
}

export default Login;