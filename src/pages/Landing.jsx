import React, { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Landing() {
    const [copied, setCopied] = useState(false)
    const handleCopy = () => {
        navigator.clipboard.writeText('vaisuro45@gmail.com');
        setCopied(true)
    }
    const text = useRef(null);
    const { scrollYProgress } = useScroll({
      target:text,
      offset: ['start 40%','end end']
    });
    const title = useTransform(scrollYProgress, [0,1],[0,1])
    
    return (
        <motion.div 
        ref={text}
        style={{opacity:title}}
        className='mx-auto h-screen rounded-3xl flex items-center justify-center '>
            <section 
            className=' flex flex-col w-3/4 gap-5 lg:text-5xl md:text-5xl text-4xl my-20 '>
                <motion.p   
                className='drop-shadow-md'>
                    I am Vaisagh Suresh, I'm a student web  
                    <span 
                    className='text-neutral-100'> Developer </span>
                     and 
                    <span className='text-neutral-200 italic font-serif'>  designer </span> based in Bangalore. I love creating interactive
                         websites with latest technologies
                </motion.p>
                
            </section>
            
        </motion.div>
  )
}
