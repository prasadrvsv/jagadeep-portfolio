import React from 'react';
import { motion } from 'framer-motion';
import fightclubImage from "../../assets/fightclub.jpg";
import silkImage from "../../assets/silk.jpg";
import bilieImage from "../../assets/bilie.jpg";
import weekndImage from "../../assets/weeknd.jpg";
import jokerImage from "../../assets/joker.JPG";
import GrootButton from "../../components/GrootButton.js"
import Deface from "../../assets/defaced.png";

function Defaced() {
    const handleInstagramRedirect = () => {
        window.open('https://www.instagram.com/defaced_artistry?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', '_blank');
    };

    return (
        <div id="Defaced" className='relative h-auto flex items-center w-screen justify-center top-0 mt-40 mb-60'>
            <div className='w-screen h-auto flex flex-col items-center '>
                <div className='title mb-10 '>
                    <div className='flex flex-row items-center justify-center'>
                        <img src={Deface} alt='' className='object-cover mr-5 h-auto w-16'></img>
                        <span className='font-black text-7xl tracking-tight'>Defaced</span>
                    </div>
                </div>

                <div className='buttons mb-20'>
                    <GrootButton onClick={handleInstagramRedirect} initialText="I'm Groot" hoverText="Visit Page" />
                </div>

                <div className=' grid grid-rows-3 cardParent h-auto w-5/6 '>
                    <div className='flex flex-row items-center justify-center md:space-x-20'>
                        <motion.div
                            className='relative card1 lg:w-[20rem] lg:h-[30rem] w-[12rem] h-[18rem] rounded-lg shadow-md z-0 bg-customCard1 flex flex-col justify-end'
                            initial={{ rotate: -5 }}
                            whileHover={{ rotate: -5, scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="p-5 flex flex-col h-full justify-between">
                                <h2 className="lg:text-4xl text-2xl font-bold text-customCard1font">The <br />Weeknd</h2>
                                <img src={weekndImage} alt='' className='object-cover h-auto w-full rounded-3xl shadow-2xl' />

                            </div>
                        </motion.div>

                        <motion.div
                            className='card2  lg:w-[20rem] lg:h-[30rem] w-[12rem] h-[18rem] rounded-lg shadow-md z-20 bg-customCard2 flex flex-col justify-end'
                            initial={{ rotate: -3, }}
                            whileHover={{ rotate: -3, scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="p-5 flex flex-col h-full justify-between">
                                <h2 className="lg:text-4xl text-2xl font-bold text-customCard2font">Silk<br />Smitha</h2>
                                <img src={silkImage} alt='' className='object-cover h-auto w-full rounded-3xl shadow-2xl' />
                            </div>
                        </motion.div>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <motion.div
                            className='card3 lg:w-[20rem] lg:h-[30rem] w-[12rem] h-[18rem] bg-customCard3 rounded-lg shadow-md z-40 flex flex-col justify-end'
                            initial={{ rotate: 3 }}
                            whileHover={{ rotate: 3, scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="p-5 flex flex-col h-full justify-between ">
                                <h2 className="lg:text-4xl text-2xl font-bold text-customCard3font">Fightclub</h2>
                                <img src={fightclubImage} alt='' className='object-cover h-auto w-full rounded-3xl shadow-2xl' />
                            </div>
                        </motion.div>
                    </div>


                    <div className='flex flex-row items-center justify-center md:space-x-20'>
                        <motion.div
                            className=' card4  lg:w-[20rem] lg:h-[30rem] w-[12rem] h-[18rem] bg-customVanillaFont rounded-lg shadow-md z-10 flex flex-col justify-end'
                            initial={{ rotate: -3 }}
                            whileHover={{ rotate: -3, scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="p-5 flex flex-col h-full justify-between">
                                <h2 className="lg:text-4xl text-2xl font-bold text-customCard4font">Joker</h2>
                                <img src={jokerImage} alt='' className='object-cover h-auto w-full rounded-3xl shadow-2xl' />
                            </div>
                        </motion.div>

                        <motion.div
                            className=' card5  lg:w-[20rem] lg:h-[30rem] w-[12rem] h-[18rem] bg-customCard5 rounded-lg shadow-md z-50 flex flex-col justify-end '
                            initial={{ rotate: 5 }}
                            whileHover={{ rotate: 5, scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="p-5 flex flex-col h-full justify-between">
                                <h2 className="lg:text-4xl text-2xl font-bold text-customCard5font r-0" >Billie Joe<br />Armstrong</h2>
                                <img src={bilieImage} alt='' className='object-cover h-auto w-full rounded-3xl shadow-2xl' />
                            </div>
                        </motion.div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Defaced;
