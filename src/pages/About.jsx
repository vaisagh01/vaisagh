import React from 'react'
import { motion } from 'framer-motion'
import SkillIcon from '../components/SkillIcon'

export default function About() {
  return (
    <div className='bg-neutral-900 pt-28 h-screen overflow-hidden hide-scroll'>        
      <div className='w-3/4 mx-auto text-xl poppins text-neutral-400'>
        <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.9,delay:0.7,ease:[0.76,0,0.24,1]}}  className='text-7xl font-medium text-neutral-400 pb-5 '>About</motion.h1>
        <div className='pt-1 flex items-start justify-between'>
          <div>
            <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6,delay:0.2,ease:[0.76,0,0.24,1]}} >Vaisagh Suresh</motion.h1>
            <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6,delay:0.3,ease:[0.76,0,0.24,1]}} >3rd year Christ University, Bangalore</motion.h1>
            <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6,delay:0.4,ease:[0.76,0,0.24,1]}} >Bsc Computer Science, Statistics</motion.h1>
          </div>
          <div className='flex flex-col'>
            <motion.a href='https://www.instagram.com/vaisaghhh/' target="_blank" className='hover:border-b-[2px] border-neutral-400' initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6,delay:0.2,ease:[0.76,0,0.24,1]}} >Instagram</motion.a>
            <motion.a href='https://www.linkedin.com/in/vaisagh-suresh-36169b280/' target="_blank" className='hover:border-b-[2px] border-neutral-400'  initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6,delay:0.3,ease:[0.76,0,0.24,1]}} >Linkedin</motion.a>
            <motion.a href='https://github.com/vaisagh01' target="_blank" className='hover:border-b-[2px] border-neutral-400'  initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6,delay:0.4,ease:[0.76,0,0.24,1]}} >Github</motion.a>
          </div>
          <div>
            <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6,delay:0.2,ease:[0.76,0,0.24,1]}} >vaisuro45@gmail.com</motion.h1>
            <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6,delay:0.3,ease:[0.76,0,0.24,1]}} ></motion.h1>
            <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6,delay:0.4,ease:[0.76,0,0.24,1]}} ></motion.h1>
          </div>
        </div>
        <motion.div  initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.9,delay:0.7,ease:[0.76,0,0.24,1]}}   className='h-[1px] my-9 w-full bg-neutral-400'></motion.div>
        <div className='pt-1'>
          <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6,delay:0.6,ease:[0.76,0,0.24,1]}}  className='pb-7 font-medium text-4xl'>What are my skills?</motion.h1>
          <div className='flex justify-evenly gap-5'>
            <SkillIcon name={'react'} animDelay={0.1} />
            <SkillIcon name={'html'} animDelay={0.2} />
            <SkillIcon name={'css'} animDelay={0.3} />
            <SkillIcon name={'nodejs'} animDelay={0.4} />
            <SkillIcon name={'js'} animDelay={0.5} />
            <SkillIcon name={'tailwind'} animDelay={0.6} />
            <SkillIcon name={'mongodb'} animDelay={0.7} />
            <SkillIcon name={'shadcn'} animDelay={0.8} />
            <SkillIcon name={'github'} animDelay={0.9} />
            <SkillIcon name={'firebase'} animDelay={1} />
            <SkillIcon name={'tailwind'} animDelay={1.1} />
          </div>
        </div>
        <motion.div  initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.9,delay:0.7,ease:[0.76,0,0.24,1]}}   className='h-[1px] my-9 w-full bg-neutral-400'></motion.div>
        <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6,delay:0.6,ease:[0.76,0,0.24,1]}}  className='font-medium text-4xl pb-7'>My work experience?</motion.h1>
        <div className=' flex items-start justify-between'>
          <div>
            <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6,delay:1.2,ease:[0.76,0,0.24,1]}} >Tech-head(College Fest)</motion.h1>
            <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6,delay:1.3,ease:[0.76,0,0.24,1]}} >Subject Matter expert at CourseHero</motion.h1>
            <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6,delay:1.4,ease:[0.76,0,0.24,1]}} ></motion.h1>
          </div>
          <div className='flex flex-col'>
            <motion.a href='https://www.instagram.com/vaisaghhh/' target="_blank" className='hover:border-b-[2px] border-neutral-400' initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6,delay:1.2,ease:[0.76,0,0.24,1]}} >Developed the official website</motion.a>
            <motion.a href='https://www.linkedin.com/in/vaisagh-suresh-36169b280/' target="_blank" className='hover:border-b-[2px] border-neutral-400'  initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6,delay:1.3,ease:[0.76,0,0.24,1]}} >Solved over 50 questions in Mathematics</motion.a>
            <motion.a href='https://github.com/vaisagh01' target="_blank" className='hover:border-b-[2px] border-neutral-400'  initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6,delay:1.4,ease:[0.76,0,0.24,1]}} ></motion.a>
          </div>
        </div>
      </div>
    </div>
  )
}
