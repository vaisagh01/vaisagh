import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react';

export default function Work() {
    const [overlay, showOverlay] = useState(false);
    return (
        <div className='mx-auto rounded-3xl relative h-[95vh] hide-scroll overflow-y-scroll z-10 w-screen shadow-2xl shadow-black'>
            
            <img className='w-full h-full rounded-3xl absolute -z-10' src="bg/bg1.jpg" alt="" />

            <p className='absolute text-xl text-neutral-100 top-5 left-5 px-4 poppins rounded-full text-center items-center py-1'>
                #1
            </p>
            <section className='flex text-neutral-300 h-full gap-9 poppins justify-center items-center'>
                hello
            </section>

        </div>
    )
}
