import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { easeInOut, motion, useMotionValueEvent, useScroll } from "framer-motion";

function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('header');
      if (header) {
        const scrollY = window.scrollY;
        const opacity = scrollY > 0 ? 0.8 : 1; // Change opacity based on scroll position
        header.style.backgroundColor = `rgba(255, 255, 255, ${opacity})`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY , "change" , (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    }else{
      setHidden(false);
    }
  });

  return (
    <motion.div
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: easeInOut }}
      id="header" className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="flex items-center justify-end h-20 px-8">
        <div className="flex items-center sm:space-x-8 space-x-4">
          <Link to="home" smooth={true} duration={500} className="cursor-pointer font-medium hover:text-gray-800" style={{ fontWeight: 500 }}>
            Home
          </Link>
          <Link to="about" smooth={true} duration={500} className="cursor-pointer font-medium hover:text-gray-800" style={{ fontWeight: 500 }}>
            About
          </Link>
          <Link to="work" smooth={true} duration={500} className="cursor-pointer font-medium hover:text-gray-800" style={{ fontWeight: 500 }}>
            Work
          </Link>
          <Link to="projects" smooth={true} duration={500} className="cursor-pointer font-medium hover:text-gray-800" style={{ fontWeight: 500 }}>
            Projects
          </Link>
          <Link to="Defaced" smooth={true} duration={500} className="cursor-pointer font-medium hover:text-gray-800" style={{ fontWeight: 500 }}>
            Defaced
          </Link>
          <Link to="socials" smooth={true} duration={500} className="cursor-pointer font-medium hover:text-gray-800" style={{ fontWeight: 500 }}>
            Social
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default Header;
