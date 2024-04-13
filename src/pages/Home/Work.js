import React, { useState } from 'react';
import Accordian, { AccordianItem } from '../../components/Accordian';
import designedImage from '../../assets/chumma.jpg';

function HoverImage({ imageSrc, alt, isHovering }) {
    return (
        <img
    src={imageSrc}
    alt={alt}
    className={`absolute z-10 rounded-xl transition-all duration-500 ease-in-out w-32 h-auto ${isHovering ? 'block' : 'hidden'}`}    
/>
    );
}

function Work() {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    return (
        <main id='work' className='bg-customBlack mt-20 pb-2 relative'>
            <div className='introwork w-5/6 mx-auto pt-5'>
                <div className="grid xl:grid-cols-2 sm:py-5 py-10 ">
                    <span className=" sm:text-7xl text-5xl text-customExperience font-black">Experiences.</span>
                    <span className=" sm:text-justify font-semibold text-md text-customUl">"I'm not afraid of storms, for I'm learning how to sail my ship" Every project is a journey of discovery, improving my skills and focus. I learn, innovate, and progress, seeing challenges as opportunities.</span>
                </div>
            </div>
            <hr className="w-5/6 mx-auto border-teal-500" />
            <div className='w-fit flex flex-col items-center justify-center'>
                <div className=' w-fit flex flex-col items-center justify-center'>
                    <Accordian className="parent flex flex-col items-center justify-center">
                        <AccordianItem
                            value="1"
                            trigger="Amerifab International Inc"
                            subText="Full Stack developer"
                            dateText="August 23-December 23"
                            additionalContent={
                                <div className="flex flex-row gap-4 justify-center items-center">
                                    <span className="px-4 py-2 rounded-3xl bg-teal-50 text-customBlack">Python</span>
                                    <span className="px-4 py-2 rounded-3xl bg-teal-50 text-customBlack">React</span>
                                    <span className="px-4 py-2 rounded-3xl bg-teal-50 text-customBlack">Aws</span>
                                    <span className="px-4 py-2 rounded-3xl bg-teal-50 text-customBlack">Postgres</span>
                                    <span className="px-4 py-2 rounded-3xl bg-teal-50 text-customBlack">Docker</span>
                                </div>
                            }
                        >
                            <ul>
                                <li>
                                    <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Designed</span> and architected the application, focusing on scalability.{' '}
                                    <HoverImage
                                        imageSrc={designedImage}
                                        alt="Designed Image"
                                        isHovering={isHovering}
                                    />
                                </li>
                                <li>Utilized Python scripts for data extraction from MyWay and integrated AWS services like SQS to trigger Lambda functions for seamless data flow into S3 and Postgres DB.</li>
                                <li>Implemented robust error handling with SQS DLQ for failovers and alerts.</li>
                                <li>Developed a REST API with FAST API, used React framework for frontend development, and leveraged AWS services for hosting and management.</li>
                            </ul>
                        </AccordianItem>



                        {/* experience2 */}
                        <AccordianItem value="2" trigger="Oregon State University" subText="IT Specialist" dateText="June 23 - March 23" additionalContent={
                            <div className="flex flex-row gap-4 justify-center items-center">
                                <span className="px-4 py-2 rounded-3xl bg-teal-50 text-customBlack">SQL</span>
                                <span className="px-4 py-2 rounded-3xl bg-teal-50 text-customBlack">OracleDB</span>
                                <span className="px-4 py-2 rounded-3xl bg-teal-50 text-customBlack">Python</span>
                            </div>
                        }
                        >
                            <ul>
                                <li>Successfully managing hybrid Mac/Windows IT systems, serving a workforce of over 200 employees</li>
                                <li>Continuously learn new tools and systems, gaining in-depth knowledge to assist users and manage permissions effectively</li>
                                <li>Proficiently store and manage vast amounts of data, utilizing SQL queries to extract information and solve complex problems</li>
                            </ul>
                        </AccordianItem>

                        {/* experience3 */}
                        <AccordianItem value="3" trigger="Skela Technologies" subText="Software Developer" dateText="April 20 - March 21" additionalContent={
                            <div className="flex flex-row gap-4 justify-center items-center">
                                <span className="px-2 py-2 rounded-3xl bg-teal-50 text-customBlack">Java</span>
                                <span className="px-2 py-2 rounded-3xl bg-teal-50 text-customBlack">AWS</span>
                                <span className="px-2 py-2 rounded-3xl bg-teal-50 text-customBlack">JDBC</span>
                                <span className="px-2 py-2 rounded-3xl bg-teal-50 text-customBlack">Rest API</span>
                                <span className="px-2 py-2 rounded-3xl bg-teal-50 text-customBlack">Postgres</span>
                                <span className="px-2 py-2 rounded-3xl bg-teal-50 text-customBlack">Spring Boot</span>
                            </div>
                        }
                        >
                            <ul>
                                <li>Developed Java-based RESTful APIs, leveraging HTML, CSS, and JavaScript for responsive web applications.</li>
                                <li>Designed and optimized SQL database schemas in PostgreSQL, ensuring efficient data access and retrieval</li>
                                <li>Seamlessly integrated AWS services, including Amazon S3 for scalable storage and EC2 for hosting applications, enhancing system architecture and scalability</li>
                                <li>Employed a comprehensive Java stack, utilizing Maven for project management, JDBC for database connectivity, Servlets for HTTP request handling, and Hibernate for efficient object-relational mapping (ORM). Additionally, leveraged the Spring framework and Spring Boot for scalable and streamlined enterprise application development</li>
                            </ul>
                        </AccordianItem>

                        {/* experience4 */}
                        <AccordianItem value="4" trigger="Slarity" subText="Front-End Developer" dateText="December 18 - March 20" additionalContent={
                            <div className="flex flex-row gap-4 justify-center items-center">
                                <span className="px-4 py-2 rounded-3xl bg-teal-50 text-customBlack">JavaScript</span>
                                <span className="px-4 py-2 rounded-3xl bg-teal-50 text-customBlack">React</span>
                                <span className="px-4 py-2 rounded-3xl bg-teal-50 text-customBlack">HTML</span>
                                <span className="px-4 py-2 rounded-3xl bg-teal-50 text-customBlack">CSS</span>
                                <span className="px-4 py-2 rounded-3xl bg-teal-50 text-customBlack">Figma</span>
                            </div>
                        }
                        >
                            <ul>
                                <li>Designed and developed logos, online advertisements, and interactive social media posts, meeting the high standards and requirements of the company using Adobe Creative Cloud.</li>
                                <li>Produced various website icons and collaborated with colleagues on front-end development and implementation of other collateral using Figma.</li>
                                <li>Contributed to web development projects as a key member of the development team, leveraging expertise in HTML, CSS, and Javascript, while implementing rigorous test cases to validate software quality and functionality</li>
                            </ul>

                        </AccordianItem>

                    </Accordian>
                </div>
            </div>
        </main>
    );
}

export default Work;
