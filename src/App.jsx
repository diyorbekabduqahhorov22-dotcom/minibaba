import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';
import PageThree from './pages/PageThree';
import Navbar from './pages/navabar/navbar';
import Footer from './pages/Footer/footer';
import { CartProvider } from './createContext/createContext';

function App() {
  return (
    <>
      <CartProvider>
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<PageTwo />} />
          <Route path="/page-one" element={<PageOne />} />
          <Route path="/page-one/:slug" element={<PageOne />} />
          <Route path="/page-three" element={<PageThree />} />
          <Route path="/page-three/:slug" element={<PageThree />} />
        </Routes>
        <Footer />
      </CartProvider>
    </>
  );
}

export default App;