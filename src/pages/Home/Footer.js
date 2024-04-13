import React from 'react'
import { Link } from 'react-scroll';
// import { FiArrowUpRight } from "react-icons/fi";
import resumePdf from "../../assets/resume.pdf";


function Footer() {

  const handleLinkedinClick = () => {
    window.open('https://www.linkedin.com/in/jagadeepavula', '_blank');
  }

  const handleDribbbleClick = () => {
    window.open('https://dribbble.com/jagadeep_avula', '_blank')
  }

  const handleGithubClick = () => {
    window.open('https://github.com/jagadeepavula', '_blank');
  };

  const handleResume = () => {
    window.open(resumePdf, "_blank");
  }

  const handleReadcv = () => {
    window.open('https://read.cv/jagadeepavula');
  }

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/jaga_deeep/', '_blank');
  };



  return (
    <div className='group h-[80vh] w-[100%] flex flex-col justify-center items-center bg-customFooter rounded-t-3xl mt-56'>
      <div className='groupchild w-5/6 h-full flex flex-col justify-between items-stretch '>
        <div className='heading flex flex-col items-center justify-center mt-10'>
          <span className='font-black tracking-tighter text-[2.2rem] sm:text-[3rem] md:text-[3.87rem] lg:text-[5.21rem] xl:text-[6.52rem]'>YOU TALKING TO ME?</span>
        </div>
        <div className='navigation grid grid-cols-2'>
          <div className='flex flex-col '>
            <span className='font-bold text-xl md:text-2xl'>NAVIGATION</span>
            <hr className="w-auto mr-4 my-1 border-teal-500" />
            <Link to="home" smooth={true} duration={500} className="cursor-pointer w-fit font-medium text-lg md:text-xl hover:text-gray-800 ">
              Home
            </Link>
            <Link to="about" smooth={true} duration={500} className="cursor-pointer w-fit font-medium text-lg md:text-xl hover:text-gray-800">
              About
            </Link>
            <Link to="work" smooth={true} duration={500} className="cursor-pointer w-fit font-medium text-lg md:text-xl hover:text-gray-800">
              Work
            </Link>
            <Link to="projects" smooth={true} duration={500} className="cursor-pointer w-fit font-medium text-lg md:text-xl hover:text-gray-800">
              Projects
            </Link>
            <Link to="Defaced" smooth={true} duration={500} className="cursor-pointer w-fit font-medium text-lg md:text-xl hover:text-gray-800">
              Defaced
            </Link>
            <Link to="socials" smooth={true} duration={500} className="cursor-pointer w-fit font-medium text-lg md:text-xl hover:text-gray-800">
              Social
            </Link>

          </div>
          <div className='flex flex-col '>
            <span className='font-bold text-xl md:text-2xl'>SOCIALS</span>
            <hr className="w-auto my-1 mr-5 border-teal-500" />
            <span className='w-fit font-medium text-lg md:text-xl hover:text-gray-800 cursor-pointer' onClick={handleLinkedinClick}>Linkedin</span>
            <span className='w-fit font-medium text-lg md:text-xl hover:text-gray-800 cursor-pointer' onClick={handleDribbbleClick}>Dribbble</span>
            <span className='w-fit font-medium text-lg md:text-xl hover:text-gray-800 cursor-pointer' onClick={handleGithubClick}>Github</span>
            <span className='w-fit font-medium text-lg md:text-xl hover:text-gray-800 cursor-pointer' onClick={handleReadcv}>Read.cv</span>
            <span className='w-fit font-medium text-lg md:text-xl hover:text-gray-800 cursor-pointer' onClick={handleInstagramClick}>Instagram</span>
            <span className='w-fit font-medium text-lg md:text-xl hover:text-gray-800 cursor-pointer' onClick={handleResume}>Resume</span>
          </div>
        </div>
        <div className='footarrow my-5 grid sm:grid-cols-2 grid-cols-1'>
          <div className='flex flex-col'>
            <span className='font-black md:text-3xl text-xl'>© 2024</span>
            <span className='font-extrabold md:text-3xl text-xl'>JAGADEEP AVULA</span>
          </div>
          <div className='flex flex-col items-start md:items-end'>
            <span className='font-semibold text-md'>Oh and in case I don't see ya<br />Good afternoon, Good evening and Goodnight</span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer