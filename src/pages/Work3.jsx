import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react';

export default function Work3() {
    const [overlay, showOverlay] = useState(false);
    return (
        <div className='mx-auto rounded-3xl relative h-[75vh] hide-scroll overflow-y-scroll z-10 w-3/4'>
            
            <motion.img initial={{y:0}} animate={{y:0}} transition={{duration:9, repeat:Infinity, repeatType:'reverse'}} className='w-full h-full rounded-3xl absolute -z-10' src="/bg/bg6.jpg" alt="" />

            <p className='top-2 bg-neutral-900 rounded-full p-4 size-4 items-center poppins text-neutral-200 flex justify-center absolute right-2'>
                4
            </p>
            <section className='flex h-full gap-9 poppins justify-center items-center'>
                
                    <motion.a href='http://convergence-2024.web.app' target='_blank' onHoverStart={()=>{showOverlay(true)}} onHoverEnd={()=>{showOverlay(false)}}  className='w-1/2 relative overflow-hidden cursor-pointer'>
                        <motion.img whileHover={{scale:1.1}} transition={{duration:0.5}} className='w-full' src="work/work3.png" alt="" />
                        <AnimatePresence>
                            {
                                overlay &&
                                <motion.div exit={{opacity:0}} initial={{opacity:0.2}} animate={{opacity:1}} transition={{type:'spring', duration:1}} className='w-full top-3 h-full opacity-50 absolute bg-neutral-900/60 flex items-center justify-center'>
                                    <ArrowUpRight className='scale-20 hover:-translate-y-2 transition-all text-slate-100'/>
                                </motion.div>
                            }
                        </AnimatePresence>
                    </motion.a>
                <div className=' w-60 text-slate-100 flex flex-col gap-2'>
                    <h1 className='font-medium text-4xl'>Convergence 2024</h1>
                    <div className='flex gap-4'>
                        <img className="h-9" src="src\assets\html.png" alt="" />
                        <img className="h-9"  src="src\assets\css.png" alt="" />
                        <img className="h-9"  src="src\assets\js.png" alt="" />
                        <img className="h-9"  src="src\assets\firebase.png" alt="" />
                    </div>
                    <p className='text-lg'>Official 2024 Convergence Fest Website developed on HTML, CSS and JavaScript.</p>
                </div>
            </section>

        </div>
    )
}
