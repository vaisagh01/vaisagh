import React, { useRef } from 'react'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { motion, useScroll } from 'framer-motion'
import Work from './Work'
import Work2 from './Work2'
import Work3 from './Work3'
import Contact from './Contact'
import Landing from './Landing'


export default function Home() {
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
      <div data-scroll-container ref={container} className='bg-neutral-900 overflow-hidden hide-scroll'>        


        <div data-scroll-container data-scroll-speed="3" ref={container}  className='flex flex-col items-center justify-center gap-10'>
          <motion.section  initial={{y:0,scale:0.9, opacity:0}} animate={{y:0,scale:1, opacity:1}} transition={{duration:1.2,ease:[0.76,0,0.24,1]}}  data-scroll-section data-scroll-speed="5" >
            <Landing/>
          </motion.section>

          
          <motion.section className='sticky' data-scroll-section data-scroll-speed="15" >
            <Work2/>
          </motion.section>
          
          <motion.section data-scroll-section data-scroll-speed="15" >
            <Work3/>
          </motion.section>

          <motion.section data-scroll-section data-scroll-speed="15" >
            <Work/>
          </motion.section>

          <motion.section data-scroll-section data-scroll-speed="15" >
            <Contact/>
          </motion.section>
          
        </div>
      </div>
    </LocomotiveScrollProvider>
  )
}
