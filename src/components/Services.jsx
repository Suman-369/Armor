import React from 'react'
import Icon1 from '../assets/icons/obj1.png'
import Icon2 from '../assets/icons/obj2.png'
import Icon3 from '../assets/icons/obj3.png'
import { UpdateFollower } from 'react-mouse-follower'
import { motion } from 'framer-motion'

const servicesData = [
    {
        id:1,
        title:"Free Shipping",
        icon:Icon1,
        description:"Free shipping on all orders over $100",
        delay:0.5,
    },
    {
        id:2,
        title:"Free Shipping",
        icon:Icon2,
        description:"Free shipping on all orders over $100",
        delay:0.8,
    },
    {
        id:3,
        title:"Free Shipping",
        icon:Icon3,
        description:"Free shipping on all orders over $100",
        delay:1.1,
    }
]


 export const fadeUp = (delay) => {
    return {
        hidden:{
            opacity:0,
            y:40,
        },
        show:{
            opacity:1,
            y:0,
            transition:{
                duration:0.5,
                delay:delay,
            }
        }
    }
}


const Services = () => {
  return (
    <>
    <section className='bg-gray-200 py-8 font-poppins'>
        <div className='container py-14'>
            <motion.h1
                variants={fadeUp(0.2)}
                initial="hidden"
                whileInView="show"
                className='text-4xl sm:text-5xl font-extrabold text-center pb-4  relative'
            >
                Our  Services
                <span className="block mx-auto mt-3 w-40 h-1 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-pulse"></span>
            </motion.h1>
       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((data) => (
                <UpdateFollower 
                mouseOptions={
                    {
                        backgroundColor:"white",
                        zIndex:9999,
                        followSpeed:1.5,
                        scale:5,
                        rotate:720,
                        mixBlendMode:'darken',
                        backgroundElement:(
                            <motion.div
                                animate={{
                                    rotate: [0, 360],
                                    scale: [1, 1.2, 1]
                                }}
                                transition={{
                                    duration: 2,
                                    ease: "easeInOut",
                                    repeat: Infinity
                                }}
                            >
                                <img src={data.icon} alt="image" />
                            </motion.div>
                        )
                    }
                }
                >
                    <motion.div
                        variants={fadeUp(data.delay)}
                        initial="hidden"
                        whileInView="show"
                        className='flex flex-col items-center justify-center p-5 max-w-[300px] mx-auto shadow-lg  bg-white rounded-xl '
                    >
                        <img src={data.icon} alt={data.title} className="mb-4 w-[100px]"/>
                   
                    <div className='text-center space-y-4'>
                    <h1 className='text-2xl font-bold mb-2'>{data.title}</h1>
                    <p className='text-sm text-gray-700 text-center'>{data.description}</p>
                    </div>
                    </motion.div>
                        
                </UpdateFollower>
            ))}
        </div>
        </div>
    </section>
    
    </>
  )
}

export default Services
