
import { UpdateFollower } from 'react-mouse-follower'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import Banner from './components/Banner'
import BannarTxt from './components/BannarTxt'
import Blog from './components/Blog'
import Footer from './components/Footer'

const App = () => {
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
        <Nav />
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
      </main>
  )
}

export default App
