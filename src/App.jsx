
import { UpdateFollower } from 'react-mouse-follower'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import Banner from './components/Banner'
import BannarTxt from './components/BannarTxt'
import Blog from './components/Blog'
import Footer from './components/Footer'
import { useState } from 'react';
import SignInSignUp from './components/SignInSignUp';

const App = () => {
  const [showAuth, setShowAuth] = useState(false);
  return (
      <main className='overflow-x-hidden'>
       <UpdateFollower
       mouseOptions={
        {
          backgroundColor:"white",
          zIndex:999,
          followSpeed:1.5,
        }
       }
       >
        <Nav onAuthClick={() => setShowAuth(true)} />
        <Hero />
        </UpdateFollower>
        <UpdateFollower
       mouseOptions={
        {
          backgroundColor:"black",
          zIndex:999,
          followSpeed:1.5,
        }
       }
       >
        <Services />
        <Banner />
        <BannarTxt />
        <Blog />
        <Footer />
        </UpdateFollower>
        {showAuth && <SignInSignUp onClose={() => setShowAuth(false)} />}
      </main>
  )
}

export default App
