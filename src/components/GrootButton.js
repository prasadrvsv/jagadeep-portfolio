// GrootButton.js

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;
const CHARS = "!@#$%^&*():{};|,.<>/?";

const GrootButton = ({ initialText, hoverText, onClick }) => {
    const intervalRef = useRef(null);
    const [text, setText] = useState(initialText);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (!isHovered) {
            setText(initialText);
        }
    }, [initialText, isHovered]);

    const scramble = () => {
        let pos = 0;
        setIsHovered(true);

        intervalRef.current = setInterval(() => {
            const scrambled = hoverText.split("")
                .map((char, index) => {
                    if (pos / CYCLES_PER_LETTER > index) {
                        return char;
                    }

                    const randomCharIndex = Math.floor(Math.random() * CHARS.length);
                    const randomChar = CHARS[randomCharIndex];

                    return randomChar;
                })
                .join("");

            setText(scrambled);
            pos++;

            if (pos >= hoverText.length * CYCLES_PER_LETTER) {
                clearInterval(intervalRef.current);
                setText(hoverText);
            }
        }, SHUFFLE_TIME);
    };

    const stopScramble = () => {
        clearInterval(intervalRef.current);
        setIsHovered(false);
    };

    return (
        <motion.button
            whileHover={{
                scale: 1.025,
            }}
            whileTap={{
                scale: 0.975,
            }}
            onMouseEnter={scramble}
            onMouseLeave={stopScramble}
            onClick={onClick} // Invoke the onClick prop here
            className="group relative overflow-hidden rounded-3xl bg-customBlack px-4 py-2 cursor-pointer font-medium text-white border-none items-center justify-center"
        >
            <div className="relative z-10 flex items-center gap-2">
                <span>{text}</span>
            </div>
            <motion.span
                initial={{
                    y: "100%",
                }}
                animate={{
                    y: "-100%",
                }}
                transition={{
                    
                    repeatType: "mirror",
                    duration: 1,
                    ease: "linear",
                }}
                className="duration-300 absolute inset-0 z-0 scale-125"
            />
        </motion.button>
    );
};

export default GrootButton;
