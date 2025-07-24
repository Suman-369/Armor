import React from 'react'
import Headphone from '../assets/headphone.png'
import Headphone2 from '../assets/headphone2.png'
import Headphone3 from '../assets/headphone3.png'
import {FaWhatsapp} from 'react-icons/fa'
import {AnimatePresence, motion} from 'framer-motion'
import { UpdateFollower } from 'react-mouse-follower'


const fadeUp = (delay = 0) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.5,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: 'easeInOut',
      },
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      y: 50,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  }
}

const headphoneData =[
    {
      id:1,
      title:"Headphone",
      price:100,
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos",
      model:"Model Brown",
      bgColor:"#8b5958",
      image:Headphone
    },
    {
      id:2,
      title:"Headphone2",
      price:100,
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos",
      model:"Lime Green",
      bgColor:"#638153",
      image:Headphone2
    },
    {
      id:3,
      title:"Headphone3",
      price:100,
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos",
      model:"Ocean Blue",
      bgColor:"#5d818c",
      image:Headphone3
    },
    
    ]

const Hero = (props) => {
  const [activeData,setActiveData] = React.useState(headphoneData[0])

 const handleActiveData = (data)=>{
  setActiveData(data)
 }


  return (
    <>
    <section className='bg-brand-dark text-white font-varela' {...props}>
        <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[700px]'>
            <div className='flex  flex-col justify-center py-14 md:py-0 xl:max-w-[500px]'>
              <div className='space-y-5 md:text-left text-center'>
              <AnimatePresence mode='wait'>
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
              <motion.h1
              key={activeData.id}
              variants={fadeUp(0.2)}
              initial='hidden'
              animate='show'
              exit='exit'
              
              className='text-3xl lg:text-6xl font-bold font-varela bg-gradient-to-r from-pink-500 via-yellow-400 to-green-400 bg-clip-text text-transparent drop-shadow-lg'
              
              >{activeData.title}</motion.h1>
             </UpdateFollower>
              </AnimatePresence>
              <AnimatePresence mode='wait'>
              <motion.p
              key={activeData.id}
              variants={fadeUp(0.3)}
              initial='hidden'
              animate='show'
              exit='exit'
              className='text-sm leading-loose text-white/80'>{activeData.description}</motion.p>
              </AnimatePresence>


              
         
              <AnimatePresence mode='wait'>    
              <UpdateFollower
              mouseOptions={
                {
                  backgroundColor:activeData.bgColor,
                  zIndex:9999,
                  followSpeed:0.5,
                  rotate:-720,
                  mixBlendMode:'difference',
                  scale:6,
                  backgroundElement:
                    <div>
                      <img src={activeData.image} alt="img" />
                    </div>
                  
                }
              }
              >
              <motion.button
              key={activeData.id}
              variants={fadeUp(0.3)}
              initial='hidden'
              animate='show'
              exit='exit'
              style={{
                backgroundColor:activeData.bgColor
              }}
              className='font-normal inline-block text-white px-4 py-2 rounded-sm'>Buy Now</motion.button>
               </UpdateFollower>
               </AnimatePresence>
              

              <motion.div
               initial={{opacity:0}}
               animate={{opacity:1}}
               transition={{duration:1 , delay:0.5}}
              className='flex items-center justify-center md:justify-start gap-4 !mt-24'>
                <div className='w-20 h-[1px] bg-white'></div>
                  <p className='uppercase text-sm font-varela'>Top Headphones for You</p>
                <div className='w-20 h-[1px] bg-white'></div>
                </motion.div>

              <motion.div
               initial={{opacity:0}}
               animate={{opacity:1}}
               transition={{duration:1 , delay:0.5}}
              className='grid grid-cols-3 gap-10'>
                {headphoneData.map((item)=>{
                  return(
                    <UpdateFollower
                    mouseOptions={
                      {
                        backgroundColor:item.bgColor,
                        zIndex:9999,
                        followSpeed:0.5,                       
                        scale:5,
                        text:"View Details",
                        textFontSize:"3px",
                      }
                    }
                    >
                   <div key={item.id} onClick={() => handleActiveData(item)} className='grid grid-cols-2 place-items-center cursor-pointer' >
                     <div>
                     <img src={item.image} alt="" className='w-[200px]'/>
                     </div>
                     <div className='space-y-2'>
                      <p className='text-base font-bold'>{item.price}</p>
                      <p className='text-xs font-normal text-nowrap'>{item.model}</p>
                     </div>
                    </div>
                    </UpdateFollower>
                  )
            })}
              </motion.div>
            </div>
            </div>
              <div className='flex flex-col justify-end items-center overflow-hidden' >

                <AnimatePresence mode='wait'>
                <motion.img 
                key={activeData.id}
                initial={{opacity:0,scale:0.9,
                  y:100
                }}
                animate={{opacity:1,scale:1,y:0}}
               transition={{duration:0.4,delay:0.2,ease:'easeInOut'}}
                exit={{opacity:0,scale:0.9,y:100,
                  transition:{
                    duration:0.2,
                  }
                }}
                
                src={activeData.image} alt="image" className='w-[300px] md:w-[400px] lg:w-[500px] xl:w-[550px]'/>
                </AnimatePresence>
              </div>

             <div className='text-3xl text-white fixed bottom-10 right-10 hover:rotate-[360deg] duration-500 z-[99999] mix-blend-difference'>
              <a href="">
                <FaWhatsapp />
              </a>
             </div>


           
           
        </div>
    </section>
    </>
  )
}

export default Hero
