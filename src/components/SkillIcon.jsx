import React from 'react'
import { motion } from 'framer-motion'

export default function SkillIcon({name,animDelay}) {
  return (
    <motion.img initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6,delay:animDelay,ease:[0.76,0,0.24,1]}}  className='h-14' src={`src/assets/${name}.png`} alt="" />
  )
}
