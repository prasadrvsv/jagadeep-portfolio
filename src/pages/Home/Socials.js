import React from 'react'
import { motion } from "framer-motion";
import { ReactComponent as LinkedinLogo } from "../../assets/linkedin.svg";
import { ReactComponent as DribbbleLogo } from "../../assets/dribbble.svg";
import { ReactComponent as GithubLogo } from "../../assets/github.svg";
import { ReactComponent as GmailLogo } from "../../assets/gmail.svg";
import { ReactComponent as InstagramLogo } from "../../assets/instagram.svg";
import { ReactComponent as ResumeLogo } from "../../assets/resume.svg";
import  resumePdf  from "../../assets/resume.pdf";


function Socials() {
    const handleLinkedinClick = () => {
        window.open('https://www.linkedin.com/in/jagadeepavula', '_blank');
    }

    const handleDribbbleClick = () => {
        window.open('https://dribbble.com/jagadeep_avula', '_blank')
    }

    const handleGithubClick = () => {
        window.open('https://github.com/jagadeepavula', '_blank');
    };

    const handleInstagramClick = () => {
        window.open('https://www.instagram.com/jaga_deeep/', '_blank');
    };

    const handleGmailClick = () => {
        const subject = encodeURIComponent("Let's connect!");
        const body = encodeURIComponent("Hey, Congratulations on taking the plunge and clicking that button! Whether you're just here to test if it works (spoiler: it does) or if you've got something exciting like a job opportunity or a project in mind, I'm all in.");
        const toAddress = 'jagadeepavula@gmail.com';

        const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${toAddress}&su=${subject}&body=${body}`;

        window.open(mailtoLink, '_blank');
    };

    const handleResume = () => {
        window.open(resumePdf, "_blank");
    };

    return (
        <div id='socials' className='the-whole-section flex flex-col h-auto w-full items-center justify-center mb-10'>
            <div className='section-with-width grid lg:grid-cols-10 grid-cols-1 h-auto w-5/6 justify-center items-center '>
                <div className='left-section lg:col-span-6 lg:mr-5'>
                    <span className='font-extrabold xl:text-9xl lg:text-8xl md:text-7xl text-6xl tracking-tighter'>Social</span><br />
                    <span className='font-extrabold xl:text-9xl lg:text-8xl md:text-7xl text-6xl tracking-tighter '>Networking</span><br />
                    <span className='justify-center items-center '>
                        <h4 className='text-md font-light mt-2 mb-4 text-justify leading-5 lg:leading-6 '>Click 'Resume' for the whole portfolio in one PDF. If it fits a role you're trying to fill, shoot me an email.
                            Or let's connect and chat over chai on LinkedIn about code, design, or anything that doesn't involve pineapple on pizza.
                            Insta's where movie buffs unite—DM for popcorn-worthy recommendations.
                            Make me an offer i can't refuse!
                        </h4></span>
                </div>
                <div className='right-section lg:col-span-4 ' >
                    <div className='w-full' style={{ height: 'calc(6 * 87px)' }}>
                        <motion.div className='card1 grid grid-cols-10 w-full bg-customLinkedin h-28 rounded-xl justify-center items-center shadow-2xl' whileHover={{ translateY: -10 }} style={{ zIndex: 0 }} onClick={handleLinkedinClick}>
                            <div className='bg-customLinkedinFont ml-4 flex justify-center items-center h-20 w-20 col-span-3 rounded-2xl'>
                                <LinkedinLogo className='w-14 h-14' />
                            </div>
                            <h1 className='col-span-7 ml-7 md:text-4xl text-3xl text-customLinkedinFont font-extrabold items-center justify-center '>LinkedIn</h1>
                        </motion.div>
                        <motion.div className='card2  w-full h-28 bg-customVanilla rounded-xl z-5 grid grid-cols-10 justify-between items-center shadow-2xl' whileHover={{ translateY: -40 }} style={{ zIndex: 1, translateY: -30 }} onClick={handleDribbbleClick}>
                            <div className='bg-customVanillaFont ml-4 flex justify-center items-center h-20 w-20 col-span-3 rounded-2xl'>
                                <DribbbleLogo className='w-14 h-14' />
                            </div>
                            <h1 className='col-span-7 ml-7 text-customVanillaFont md:text-4xl text-3xl font-extrabold'>Dribbble</h1>
                        </motion.div>
                        <motion.div className='card3  w-full h-28  bg-customGithub rounded-xl z-5 grid grid-cols-10 justify-between items-center shadow-2xl' whileHover={{ translateY: -70 }} style={{ zIndex: 2, translateY: -60 }} onClick={handleGithubClick}>
                            <div className='bg-customGithubFont ml-4 flex justify-center items-center h-20 w-20 col-span-3 rounded-2xl'>
                                <GithubLogo className='w-14 h-14' />
                            </div>
                            <h1 className='col-span-7 ml-7 md:text-4xl text-3xl text-customGithubFont font-extrabold'>Github</h1>
                        </motion.div>
                        <motion.div className='card4  w-full h-28 bg-customFiling rounded-xl z-5 grid grid-cols-10 justify-between items-center shadow-2xl' whileHover={{ translateY: -100 }} style={{ zIndex: 3, translateY: -90 }} onClick={handleInstagramClick}>
                            <div className='bg-customFilingFont ml-4 flex justify-center items-center h-20 w-20 col-span-3 rounded-2xl'>
                                <InstagramLogo className='w-14 h-14' />
                            </div>
                            <h1 className='col-span-7 ml-7 text-customFilingFont md:text-4xl text-3xl font-extrabold'>Instagram</h1>
                        </motion.div>
                        <motion.div className='card5  w-full h-28 bg-customInsta rounded-xl z-5 grid grid-cols-10 justify-between items-center shadow-2xl' whileHover={{ translateY: -130 }} style={{ zIndex: 4, translateY: -120 }} onClick={handleGmailClick}>
                            <div className='bg-customInstaFont ml-4 flex justify-center items-center h-20 w-20 col-span-3 rounded-2xl'>
                                <GmailLogo className='w-14 h-14' />
                            </div>
                            <h1 className='col-span-7 ml-7 text-customInstaFont md:text-4xl text-3xl font-extrabold'>Gmail</h1>
                        </motion.div>
                        <motion.div className='card6 w-full h-28 bg-customYellow rounded-xl z-5 grid grid-cols-10 justify-between items-center shadow-2xl' whileHover={{ translateY: -160 }} style={{ zIndex: 5, translateY: -150 }} onClick={handleResume}>
                            <div className='bg-customYellowFont ml-4 flex justify-center items-center h-20 w-20 col-span-3 rounded-2xl'>
                                <ResumeLogo className='w-14 h-14' />
                            </div>
                            <h1 className='col-span-7 ml-7 text-customYellowFont md:text-4xl text-3xl font-extrabold'>Resume</h1>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Socials
