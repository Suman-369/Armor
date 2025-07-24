import React from 'react'
import Blog1 from '../assets/blogs/blog1.jpg'
import Blog2 from '../assets/blogs/blog2.jpg'
import Blog3 from '../assets/blogs/blog3.jpg'
import Blog4 from '../assets/blogs/blog4.jpg'
import { UpdateFollower } from 'react-mouse-follower'


const blogData = [
    {
        id:1,
        img:Blog1,
        title:"The Best Headphones For 2025",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        link:"#"
    },
    {
        id:2,
        img:Blog2,
        title:"The Best Headphones For 2025",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        link:"#"
    },
    {
        id:3,
        img:Blog3,
        title:"The Best Headphones For 2025",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        link:"#"
    },
    {
        id:4,
        img:Blog4,
        title:"The Best Headphones For 2025",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        link:"#"
    }
]

const Blog = () => {
  return (
    <>
    
    <section className=' bg-amber-50'>
        <div className='container py-14'>
            <h1 className='text-4xl sm:text-5xl font-extrabold text-center pb-8  relative'
            >Latest Blog</h1>
            <div className='grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-6'>
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
                        className='flex flex-col items-center justify-center p-5
                        max-w-[300px] mx-auto shadow-lg rounded-md bg-white hover:-translate-y-2 duration-300
                        '
                        key={data.id}>
                            <img src={data.img} alt={data.title} />
                         <div className='space-y-2'> 
                        <h1 className='text-lg font-bold line-clamp-2'>{data.title}</h1>
                        <p className='text-center'>{data.desc}</p>
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
