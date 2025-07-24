import React from 'react'
import {  FaFacebook, FaInstagram, FaPhone, FaTelegram, FaTwitter } from 'react-icons/fa'
import { FaMapLocation } from 'react-icons/fa6'
import Cards from '../assets/credit-cards.webp'
import {motion} from 'framer-motion'

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } }
}

const Footer = () => {
  return (
    <>
    <footer className ='bg-[#aa6d6b] pt-12 pb-8 text-white'>
        <div className='container py-14 overflow-hidden'>
            <motion.div
              className='grid grid-cols-1 md:grid-cols-3 gap-8'
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 0.3 }}
            >
                <motion.div 
                  variants={itemVariants}
                  className='space-y-6'>
                    <h1 className='text-3xl font-bold'>Playing</h1>
                    <p className='text-sm max-w-[300px]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                    </p>
                   <div className='space-y-6'>
                   <p className='flex items-center gap-2 mt-4'>
                        <FaPhone></FaPhone>
                        +91 9876543210
                    </p>
                    <p className='flex items-center gap-2 mt-2'>
                        {""}
                        <FaMapLocation></FaMapLocation> Up,Bihar
                    </p>
                   </div>
                </motion.div>

                <motion.div 
                  variants={itemVariants}
                  className='space-y-6'>
                    <h1 className='text-3xl font-bold'>Quick Links</h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                    <div>
                       <ul className='space-y-2'>
                       <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Contact</li>
                        <li>Privacy Policy</li>
                       </ul>
                    </div>
                    <div>
                       <ul className='space-y-2'>
                       <li>Blog</li>
                        <li>Contact Us</li>
                        <li>Terms & Conditions</li>
                        <li>Support</li>
                       </ul>
                    </div>
                    </div>
                   </motion.div>

                   <motion.div 
                    variants={itemVariants}
                    className='space-y-6'>
                    <h1 className='text-3xl font-bold'>Follow Us</h1>
                    <div className='flex items-center gap-4'>
                        <FaFacebook className='text-3xl hover:scale-105 duration-300'></FaFacebook>
                        <FaInstagram className='text-3xl hover:scale-105 duration-300'></FaInstagram>
                        <FaTwitter className='text-3xl hover:scale-105 duration-300'></FaTwitter>
                        <FaTelegram className='text-3xl hover:scale-105 duration-300'></FaTelegram>
                    </div>
                    <motion.div 
                      variants={itemVariants}
                      className='space-y-4'>
                   <p>Payment Methods</p>
                   <img src={Cards} alt="online payment" className='w-[100%]' />
                   </motion.div>
                   </motion.div>
            </motion.div>

            <div className='space-y-4'>
                    <p className='text-white text-center mt-8 border-t-2 pt-8'> &copy; 2025 Armor. All rights reserved.</p>
                   </div>
        </div>
    </footer>
    </>
  )
}

export default Footer
