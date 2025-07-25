import React from 'react'
import Headphone4 from '../assets/headphone.png'
import {motion} from 'framer-motion'
import { UpdateFollower } from 'react-mouse-follower'
import { fadeUp } from './Services'
const Banner = () => {
  return (
    <>
    <section id="banner" className="overflow-x-hidden">
        <div className='container py-14 grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 gap-12'>
        <div>
            <motion.img 
            initial={{opacity:0,x:0,rotate:-180}}
            whileInView={{opacity:1,x:0,rotate:0}}
            transition={{duration:0.8, delay:0.2,ease:"easeInOut"}}
            viewport={{ once: true, amount: 0.5 }}
            src={Headphone4} alt="headphone" className='w-[300px] md:w-[400px] lg:w-[350px] xl:w-[400px]'/>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className='flex flex-col justify-center '
        >
            <div className='text-center md:text-left space-y-6 lg:max-w-[450px]'>
                <motion.h1
                variants={fadeUp(0.7)}
                initial="hidden"
                whileInView="show"
                className='text-3xl lg:text-4xl font-semibold font-poppins'>The Latest Headphones with the best quality</motion.h1>
                <motion.p 
                variants={fadeUp(0.9)}
                initial="hidden"
                whileInView="show"
                className='text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam temporibus voluptates sit nihil, nesciunt alias?</motion.p>
                <UpdateFollower
                 mouseOptions={
                  {
                    backgroundColor:'white',
                    zIndex:9999,
                    followSpeed:0.5,
                    rotate:-720,
                    mixBlendMode:'difference',
                    scale:10,
                  }
                }
                >
                <motion.button 
                variants={fadeUp(1.2)}
                initial="hidden"
                whileInView="show"
                className='border-2 border-[#e33343] 
                text-[#e33343] px-6 py-2 rounded-md hover:bg-[#e33343]
                 hover:text-white'>Shop Now</motion.button>
                </UpdateFollower>
               
            </div>
        </motion.div>

        </div>
    </section>
    </>
  )
}

export default Banner
