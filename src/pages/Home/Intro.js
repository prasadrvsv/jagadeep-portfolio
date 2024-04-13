import React from 'react';
import { motion } from 'framer-motion';

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function Intro() {
  return (
    <div id='home' className='flex h-screen justify-center'>
      <div className='flex flex-col w-5/6 justify-center'>
        <motion.span
          className="sm:text-6xl md:text-7xl lg:text-8xl font-bold text-5xl tracking-tighter"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
        >
          Hey there, I'm
        </motion.span>
        <br />
        <motion.span
          className="sm:text-6xl md:text-7xl lg:text-8xl font-bold text-5xl tracking-tighter"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.8, ease: 'easeOut' }}
        >
          Jagadeep Avula
        </motion.span>
        <motion.p
          className="sm:max-w-4/5 max-w-5/6 sm:text-2xl text-md font-normal text-justify pl-16 sm:pl-20 md:pl-28 lg:pl-32 mt-2 leading-7"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 1.2, ease: 'easeOut' }}
        >
          — a full-stack developer with an artist's eye and a movie buff's heart. This website is my personal vault, overflowing with all the cool stuff I've created. Welcome to my world! Explore code, design, and cinema with a cup of chai (seriously, the best).
        </motion.p>
      </div>
    </div>
  );
}

export default Intro;
