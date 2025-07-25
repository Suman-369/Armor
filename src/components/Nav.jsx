
import { MdMenu, MdClose } from 'react-icons/md';
import {motion} from "framer-motion"
import { UpdateFollower } from 'react-mouse-follower';
import { NavLink } from "react-router-dom";
import { useState } from 'react';


const NavMenu = [
    { id: 1, title: 'Home', to: '/' },
    { id: 2, title: 'Services', to: '/services' },
    { id: 3, title: 'Blog', to: '/blog' },
    { id: 4, title: 'About', to: '/banner',},
    { id: 5, title: 'Contact', to: '/contact' }
];


const Nav = (props) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
   <>
   <div className='bg-brand-dark text-white py-6 font-varela'>
     <motion.nav
     initial={{opacity:0}}
     animate={{opacity:1}}
     transition={{duration:1 , delay:0.5}}
     className=' container flex justify-between items-center'>
        <div>
            <a href="#" className='text-xl font-bold uppercase'>Armor</a>
        </div>
        <div className='hidden md:block'>
            <ul className='flex items-center gap-4'>
                {NavMenu.map((item)=>(
                    <li key={item.id}>
                        <UpdateFollower
                        mouseOptions={{
                            backgroundColor:"white",
                            zIndex:999,
                            followSpeed:1.5,
                            scale:5,
                            mixBlendMode:'difference',
                        }}
                        >
                        {item.title === 'About' ? (
                          <NavLink to="/about" className='inline-block text-sm py-2 px-3 uppercase'>
                            {item.title}
                          </NavLink>
                        ) : (
                          <NavLink to={item.to} className='inline-block text-sm py-2 px-3 uppercase'>
                            {item.title}
                          </NavLink>
                        )}
                        </UpdateFollower>
                    </li>
                ))}
                <UpdateFollower
                        mouseOptions={
                            {
                                backgroundColor:"white",
                                zIndex:999,
                                followSpeed:1.5,
                                scale:5,
                                mixBlendMode:'difference',
                            }
                        }
                        >
                <div>
                   <button
                     className='bg-primary text-white font-semibold rounded-full px-6 py-2 shadow-lg transition-all duration-300 ease-in-out hover:bg-white hover:text-primary hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
                     onClick={props.onAuthClick}
                   >
                    Log In
                   </button>
                </div>
                </UpdateFollower>
            </ul>
        </div>

        <div className='md:hidden z-50'>
            <button
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMobileMenuOpen(v => !v)}
              className='focus:outline-none'
            >
              {mobileMenuOpen ? (
                <MdClose className='text-4xl transition-transform duration-300 rotate-90' />
              ) : (
                <MdMenu className='text-4xl transition-transform duration-300' />
              )}
            </button>
        </div>
    </motion.nav>
    {/* Mobile Menu Overlay */}
    {mobileMenuOpen && (
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.4, type: 'spring', bounce: 0.2 }}
        className='fixed inset-0 bg-brand-dark bg-opacity-95 flex flex-col items-center justify-center gap-8 z-40 animate-pop'
      >
        <ul className='flex flex-col gap-8 w-full items-center'>
          {NavMenu.map((item) => (
            <li key={item.id} className='w-full text-center'>
              <NavLink
                to={item.title === 'About' ? '/about' : item.to}
                className='block text-2xl font-semibold py-3 px-6 rounded-lg hover:bg-primary hover:text-white transition-colors duration-200 uppercase tracking-wide'
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.title}
              </NavLink>
            </li>
          ))}
          <li className='w-full text-center'>
            <button
              className='bg-primary text-white font-semibold rounded-full px-8 py-3 shadow-lg transition-all duration-300 ease-in-out hover:bg-white hover:text-primary hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 text-lg w-4/5 mx-auto'
              onClick={() => {
                setMobileMenuOpen(false);
                if (props.onAuthClick) props.onAuthClick();
              }}
            >
              Log In
            </button>
          </li>
        </ul>
      </motion.div>
    )}
   </div>
   </>
  )
}

export default Nav
