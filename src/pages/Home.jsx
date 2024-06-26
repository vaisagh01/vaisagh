import React, { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Work2 from './Work2'
import Landing from './Landing'
import { NavLink } from 'react-router-dom'
import { ArrowUpRight, MapPin } from 'lucide-react'


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
        <div  ref={container}  className='flex flex-col items-center poppins text-neutral-400'>

          <motion.section className=' pt-10 flex flex-col gap-10 sticky top-0 h-screen' style={{scale:title}} initial={{y:0,scale:1.3, opacity:0}} animate={{y:0,scale:1, opacity:1}} transition={{duration:1.4,delay:0.5,ease:[0.76,0,0.24,1]}}  >
              <div className='flex justify-between px-10'>
                <p className='text-xl pacifico '>Hello!</p>
                <p className='flex'><MapPin className='p-1' /> Bangalore</p>
              </div>
              <motion.h1 
              style={{fontStyle:'italic'}}
              transition={{duration:0.5}}
              className=' text-[220px] -tracking-widest font-semibold'>
                vaisagh suresh
              </motion.h1>
              <div className='flex justify-between px-10'>
                <motion.div  initial={{opacity:0, y:50}} animate={{opacity:1, y:0}} transition={{duration:0.5,delay:0.6,ease:[0.76,0,0.24,1]}}  className='flex gap-4 poppins'>
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
                    
                </motion.div>
                <p>web developer/designer</p>
              </div>
          </motion.section>

          <motion.section className='sticky border-t-[1px] border-neutral-500 top-0 bg-neutral-900' initial={{y:0,scale:0.9, opacity:0}} animate={{y:0,scale:1, opacity:1}} transition={{duration:1.4,ease:[0.76,0,0.24,1]}}  >
            <Landing/>
          </motion.section>

          <div className='text-8xl border-t-[1px] border-neutral-500 bg-neutral-900 w-full sticky top-[0vh] h-screen uppercase font-semibold text-neutral-400'>
              <p className='mt-72 text-center'>My Top #3 projects</p>
          </div>
          
          <motion.section className='sticky top-[30px]  snap-start' style={{scale:sm2}} >
            <Work2/>
          </motion.section>
          
          <motion.section className='sticky top-[50px] snap-start' style={{scale:sm3}}  >
            <Work2/>
          </motion.section>

          <motion.section className='sticky top-[70px] snap-start' style={{scale:sm4}}  >
            <Work2/>
          </motion.section>

          <motion.section className='' style={{scale:sm5}}  >
            
          </motion.section>
          <section className='h-screen w-screen bg-neutral-900 border-t-[1px] border-neutral-500 z-20'>

          </section>
          
        </div>
      </div>

  )
}
