import React, { useState } from 'react';
import { motion, AnimatePresence, useDragControls, useMotionValue } from 'framer-motion';

function Card({ item }) {
    const [showModal, setShowModal] = useState(false);
    const [selectedDesc, setSelectedDesc] = useState('');
    const controls = useDragControls();
    const y = useMotionValue(0);

    const handleDetailsClick = (id, desc) => {
        setSelectedDesc(desc);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };


    return (
        <div className='whole-page h-auto flex flex-row justify-center items-center relative overflow-hidden'>
            {/* Overlay behind the modal */}
            {showModal && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className='fixed inset-0 bg-neutral-950/70 z-40'
                    onClick={handleCloseModal}
                ></motion.div>
            )}

            {/* Modal */}
            <motion.div
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                style={{ y }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                }}
                exit={{ y: "100%", opacity: 0 }}
                onDragEnd={() => {
                    if (y.get() >= 100) {
                        handleCloseModal();
                    }
                }}
                drag="y"
                dragControls={controls}
                dragListener={false}
                dragConstraints={{
                    top: 0,
                    bottom: 0,
                }}
                dragElastic={{
                    top: 0,
                    bottom: 0.5,
                }}
                className={`modal fixed flex flex-col bottom-0 left-0 h-[75vh] rounded-t-3xl items-center justify-center text-white bg-customBlack z-50 ${showModal ? 'visible' : 'hidden'}`}>
                <div className="absolute left-0 right-0 items-center top-0 z-10 flex justify-center bg-customBlack p-4">
                    <button
                        onPointerDown={(e) => {
                            controls.start(e);
                        }}
                        className="h-2 w-14 cursor-grab touch-none rounded-full bg-neutral-700 active:cursor-grabbing"
                    ></button></div>
                <div
                    style={{
                        overflowY: 'auto',
                        scrollbarWidth: 'none',
                        '&::-webkit-scrollbar': {
                            display: 'none',
                        },
                    }}
                    className='text-3xl font-black relative h-full w-5/6 justify-center items-center text-justify p-4 pt-12 text-white modal-content scrollbar-hidden overflow-y-auto'>
                    {selectedDesc}
                </div>
                {/* Close button */}
            </motion.div>

            <div className='project-button-section w-5/6 grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1  items-center'>
                {item.map((val) => (
                    <motion.div
                        layout
                        whileHover={{ scale: 1.05 }}
                        animate={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        key={val.id}
                        className='card-element m-5 p-5 h-[470px] flex flex-col items-center justify-between max-w-full rounded-3xl bg-teal-50'
                    >
                        <AnimatePresence>
                            <div className='image-tag flex flex-col items-center justify-center '>
                                <img src={val.image} alt='' className='max-w-full max-h-48 rounded-3xl shadow-xl object-contain' />
                            </div>

                            <div className='card-body flex flex-col items-center justify-center'>
                                <div className='project-title text-3xl font-bold m-2'>{val.title}</div>
                                <div className='project-desc text-justify font-medium p-2'>{val.desc}</div>
                                <div className='flex flex-row justify-between gap-2 mt-4'>
                                    <a
                                        href={val.Link}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='flex flex-grow border-none justify-center text-base rounded-3xl bg-black cursor-pointer text-white font-bold items-center h-9 w-16 no-underline'
                                    >
                                        Source
                                    </a>

                                    {/* Details Button */}
                                    <button
                                        className='flex flex-grow border-none justify-center text-base rounded-3xl bg-black cursor-pointer text-white font-bold items-center h-9 w-16 no-underline'
                                        onClick={() => handleDetailsClick(val.id, val.desc)}
                                    >
                                        Details
                                    </button>
                                </div>
                            </div>
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Card;
