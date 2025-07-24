
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { UpdateFollower } from 'react-mouse-follower'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import Banner from './components/Banner'
import BannarTxt from './components/BannarTxt'
import Blog from './components/Blog'
import Footer from './components/Footer'
import { useState, useEffect } from 'react';
import SignInSignUp from './components/SignInSignUp';

const App = () => {
  const [showAuth, setShowAuth] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  useEffect(() => {
    if (location.pathname === '/' && location.hash === '#banner') {
      const el = document.getElementById('banner');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  return (
    <main className='overflow-x-hidden'>
      {/* Cross icon for non-home routes */}
      {!isHome && (
        <button
          style={{ position: "fixed", top: 20, right: 20, zIndex: 2000 }}
          onClick={() => navigate("/")}
          aria-label="Go Home"
        >
          <IoMdClose size={32} />
        </button>
      )}
      <UpdateFollower
        mouseOptions={{
          backgroundColor: "white",
          zIndex: 999,
          followSpeed: 1.5,
        }}
      >
        <Nav onAuthClick={() => setShowAuth(true)} />
      </UpdateFollower>
      <Routes>
        <Route path="/" element={<>
          <UpdateFollower mouseOptions={{ backgroundColor: "white", zIndex: 999, followSpeed: 1.5 }}>
            <Hero id="home" />
          </UpdateFollower>
          <UpdateFollower mouseOptions={{ backgroundColor: "black", zIndex: 999, followSpeed: 1.5 }}>
            <Services id="services" />
            <Banner id="banner" />
            <BannarTxt />
            <Blog id="blog" />
            <Footer id="contact" />
          </UpdateFollower>
        </>} />
        <Route path="/services" element={<UpdateFollower mouseOptions={{ backgroundColor: "black", zIndex: 999, followSpeed: 1.5 }}><Services id="services" /></UpdateFollower>} />
        <Route path="/blog" element={<Blog id="blog" />} />
        <Route path="/contact" element={<Footer id="contact" />} />
        <Route path="/about" element={<Banner id="banner" />} />
      </Routes>
      {showAuth && <SignInSignUp onClose={() => setShowAuth(false)} />}
    </main>
  );
}

export default App
