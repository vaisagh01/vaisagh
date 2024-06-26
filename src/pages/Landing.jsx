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
        <div 
        className='mx-auto h-screen rounded-3xl flex items-center justify-center '>
            <section 
            className=' flex flex-col w-3/4 gap-5 my-20 '>
                <h1>About me</h1>
                <motion.p   
                className='text-3xl drop-shadow-md'>
                    I am Vaisagh Suresh, a 
                    <span 
                    className='text-white font-mono text-4xl'>web developer</span>
                     and 
                    <span className='text-blue-700 text-4xl italic font-serif'>designer</span> based in Bangalore. I create interactive and innovative websites, experimenting with latest technologies and smooth UX
                    . I'm a student 
                </motion.p>
                
            </section>
            
        </div>
  )
}
