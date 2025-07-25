import React from 'react'
import Blog1 from '../assets/blogs/blog1.jpg'
import Blog2 from '../assets/blogs/blog2.jpg'
import Blog3 from '../assets/blogs/blog3.jpg'
import Blog4 from '../assets/blogs/blog4.webp'
import { UpdateFollower } from 'react-mouse-follower'


const blogData = [
    {
        id:4,
        img:Blog4,
        title:"The Best Headphones For 2025",
        desc:"The Armor headphones are marketed as offering immersive sound, rich bass, clear mids, and sharp treble, ideal for zero-latency gaming and high-quality audio, at an accessible price point of Rs. 2,999. A YouTube video further details this launch .",
        link:"#"
    },
    {
        id:1,
        img:Blog1,
        title:"Solid, high-performance, stylish gaming audio",
        desc:"Lorem ipsum dolor sit amet No Gimmicks, just a solid all-rounder for gamers who want performance without compromise and style without flashiness. It’s a fresh take on gaming audio aesthetics that doesn’t scream “RGB Everything” - instead, it feels refined but still fun adipisicing elit. Quisquam, quos.",
        link:"#"
    },
    {
        id:2,
        img:Blog2,
        title:"The Best GOAT Headphones ",
        desc:"Easily the greatest headphones to ever launch on April 1st, 2025 globally. No bias. Just facts! P.S. Sales aren’t live yet and I had to put something here… so yeah, I wrote this.",
        link:"#"
    },
    {
        id:3,
        img:Blog3,
        title:"A Most Wondrous Crown of Sound",
        desc:"This magical headpiece is most wondrous! Sits on mine head like a king’s crown, and the music soundeth like angels in mine ears. Truly a fine relic of modern craft. Would buy again, lest it be stolen by goblins.",
        link:"#"
    },
    
]

const Blog = (props) => {
  return (
    <>
    
    <section className='bg-gradient-to-b from-amber-50 to-white py-10' {...props}>
        <div className='container py-8'>
            <h1 className='text-4xl sm:text-5xl font-extrabold text-center pb-8 relative'>
            Latest Blog</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                {blogData.map((data)=>{
                    return(
                        <UpdateFollower 
                        mouseOptions={{
                            backgroundColor:'black',
                            zIndex:9999,
                            followSpeed:1.5,
                           text:"read",
                           textFontSize:"3px",
                           scale:5,

                        }}
                        >
                        <div 
                        className='flex flex-col items-center justify-between p-6 w-full max-w-[320px] h-[480px] mx-auto shadow-lg rounded-xl bg-white hover:-translate-y-2 duration-300 border border-amber-100'
                        key={data.id}>
                            <img src={data.img} alt={data.title} className='w-full h-[180px] object-cover mb-4 rounded-md' />
                         <div className='space-y-2 flex-1 flex flex-col justify-between w-full'> 
                        <h1 className='text-lg font-bold line-clamp-2 text-center'>{data.title}</h1>
                        <p className='text-center text-sm text-gray-600'>{data.desc}</p>
                        </div>  
                        </div>
                        </UpdateFollower>
                    )
                })}
            </div>
        </div>
    </section>
    </>
  )
}

export default Blog
