import React from 'react'
import Header from '../../components/Header'
import Intro from './Intro'
import About from './About'
import Work from './Work'
import Project from './Project'
import Socials from './Socials'
import Defaced from './Defaced'
import Footer from './Footer'
// import Footer from './Footer'

function Home() {
    return (
        <div className='w-full h-full flex flex-col justify-center items-center overflow-hidden'>
            <Header />
            <Intro />
            <About />
            <Work />
            <Project />
            <Defaced />
            <Socials />         
            <Footer />
        </div>
    )
}

export default Home
