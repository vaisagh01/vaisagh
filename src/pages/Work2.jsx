import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react';

export default function Work() {
    const [overlay, showOverlay] = useState(false);
    return (
        <div className='mx-auto rounded-3xl relative h-[75vh] hide-scroll overflow-y-scroll z-10 w-3/4'>
            
            <motion.img initial={{y:0}} animate={{y:0}} transition={{duration:9, repeat:Infinity, repeatType:'reverse'}} className='w-full h-full rounded-3xl absolute -z-10' src="/bg5.png" alt="" />

            <p className='top-2 bg-neutral-900 rounded-full p-4 size-4 items-center poppins text-neutral-200 flex justify-center absolute right-2'>
                3
            </p>
            <section className='flex text-neutral-300 h-full gap-9 poppins justify-center items-center'>
                
                <div className=' w-60 flex flex-col gap-2'>
                    <h1 className='font-medium text-4xl'>TMDB Movie App</h1>
                    <div className='flex gap-4'>
                        <img className="h-9" src="src\assets\react.png" alt="" />
                        <img className="h-9"  src="src\assets\tailwind.png" alt="" />
                    </div>
                    <p className='text-lg'>A React.js project created using TMDB API, to browse all kinds of movies and TV shows of any language and country </p>
                </div>
                    <motion.div onHoverStart={()=>{showOverlay(true)}} onHoverEnd={()=>{showOverlay(false)}}  className='w-1/2 relative overflow-hidden cursor-pointer'>
                        <motion.img whileHover={{scale:1.1}} transition={{duration:0.5}} className='w-full' src="src\work\work1.png" alt="" />
                        <AnimatePresence>
                            {
                                overlay &&
                                <motion.div exit={{opacity:0}} initial={{opacity:0.2}} animate={{opacity:1}} transition={{type:'spring', duration:1}} className='w-full top-3 h-full opacity-50 absolute bg-neutral-900/60 flex items-center justify-center'>
                                    <ArrowUpRight className='scale-20 hover:-translate-y-2 transition-all text-slate-100'/>
                                </motion.div>
                            }
                        </AnimatePresence>
                    </motion.div>
            </section>

        </div>
    )
}
