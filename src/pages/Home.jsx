import React, { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Work from './Work'
import Landing from './Landing'
import { NavLink } from 'react-router-dom'
import { ArrowUpRight, MapPin, Mouse } from 'lucide-react'


export default function Home() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
      target:container,
      offset: ['start start','end start']
    });
    const title = useTransform(scrollYProgress, [0,1],[1,-1])
    const sm1 = useTransform(scrollYProgress, [0,1],[1,0.8])
    const sm2 = useTransform(scrollYProgress, [0,1],[1,0.85])
    const sm3 = useTransform(scrollYProgress, [0,1],[1,0.9])
    const sm4 = useTransform(scrollYProgress, [0,1],[1,0.95])
    const sm5 = useTransform(scrollYProgress, [0,1],[1,1.0])
    return (

      <div className='bg-neutral-900'>        
        <div  ref={container}  className='flex flex-col items-center overflow- poppins text-neutral-400'>

          <motion.section className='pt-10 w-screen flex flex-col gap-11 sticky top-0 h-screen' style={{scale:title}} initial={{y:0,scale:1.3, opacity:0}} animate={{y:0,scale:1, opacity:1}} transition={{duration:1.4,delay:0.5,ease:[0.76,0,0.24,1]}}  >
              <p className='text-xl self-center pacifico'>Hello! I am</p>
              <motion.h1 
              style={{fontStyle:'italic'}}
              transition={{duration:0.5}}
              className='lg:text-[220px] md:text-[140px] text-[90px] text-center -tracking-widest font-semibold'>
                vaisagh suresh
              </motion.h1>
                <motion.div  initial={{opacity:0, y:50}} animate={{opacity:1, y:0}} transition={{duration:0.5,delay:0.6,ease:[0.76,0,0.24,1]}}  className='flex justify-between self-center poppins'>
                    <div className='flex h-6 overflow-hidden flex-col'>
                        <motion.div whileHover={{y:'-50%'}} transition={{duration:0.3}}  className='flex flex-col'>
                            <a href="https://github.com/vaisagh01" target='_blank'>github</a>
                            <a href="https://github.com/vaisagh01" target='_blank' className='flex w-full'>github<ArrowUpRight/></a>
                        </motion.div>
                    </div>

                    <div className='flex h-6 overflow-hidden flex-col'>
                        <motion.div whileHover={{y:'-50%'}} transition={{duration:0.3}}  className='flex flex-col'>
                            <a href="https://github.com/vaisagh01" target='_blank'>Linkedin</a>
                            <a href="https://github.com/vaisagh01" target='_blank' className='flex w-full'>Linkedin<ArrowUpRight/></a>
                        </motion.div>
                    </div>
                    
                    <p className='flex'><MapPin className='p-1'/> Bangalore</p>
                </motion.div>
                <div className='flex flex-col items-center gap-2 self-center'>
                  <motion.div animate={{y:10}} initial={{y:0}} transition={{repeat:Infinity, repeatType:'reverse', duration:0.9,ease:[0.76,0,0.24,1]}}>
                  <Mouse />
                  </motion.div>
                </div>
          </motion.section>

          <motion.section className='sticky border-t-[1px] border-neutral-500 top-0 bg-neutral-900' initial={{y:0,scale:0.9, opacity:0}} animate={{y:0,scale:1, opacity:1}} transition={{duration:1.4,ease:[0.76,0,0.24,1]}}  >
            <Landing/>
          </motion.section>

          <div className='border-t-[1px] border-neutral-500 bg-neutral-900 w-full sticky top-[0vh] h-screen uppercase font-semibold text-neutral-400'>
              <p className='mt-72 lg:text-8xl md:text-4xl text-wrap text-6xl text-center'>My Top #3 projects</p>
          </div>
          
          <motion.section className='sticky top-[30px]  snap-start' style={{scale:sm2}} >
            <Work num={1} title={"CINEHUB - A Movie App"}/>
          </motion.section>
          
          <motion.section className='sticky top-[50px] snap-start' style={{scale:sm3}}  >
            <Work num={2} title={"GoogleClone - A Google Clone"}/>
          </motion.section>

          <motion.section className='sticky top-[70px] snap-start' style={{scale:sm4}}  >
            <Work num={3} title={"Convergence 2024"}/>
          </motion.section>

          <motion.section className='' style={{scale:sm5}}  >
            
          </motion.section>
          <section className='h-screen w-screen bg-neutral-900 border-t-[1px] border-neutral-500 z-20'>

          </section>
          
        </div>
      </div>

  )
}
