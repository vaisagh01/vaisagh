import { Github, LinkedinIcon, MoveUpRight, ArrowDownToDot, GitBranchIcon, GithubIcon, Linkedin, ArrowUpRight} from 'lucide-react'
import React, { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Landing() {
    const [copied, setCopied] = useState(false)
    const handleCopy = () => {
        navigator.clipboard.writeText('vaisuro45@gmail.com');
        setCopied(true)
    }
    
    return (
        <div className='mx-auto rounded-3xl relative mt-28 h-[75vh] overflow-hidden z-10 w-3/4'>
            <motion.img initial={{y:-10}} animate={{y:0}} transition={{duration:9, repeat:Infinity, repeatType:'reverse'}} className='w-full rounded-3xl absolute -z-10' src="/bg/bg1.jpg" alt="" />
            <p className='top-2 bg-neutral-700 rounded-full p-4 size-4 items-center poppins text-neutral-200 flex justify-center absolute right-2'>1</p>
            <section className='flex flex-col relative poppins items-start px-32 h-full justify-center gap-10'>
                <motion.h1 initial={{opacity:0, y:50}} animate={{opacity:1, y:0}} transition={{duration:0.5,delay:0.6,ease:[0.76,0,0.24,1]}} className='text-5xl pacifico font-extralight text-white'>hello!</motion.h1>
                <motion.p  initial={{opacity:0, y:50}} animate={{opacity:1, y:0}} transition={{duration:0.6,delay:1,ease:[0.76,0,0.24,1]}}  className='text-3xl text-balance drop-shadow-md'>Hello! I am Vaisagh Suresh, a <span className='text-neutral-300'>web developer</span> and <span className='text-neutral-300'>designer</span> based in Bangalore. I enjoy creating interactive and innovative websites, experimenting with latest technologies</motion.p>
                <div className='w-full flex items-center justify-between'>
                    <motion.button  initial={{y:0,scale:0.8, opacity:0}} animate={{y:0,scale:1, opacity:1}} transition={{duration:1,ease:[0.76,0,0.24,1]}}  className='bg-transparent-700 mt-2 text-2xl border-black border-2 overflow-hidden text-black h-16 rounded-full'>
                        <div>
                            {
                                !copied ? 
                                    <motion.div whileHover={{y:-64}} className=''>
                                        <motion.div onClick={handleCopy}  initial={{opacity:0, y:50}} animate={{opacity:1, y:0}} transition={{duration:0.5,delay:0.6,ease:[0.76,0,0.24,1]}}  className='h-16 flex  items-center justify-center px-4'>Contact me</motion.div>
                                        <div onClick={handleCopy}   className='h-16 flex items-center justify-center px-4 w-full'>Email<ArrowUpRight/></div>
                                    </motion.div>
                                    :
                                    <motion.div whileHover={{y:-64}} className=''>
                                        <motion.div onClick={handleCopy}  initial={{opacity:0, y:50}} animate={{opacity:1, y:0}} transition={{duration:0.5,delay:0.6,ease:[0.76,0,0.24,1]}}  className='h-16 flex  items-center justify-center px-4'>Send me a mail<ArrowUpRight/></motion.div>
                                        <div onClick={handleCopy}   className='h-16 flex items-center justify-center px-4 w-full'>Copied</div>
                                    </motion.div>
                                }
                        </div>
                    </motion.button>
                    <div>
                        <motion.div  initial={{opacity:0, y:50}} animate={{opacity:1, y:0}} transition={{duration:0.5,delay:0.6,ease:[0.76,0,0.24,1]}}  className='flex gap-4 poppins text-2xl'>
                            <div className='flex h-8 overflow-hidden flex-col'>
                                <motion.div whileHover={{y:-35}}  className='flex h-7 flex-col item-start'>
                                    <a href="https://github.com/vaisagh01" target='_blank'>github</a>
                                    <a href="https://github.com/vaisagh01" target='_blank' className='flex justify-start px-4 w-full'>github<ArrowUpRight/></a>
                                </motion.div>
                            </div>
                            <div className='flex h-8 overflow-hidden flex-col'>
                                <motion.div whileHover={{y:-35}}  className='flex h-7 flex-col'>
                                    <a href="https://www.linkedin.com/in/vaisagh-suresh-36169b280/" target='_blank'>linkedin</a>
                                    <a href="https://www.linkedin.com/in/vaisagh-suresh-36169b280/" target='_blank' className='flex items-center justify-center px-4 w-full'>linkedin<ArrowUpRight/></a>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
  )
}
