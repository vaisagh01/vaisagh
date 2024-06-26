import React, { useState } from 'react'
import { motion, AnimatePresence,useScroll, useMotionValue, useMotionValueEvent } from 'framer-motion'
import { X, MenuIcon, ArrowUpRight} from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Header() {
    const [menu, setMenu] = useState(false);
    const [hidden, setHidden] = useState(false);
    const {scrollY} = useScroll();
    const navigate = useNavigate();
    useMotionValueEvent(scrollY, "change", (latest) => {
        if(latest > 300){
            setHidden(true)
            } else {
                setHidden(false)
                }
    })
    return (
        <div className='z-40 bg-neutral-900 w-screen flex items-center h-20'>        
            <motion.div
                variants={{
                    visible:{y:0},
                    hidden:{y:'-300%'}
                }}
                initial={{y:-200}}
                animate={hidden ? "hidden" : "visible"}
                transition={{duration:0.9,delay:0.5,ease:[0.76,0,0.24,1]}}
                className='flex justify-center mx-auto gap-7 px-9 py-2 bg-neutral-800/40 border-neutral-600 shadow-sm shadow-neutral-900  border-[1px] rounded-full poppins text-xl text-neutral-300'>

                        <div className='flex h-8 overflow-hidden flex-col'>
                            <motion.div whileHover={{y:'-100%'}} transition={{duration:0.3}}  className='flex h-7 flex-col'>
                                <NavLink to={'/'}>Home</NavLink>
                                <NavLink to={'/'} className='flex w-full'>Home</NavLink>
                            </motion.div>
                        </div>
                        
                        <div className='flex h-8 overflow-hidden flex-col'>
                            <motion.div whileHover={{y:'-100%'}} transition={{duration:0.3}}  className='flex h-7 flex-col'>
                                <NavLink to={'/about'}>About</NavLink>
                                <NavLink to={'/about'} className='flex w-full'>About</NavLink>
                            </motion.div>
                        </div>
                        
                        <div className='flex h-8 overflow-hidden flex-col'>
                            <motion.div whileHover={{y:'-100%'}} transition={{duration:0.3}}  className='flex h-7 flex-col'>
                                <NavLink to={'/projects'}>Projects</NavLink>
                                <NavLink to={'/projects'} className='flex w-full'>Projects</NavLink>
                            </motion.div>
                        </div>
 
            </motion.div>
            <motion.div
            variants={{
                visible:{y:0},
                hidden:{y:'-200%'}
            }}
            animate={hidden ? "visible" : "hidden"}
            transition={{duration:0.6}}
            whileHover={{scale:1.1}} 
            className='cursor-pointer z-50 fixed right-5 top-5'>
                {
                    !menu ? 
                        <motion.div onClick={()=>{setMenu(true)}} whileHover={{}}  className='text-neutral-100 p-5 z-50 rounded-full bg-cyan-600 shadow-lg shadow-neutral-800/60'>
                            <motion.p initial={{opacity:0, scale:0.5}} transition={{duration:0.5}} animate={{opacity:1, scale:1.2}}><MenuIcon/></motion.p>
                        </motion.div>
                    :   <motion.div onClick={()=>{setMenu(false)}}  className='text-neutral-500 p-5 z-50 rounded-full bg-neutral-700'>
                            <motion.p initial={{opacity:0, rotate:180}} transition={{duration:0.5, scale:0.1}}  animate={{opacity:1, rotate:-90, scale:1.2}}><X/></motion.p>
                        </motion.div>
                }
            </motion.div>
            <AnimatePresence>
                {
                    menu && <motion.div 
                    initial={{opacity:0}} 
                    animate={{opacity:'100%'}} 
                    exit={{opacity:0}}
                    transition={{duration:0.5,delay:0.1,ease:[0.76,0,0.24,1]}}
                    className='h-screen z-10 w-screen backdrop-blur-lg bg-neutral-900/10 fixed top-0 right-0 flex justify-center items-center'>
                            {
                                menu && 
                                <div className='flex flex-col justify-start items-center poppins text-neutral-200'>
                                    <div className='h-screen w-screen absolute top-0 -z-10 ' />
                                    <div className='flex flex-col z-20 gap-2 text-7xl'>
                                        <motion.div initial={{x:-100, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:0.5}} onClick={()=>{setMenu(false)}} className='flex h-[70px] overflow-hidden flex-col'>
                                            <motion.div whileHover={{y:'-100%'}} transition={{duration:0.35}}  className='flex h-20 flex-col'>
                                                <NavLink to={'/'}>Home</NavLink>
                                                <NavLink to={'/'} className='flex w-full'>Home</NavLink>
                                            </motion.div>
                                        </motion.div>

                                        
                                        <motion.div initial={{x:-100, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:0.5, delay:0.1}} onClick={()=>{setMenu(false)}} className='flex h-[70px] overflow-hidden flex-col'>
                                            <motion.div whileHover={{y:'-100%'}} transition={{duration:0.35}}  className='flex h-20 flex-col'>
                                                <NavLink to={'/about'}>About</NavLink>
                                                <NavLink to={'/about'} className='flex w-full'>About</NavLink>
                                            </motion.div>
                                        </motion.div>

                                        
                                        <motion.div initial={{x:-100, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:0.5, delay:0.15}} onClick={()=>{setMenu(false)}}  className='flex h-[70px] overflow-hidden flex-col'>
                                            <motion.div whileHover={{y:'-100%'}} transition={{duration:0.35}}  className='flex h-20 flex-col'>
                                                <NavLink to={'/projects'}>Projects</NavLink>
                                                <NavLink to={'/projects'} className='flex w-full'>Projects</NavLink>
                                            </motion.div>
                                        </motion.div>

                                        
                                        <motion.div initial={{x:-100, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:0.5, delay:0.2}} onClick={()=>{setMenu(false)}}  className='flex h-[70px] overflow-hidden flex-col'>
                                            <motion.div whileHover={{y:'-100%'}} transition={{duration:0.35}}  className='flex h-20 flex-col'>
                                                <a href="src\assets\RESUME.pdf" download>Resume</a>
                                                <a href="src\assets\RESUME.pdf" download className='flex items-center justify-center w-full'>Resume</a>
                                            </motion.div>
                                        </motion.div>
                                        
                                        <motion.div initial={{x:-100, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:0.5, delay:0.25}} onClick={()=>{setMenu(false)}}  className='flex h-[70px] overflow-hidden flex-col'>
                                            <motion.div whileHover={{y:'-100%'}} transition={{duration:0.35}}  className='flex h-20 flex-col'>
                                            <a href="https://github.com/vaisagh01" target='_blank'>github</a>
                                            <a href="https://github.com/vaisagh01" target='_blank' className='flex w-full'>github<ArrowUpRight/></a>
                                            </motion.div>
                                        </motion.div>
                                        <motion.div initial={{x:-100, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:0.5, delay:0.3}} onClick={()=>{setMenu(false)}}  className='flex h-[70px] overflow-hidden flex-col'>
                                            <motion.div whileHover={{y:'-100%'}} transition={{duration:0.35}}  className='flex h-20 flex-col'>
                                                <a href="https://github.com/vaisagh01" target='_blank'>Linkedin</a>
                                                <a href="https://github.com/vaisagh01" target='_blank' className='flex w-full'>Linkedin</a>
                                            </motion.div>
                                        </motion.div>

                                    </div>
                                </div>
                            }
                    </motion.div>
                }
            </AnimatePresence>
        </div>
  )
}
