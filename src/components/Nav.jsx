
import { MdMenu } from 'react-icons/md';
import {motion} from "framer-motion"
import { UpdateFollower } from 'react-mouse-follower';
import gsap from 'gsap';

const NavMenu = [
    { id: 1, title: 'Home' },
    { id: 2, title: 'Product' },
    { id: 3, title: 'Blog' },
    { id: 4, title: 'About' },
    { id: 5, title: 'Contact' }
];


const Nav = (props) => {
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
                        <a href="#" className='inline-block text-sm py-2 px-3 uppercase'>{item.title}</a>
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

        <div className='md:hidden'>
            <MdMenu className='text-4xl'></MdMenu>
        </div>
    </motion.nav>
   </div>
   </>
  )
}

export default Nav
