import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react';

export default function Work() {
    const [overlay, showOverlay] = useState(false);
    return (
        <div className='mx-auto rounded-3xl relative h-[75vh] hide-scroll overflow-y-scroll z-10 w-3/4'>
            
            <motion.img initial={{y:0}} animate={{y:0}} transition={{duration:9, repeat:Infinity, repeatType:'reverse'}} className='w-full h-full rounded-3xl absolute -z-10' src="/bg9.jpg" alt="" />

            <p className='top-2 bg-neutral-900 rounded-full p-4 size-4 items-center poppins text-neutral-200 flex justify-center absolute right-2'>2</p>
            <section className='flex h-full gap-9 poppins justify-center items-center'>
                
                    <motion.a href='http://cinehubv2.vercel.app' target='_blank' onHoverStart={()=>{showOverlay(true)}} onHoverEnd={()=>{showOverlay(false)}}  className='w-1/2 relative overflow-hidden cursor-pointer'>
                        <motion.img whileHover={{scale:1.1}} transition={{duration:0.5}} className='w-full' src="src\work\work4.png" alt="" />
                        <AnimatePresence>
                            {
                                overlay &&
                                <motion.div exit={{opacity:0}} initial={{opacity:0.2}} animate={{opacity:1}} transition={{type:'spring', duration:1}} className='w-full top-0 h-full opacity-50 absolute bg-neutral-900/60 flex items-center text-neutral-100 justify-center'>
                                    visit<ArrowUpRight  className='scale-20 hover:translate-x-2 hover:-translate-y-2 transition-all text-slate-100'/>
                                </motion.div>
                            }
                        </AnimatePresence>
                    </motion.a>
                <div className=' w-60 text-neutral-300 flex flex-col gap-8'>
                    <h1 className='font-medium text-4xl'>e-com</h1>
                    <div className='flex gap-4'>
                        <img className="h-9" src="src\assets\react.png" alt="" />
                        <img className="h-9"  src="src\assets\nodejs.png" alt="" />
                        <img className="h-9"  src="src\assets\mongodb.png" alt="" />
                        <img className="h-9"  src="src\assets\tailwind.png" alt="" />
                    </div>
                    <p className='text-lg'>A Shopping app created with MERN with Login Authorization and Add to Cart features.  </p>
                </div>
            </section>

        </div>
    )
}
