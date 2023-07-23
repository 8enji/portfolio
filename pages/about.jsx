import React from 'react'
import Head from 'next/head'
import Script from 'next/script'
import { motion } from 'framer-motion'
import Typed from 'typed.js'

import { Navbar, Layout } from '../components'

const About = () => {
    /* 
    Navbar
    I am a ____ | React
    Description | AI
                | Hiking
    
    */
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Computer Scientist.', 'Learner.', 'Creator.', 'Student.', 'Pathfinder.', 'Researcher.'],
            typeSpeed: 60,
            backSpeed: 40,
            startDelay: 1300,
            backDelay: 4000,
            loop: true,
            shuffle: true
          });

          return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
          };
        }, []);
    
    return (
        <>
        <Script src= "/static/particle-image.js"></Script>
        <Layout page='About'>
            <div className='mt-4 absolute bg-transparent'>
                <motion.div className='flex justify-center bg-transparent'
                    animate={{opacity: [0,1]}} transition={{delay: 0, duration: 4}}>
                    <Navbar page='About'/>
                </motion.div>

                <div className='mt-20 flex h-500 bg-transparent'>
                    <div>
                        <motion.div className='inline bg-transparent text-[50px] text-[#fff] [text-shadow:_2px_2px_2px_rgb(0_255_0_/_50%)]'
                              animate={{opacity: [0,1]}} transition={{delay: .5, duration: 4}}>
                            <span className='text-[#0f0]'>I am a </span>
                            <span ref={el} className='underline' ></span>
                        </motion.div>

                        <motion.div className=' bg-transparent w-[50vw] text-[#83de83] text-[22px] mt-6'
                            animate={{opacity: [0,1]}} transition={{delay: .5, duration: 4}}>
                            &#123; <br></br> 
                            <span className='font-bold text-[#0f0]'>Name </span> : "Benjamin Charest" <br></br> 
                            <span className='font-bold text-[#0f0]'>Education </span> : "Georgia Institute of Technolgy - BS Computer Science" <br></br> 
                            <span className='font-bold text-[#0f0]'>Focus </span> : "Artificial Intelligence & Theory" <br></br> 
                            <span className='font-bold text-[#0f0]'>Technologies </span> : "Python, Java, Javascript, React, NextJS, CSS, HTML, MATLAB, MySQL" <br></br> 
                            <span className='font-bold text-[#0f0]'>Description </span>: "I am an aspiring Software Engineer interested in Algorithm Design and Optimization. In my free time, I 
                            enjoy pursuring creative pursuits such as design and web development. I am involved in the Competitive Programming team
                            and the Data Science club at my university. I also enjoy hiking, skateboarding, and reading."
                            <br></br>&#125;
                            
                        </motion.div>
                    </div>
                    <motion.div className=' ml-3 bg-gradient-to-b from-[#0f0] to-[#83de83] w-1.5 h-[80vh] rounded-full '
                          animate={{opacity: [0,1]}} transition={{delay: 0, duration: 4}}></motion.div>
                    <div className='flex-row'>
                        <div id="particle-image" data-params-src="/static/params.json"
                            className=' cursor-pointer bg-transparent'>
                        </div>
                        <div id="particle-image-2" data-params-src="/static/params_react.json"
                            className= ' cursor-pointer bg-transparent -mt-[450px] '>
                        </div>
                        <div id="particle-image-3" data-params-src="/static/params_mountain.json"
                            className=' cursor-pointer bg-transparent -mt-[450px]'>
                        </div>
                        <motion.div className='-mt-[460px] ml-[120px] italic opacity-30'
                          animate={{opacity: [0,1]}} transition={{delay: 2, duration: 4}}>
                            hover...
                        </motion.div>
                    </div>
                </div>
            </div>
        </Layout>
        </>
    )
}

export default About
