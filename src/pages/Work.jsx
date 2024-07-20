import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react';

export default function Work(props) {
    return (
        <div className='mx-auto border-t-[1px] border-neutral-500 bg-neutral-900 relative h-[95vh] hide-scroll overflow-y-scroll z-10 w-screen shadow-black'>
            
            {/* <img className='w-full h-full rounded-3xl absolute -z-10 opacity-80' src="bg/bg1.jpg" alt="" /> */}

            <p className='absolute text-xl text-neutral-100 top-5 left-5 px-4 poppins rounded-full text-center items-center py-1'>
                #{props.num}
            </p>
            <section className='flex flex-col lg:flex-row md:flex-row tracking-tighter px-20 py-10 gap-5 h-full w-full'>
                <div className='flex flex-col gap-5 p-5'>
                    <a href={props.link} className='text-neutral-200 hover:underline border-b-[1px] border-neutral-500 py-5 cursor-pointer font-semibold lg:text-xl md:text-4xl text-4xl'>
                        {props.title}
                    </a>
                    <video autoPlay muted loop>
                        <source src={`/work/work${props.num}.mp4`} type='video/mp4' />
                    </video>
                </div>
                <div className='flex w-full lg:w-1/2 flex-col border-l-[1px] px-5 py-20 border-neutral-500 items-start justify-start text-xl'>
                    {props.desc}
                </div>
            </section>

        </div>
    )
}
