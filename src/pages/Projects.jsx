import React, { useRef } from 'react'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { motion, useScroll } from 'framer-motion'

import { ArrowUpRight } from 'lucide-react'


export default function Projects() {
    const container = useRef(null)
    const { scrollYProgress } = useScroll();
  return (
    <LocomotiveScrollProvider
      options={
        {
          smooth: true,
          // ... all available Locomotive Scroll instance options 
        }
      }
      watch={
        []
      }
      containerRef={container}
    >
      <div data-scroll-container ref={container} className='bg-neutral-900 poppins pt-28 h-screen  overflow-hidden hide-scroll'>        
        <div className='w-3/4 flex flex-col gap-8 mx-auto'>
          <motion.div initial={{opacity:0, y:-10}} animate={{opacity:1, y:0}} transition={{duration:0.6,delay:0.6,ease:[0.76,0,0.24,1]}}   className=' text-yellow-500 text-4xl'>PROJECTS</motion.div>
          <section className=' divide-y-2 text-2xl text-neutral-400 divide-neutral-500'>
            <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.6,delay:0,ease:[0.76,0,0.24,1]}}   className='flex h-12 justify-between overflow-hidden'>
                <motion.div whileHover={{y:-40}}  className='flex h-10 flex-col item-start'>
                    <a href="https://github.com/vaisagh01" target='_blank' className='min-h-11'>E-commerce App</a>
                    <a href="https://github.com/vaisagh01" target='_blank' className='flex min-h-11 justify-start w-full'>visit<ArrowUpRight/></a>
                </motion.div>
                <div>
                  MERN full-stack
                </div>
            </motion.div>
            
            <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.6,delay:0.1,ease:[0.76,0,0.24,1]}}  className='flex h-12 justify-between overflow-hidden'>
                <motion.div whileHover={{y:-40}}  className='flex flex-col  h-10 item-start'>
                    <a href="https://github.com/vaisagh01" target='_blank' className='min-h-11'>TMDB Movie APP</a>
                    <a href="https://github.com/vaisagh01" target='_blank' className='flex min-h-11 justify-start w-full'>visit<ArrowUpRight/></a>
                </motion.div>
                <div>
                  React.js
                </div>
            </motion.div>
            
            <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.6,delay:0.2,ease:[0.76,0,0.24,1]}}  className='flex h-12 justify-between overflow-hidden'>
                <motion.div whileHover={{y:-40}}  className='flex flex-col  h-10 item-start'>
                    <a href="https://github.com/vaisagh01" target='_blank' className='min-h-11'>Feedback FAB component</a>
                    <a href="https://github.com/vaisagh01" target='_blank' className='flex min-h-11 justify-start w-full'>visit<ArrowUpRight/></a>
                </motion.div>
                <div>
                  React.js
                </div>
            </motion.div>
            
            <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.6,delay:0.3,ease:[0.76,0,0.24,1]}}  className='flex h-12 justify-between overflow-hidden'>
                <motion.div whileHover={{y:-40}}  className='flex flex-col  h-10 item-start'>
                    <a href="https://github.com/vaisagh01" target='_blank' className='min-h-11'>Google clone</a>
                    <a href="https://github.com/vaisagh01" target='_blank' className='flex min-h-11 justify-start w-full'>visit<ArrowUpRight/></a>
                </motion.div>
                <div>
                  React.js
                </div>
            </motion.div>
            
            <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.6,delay:0.4,ease:[0.76,0,0.24,1]}}  className='flex h-12 justify-between overflow-hidden'>
                <motion.div whileHover={{y:-40}}  className='flex flex-col  h-10 item-start'>
                    <a href="https://github.com/vaisagh01" target='_blank' className='min-h-11'>Convergence 2024</a>
                    <a href="https://github.com/vaisagh01" target='_blank' className='flex min-h-11 justify-start w-full'>visit<ArrowUpRight/></a>
                </motion.div>
                <div>
                  HTML/CSS/JS
                </div>
            </motion.div>
            
            <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.6,delay:0.5,ease:[0.76,0,0.24,1]}}  className='flex h-12 justify-between overflow-hidden'>
                <motion.div whileHover={{y:-40}}  className='flex flex-col  h-10 item-start'>
                    <a href="https://github.com/vaisagh01" target='_blank' className='min-h-11'>Notes App</a>
                    <a href="https://github.com/vaisagh01" target='_blank' className='flex min-h-11 justify-start w-full'>visit<ArrowUpRight/></a>
                </motion.div>
                <div>
                  React.js
                </div>
            </motion.div>
            
          </section>
        </div>
      </div>
    </LocomotiveScrollProvider>
  )
}
