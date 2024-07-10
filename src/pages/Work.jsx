import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react';

export default function Work(props) {
    return (
        <div className='mx-auto rounded-3xl bg-neutral-700 relative h-[95vh] hide-scroll overflow-y-scroll z-10 w-screen shadow-2xl shadow-black'>
            
            <img className='w-full h-full rounded-3xl absolute -z-10 opacity-80' src="bg/bg1.jpg" alt="" />

            <p className='absolute text-xl text-neutral-100 top-5 left-5 px-4 poppins rounded-full text-center items-center py-1'>
                #{props.num}
            </p>
            <section className='flex flex-col gap-5 tracking-tighter justify-center items-center p-16 h-full w-full'>
                <h1 className='text-neutral-200 font-semibold lg:text-7xl md:text-4xl text-4xl'>{props.title}</h1>
                <div className='flex flex-col gap-1 lg:flex-row md:flex-row'>
                    <motion.img whileHover={{scale:1.04}} transition={{duration:0.6,ease:[0.76,0,0.24,1]}} src={`work/work${props.num}.png`} className='lg:w-1/2 md:w-1/2 w-full' alt="" />
                    <motion.img whileHover={{scale:1.04}} transition={{duration:0.6,ease:[0.76,0,0.24,1]}} src={`work/work${props.num}.png`} className='lg:w-1/2 md:w-1/2 w-full' alt="" />
                </div>
            </section>

        </div>
    )
}
