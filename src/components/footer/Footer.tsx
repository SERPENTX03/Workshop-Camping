import { Facebook, Github } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <section className='mt-10'>
        <div className='flex md:flex-row flex-col gap-y-2 items-center md:justify-between py-6 md:py-12 px-10 border-t border-primary'>
            <h1 className='text-base md:text-2xl font-semibold'>Camping © 2025</h1>
            <span className='flex space-x-2'>
                
                
                <a href="https://github.com/SERPENTX03"><Github/></a>
                <a href="https://www.facebook.com/your.Chakkaphat/"><Facebook/></a>
                
                
                
                </span>
            <p className='text-base md:text-2xl font-semibold'>By Chakkaphat Chanlueang</p>
        </div>


    </section>
  )
}

export default Footer