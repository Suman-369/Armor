import React from 'react'
import { UpdateFollower } from 'react-mouse-follower'

const BannarTxt = () => {
  return (
    
    <section className='py-14 text-center font-varela'>
        <div className='container'>
            <div className='bg-gradient-to-t from-[#aa6d6b] to-[#aa6d6b]/70
             text-white rounded-3xl p-8 hover:scale-105 hover:shadow-2xl duration-500'>
                <UpdateFollower
                mouseOptions={
                    {
                        backgroundColor:'black',
                        zIndex:9999,
                        followSpeed:0.5,
                        mixBlendMode:'screen',
                        scale:10,
                    }
                }
                >
                <p className='font-bold text-4xl max-w-[700px] mx-auto leading-normal'>
                Headphones With Good Quality And Affordable Price
                </p>
                </UpdateFollower>
            </div>
        </div>
    </section>
  )
}

export default BannarTxt
