import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, MenuIcon, ArrowBigDown, ArrowDown, ArrowUpRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function Header() {
    const [menu, setMenu] = useState(false);

    return (
        <div className='z-50 px-10 mix-blend-difference fixed w-screen flex items-center h-24 justify-around'>
            <motion.div initial={{opacity:0, y:-100}} animate={{opacity:1, y:0}} transition={{duration:0.7,ease:[0.76,0,0.24,1]}} className='flex cursor-pointer'>
                <NavLink   to={'/'}  whileHover={{scaleY:-1}} className='font-serif text-center text-neutral-100 text-4xl font-light'>V</NavLink>
                <NavLink   to={'/'}  whileHover={{scaleX:-1}}  className='font-serif text-center text-neutral-100 text-4xl font-light'>S</NavLink>
            </motion.div>
            
            <div className='flex flex-row items-center justify-center'>
                <div className='poppins flex gap-14 text-xl text-neutral-300'>

                    <motion.div initial={{opacity:0, y:-100}} animate={{opacity:1, y:0}} transition={{duration:0.7,delay:0.2,ease:[0.76,0,0.24,1]}}   className='flex h-7 overflow-hidden flex-col'>
                        <motion.div whileHover={{y:-30}}  className='flex h-7 flex-col'>
                            <NavLink to={'/about'}>About</NavLink>
                            <NavLink to={'/about'} className=' border-b-2 border-slate-200'>About</NavLink>
                        </motion.div>
                    </motion.div>
                    
                    <motion.div initial={{opacity:0, y:-100}} animate={{opacity:1, y:0}} transition={{duration:0.7,delay:0.2,ease:[0.76,0,0.24,1]}}   className='flex h-7 overflow-hidden flex-col'>
                        <motion.div whileHover={{y:-30}}  className='flex h-7 flex-col'>
                            <NavLink to={'/projects'}>Projects</NavLink>
                            <NavLink to={'/projects'} className=' border-b-2 border-slate-200'>Projects</NavLink>
                        </motion.div>
                    </motion.div>

                    <motion.div initial={{opacity:0, y:-100}} animate={{opacity:1, y:0}} transition={{duration:0.7,delay:0.2,ease:[0.76,0,0.24,1]}}   className='flex h-7 overflow-hidden flex-col'>
                        <motion.div whileHover={{y:-30}}  className='flex h-7 flex-col'>
                        <a href="src\assets\RESUME.pdf" download>Resume</a>
                        <a href="src\assets\RESUME.pdf" download className='flex items-center justify-center w-full'>Resume<ArrowUpRight/></a>
                        </motion.div>
                    </motion.div>

                    
                    
                    
                    
                </div>
                {/* <motion.div whileHover={{scale:1.1}} className='cursor-pointer z-10 size-20 overflow-hidden rounded-full m-3'>
                    {
                        !menu ? 
                            <motion.div onClick={()=>{setMenu(true)}} whileHover={{}}  className=''>
                                <div className='text-neutral-100 h-20 flex items-center justify-center w-full'>
                                    <motion.p initial={{opacity:0, scale:0.5}} transition={{duration:0.2}} animate={{opacity:1, scale:1.2}}><MenuIcon/></motion.p>
                                </div>
                            </motion.div>
                        :   <motion.div onClick={()=>{setMenu(false)}}  className='text-neutral-900 h-20 flex items-center justify-center  w-full bg-neutral-200 '>
                                <motion.p initial={{opacity:0, rotate:180}} transition={{duration:0.2, scale:0.1}}  animate={{opacity:1, rotate:90, scale:1.2}}><X/></motion.p>
                            </motion.div>
                    }
                </motion.div> */}
            </div>
            <AnimatePresence>
                {
                    menu && <motion.div 
                    initial={{width:0}} 
                    animate={{width:'40%'}} 
                    exit={{width:0}}
                    className='h-screen fixed right-0 top-0 bg-neutral-700 flex justify-center items-center'>
                                Just a menu
                            </motion.div>
                }
            </AnimatePresence>
        </div>
  )
}
