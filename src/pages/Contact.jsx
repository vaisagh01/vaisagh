import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Send } from 'lucide-react'

export default function Contact() {
  const [input, setInput] = useState()
  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  }
  const handleSubmit = () => {
    e.preventDefault()
  }
  return (
    <div className='mx-auto rounded-3xl relative h-[75vh] hide-scroll overflow-y-scroll z-10 w-[70vw]'>
            
            <motion.img initial={{y:0}} animate={{y:0}} transition={{duration:9, repeat:Infinity, repeatType:'reverse'}} className='w-full h-full rounded-3xl absolute -z-10' src="/bg/bg7.jpg" alt="" />

            <p className='top-2 bg-neutral-900 rounded-full p-4 size-4 items-center poppins text-neutral-200 flex justify-center absolute right-2'>2</p>
            <section className='flex h-full gap-9 poppins justify-center items-center'>
              <form className='flex justify-center items-center gap-2 w-full h-1/2' action="mailto:vaisuro45@gmail.com" method='post'>
                <textarea onChange={handleChange} className=' m-5 h-full w-1/2 focus:outline-none text-white p-5 rounded-3xl bg-white/30 ' placeholder='type here...'></textarea>
                <div className=' text-neutral-300 flex flex-col justify-between h-full gap-8  w-1/4'>
                    <h1 className='font-medium text-2xl flex gap-2 items-center'>
                      Send a message. Maybe we can work together!
                    </h1>
                    <motion.button onClick={handleSubmit}  initial={{y:0,scale:0.8, opacity:0}} animate={{y:0,scale:1, opacity:1}} transition={{duration:1,ease:[0.76,0,0.24,1]}}  className='bg-transparent-700 mt-2 text-2xl border-white border-2 overflow-hidden text-white h-16 rounded-full'>
                        <motion.div whileHover={{y:-64}} className=''>
                            <motion.div  initial={{opacity:0, y:50}} animate={{opacity:1, y:0}} transition={{duration:0.5,delay:0.6,ease:[0.76,0,0.24,1]}}  className='h-16 flex  items-center justify-center px-4'>send</motion.div>
                            <div className='h-16 flex items-center justify-center px-4 w-full'>send<ArrowUpRight/></div>
                        </motion.div>
                    </motion.button>
                </div>
              </form>
                
                    
            </section>

        </div>
  )
}

