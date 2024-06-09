import React, { useRef } from 'react'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { motion, useScroll } from 'framer-motion'
import Work from './Work'
import Work2 from './Work2'
import Work3 from './Work3'
import Contact from './Contact'
import Landing from './Landing'


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
            <motion.div whileHover={{scale:1.1, x:20}} initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.6,delay:0,ease:[0.76,0,0.24,1]}}  className='py-5 gap-20 flex'><span>2024</span>E-commerce App</motion.div>
            <motion.div whileHover={{scale:1.1, x:20}}  initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.6,delay:0.2,ease:[0.76,0,0.24,1]}}   className='py-5 gap-20 flex'><span>2024</span>Convergence 2024</motion.div>
            <motion.div whileHover={{scale:1.1, x:20}}  initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.6,delay:0.4,ease:[0.76,0,0.24,1]}}   className='py-5 gap-20 flex'><span>2024</span>TMDB Movie App</motion.div>
            <motion.div whileHover={{scale:1.1, x:20}}  initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.6,delay:0.6,ease:[0.76,0,0.24,1]}}   className='py-5 gap-20 flex'><span>2024</span>Google Search clone</motion.div>
            <motion.div whileHover={{scale:1.1, x:20}}  initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.6,delay:0.8,ease:[0.76,0,0.24,1]}}   className='py-5 gap-20 flex'><span>2024</span>Notes App</motion.div>
            
            
          </section>
        </div>
      </div>
    </LocomotiveScrollProvider>
  )
}
