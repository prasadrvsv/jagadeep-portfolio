import React, { useRef } from 'react';
import bg from '../../assets/about.JPG';
import { motion, useScroll, useTransform } from "framer-motion";
import OSU from "../../assets/osu1.png";
import REC from "../../assets/REC.png";


function About() {

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const zoom = useTransform(scrollYProgress, [0, 1],
    [1, 1.25]);


  return (
    <div id="about" className='relative flex flex-col h-auto justify-center items-center'>
      <div className='flex flex-col justify-center items-center overflow-hidden'>
        <motion.img
          ref={targetRef}
          style={{ scale: zoom }}
          src={bg} alt='' className='object-cover h-auto w-5/6  overflow-x-hidden' />
      </div>
      <div className='w-5/6 relative'>

        <p className="absolute bottom-0 right-0 bg-transparent p-2 text-white font-bold sm:text-5xl md:text-6xl lg:text-7xl text-4xl transform translate-x-1/2 translate-y-1/2">About.</p>
      </div>
      <div className='flex w-5/6 sm:mt-4 text-justify'>
        <div className='lg:w-2/5 w-1/6'></div>
        <div className='lg:w-3/5 w-5/6 pt-20'>
          <h1 className='font-medium text-xl sm:text-2xl leading-8 sm:leading-9 lg:leading-10 text-justify relative'>
            I hail from&nbsp;
            <span className="font-black italic">
              <a href="https://www.google.com/maps?q=Chennai" target="_blank" rel="noopener noreferrer" className="text-black hover:underline ">Chennai, India</a>
            </span>, where the bustling streets taught me resilience and a passion for problem-solving.<br /> Now, I call&nbsp;
            <span className="font-black italic">
              <a href="https://www.google.com/maps?q=Sunnyvale, California" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">Sunnyvale, California</a>
            </span>, home, where the sunny skies fuel my drive for innovation.

          </h1>
        </div>
      </div>

      <div className='grid md:grid-cols-10 gap-4 w-5/6 pt-10'>
        <div className='leftelement col-span-4'>
          <span className='font-black text-5xl'>Education</span>
        </div>
        <div className='parenteducation rightelement col-span-10 lg:col-span-6'>
          <div className='education1 flex flex-row justify-between relative'>
            <div className=''>
              <span className='font-extrabold md:text-3xl text-2xl'>BACHELOR OF ENGINEERING</span><br />
              <span className='font-extrabold md:text-3xl text-2xl'>COMPUTER SCIENCE</span><br />
              <span className='font-bold md:text-2xl text-xl'>Rajalakshmi Engineering College<br /> Chennai, Tamil Nadu, India</span><br />
              <span className='text-md md:text-lg'>Aug 2015- May 2019</span>
            </div>
            <div className='absolute top-0 right-0'>
              <img src={REC} alt='' className='w-36 opacity-30' ></img>
            </div>
          </div>
          <div className='education2 mt-8 flex flex-row justify-between relative'>
            <div>
              <span className='font-extrabold md:text-3xl text-2xl'>MASTER OF ENGINEERING</span><br />
              <span className='font-extrabold md:text-3xl text-2xl'>COMPUTER SCIENCE </span><br />
              <span className='font-bold md:text-2xl text-xl'>Oregon State University<br /> Corvallis, Oregon, USA</span><br />
              <span className='text-md md:text-lg'>Sept 2021- Mar 2023</span>
            </div>
            <div className='absolute top-0 right-0'>
              <img src={OSU} alt='' className='w-32 opacity-30' ></img>
            </div>
          </div>
        </div>
      </div>

    </div>

  );
}

export default About;