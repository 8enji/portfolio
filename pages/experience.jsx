import React from 'react'
import { motion } from 'framer-motion'
import { Timeline } from 'flowbite-react'
import Image from 'next/image'

import { Navbar, Layout } from '../components'
import { github } from '../components/assets'
import { isi, atp, jumpstart } from '../components/assets'

const Experience = () => {
    /*
    
    */
    return (
        <Layout page='Experience'>
            <div className='mt-4 absolute flex-row w-full'>
                <motion.div className='flex justify-center bg-transparent'
                    animate={{opacity: [0,1]}} transition={{delay: 0, duration: 4}}>
                    <Navbar page='Experience'/>
                </motion.div>
                <motion.div className='ml-5 mr-5 mt-[15vh]'
                    animate={{opacity: [0,1]}} transition={{delay: 0, duration: 2}}>
                    <ol class="sm:flex items-baseline">
                        <li class="relative mb-6 sm:mb-0">
                            <div class="flex items-center">
                                <div class="z-10 flex items-center justify-center w-12 h-12 bg-[#83de83] rounded-full ring-8 ring-gray-900 shrink-0">
                                    <Image
                                    src={atp}
                                    alt={'atp'}
                                    className='w-full h-full bg-transparent mt-1 scale-90'
                                />
                                </div>
                                <div class="hidden sm:flex w-full bg-gradient-to-r from-[#0f0] to-[#83de83] h-1 mr-3 ml-3 rounded-full"></div>
                            </div>
                            <div class="mt-3 sm:pr-8">
                                <h3 class="text-[24px] font-semibold  text-[#0f0] [text-shadow:_2px_2px_2px_rgb(0_255_0_/_50%)]">Access Test Prep</h3>
                                <time class="block mb-2 text-[18px] leading-none text-gray-400 dark:text-gray-500 italic">Tutor | Jan 2023 - Present</time>
                                <p class="text-[20px] font-normal text-gray-500 dark:text-gray-400">
                                    - Tutored high-schoolers 1-on-1 in subjects including SAT/ACT prep, AP Physics, AP Calculus, and AP Computer Science <br></br>
                                    - Developed unique lesson plans for each of my students catered to their specific strengths and weaknesses <br></br>
                                    - Documented progress through Excel, while actively communicating with parents and students
                                </p>
                            </div>
                        </li>
                        <li class="relative mb-6 sm:mb-0">
                            <div class="flex items-center">
                                <div class="z-10 flex items-center justify-center w-12 h-12 bg-[#83de83] rounded-full ring-8 ring-gray-900 shrink-0">
                                    <Image
                                        src={jumpstart}
                                        alt={'jumpstart'}
                                        className='w-full h-full bg-transparent scale-90'
                                    />
                                </div>
                                <div class="hidden sm:flex w-full bg-gradient-to-r from-[#0f0] to-[#83de83] h-1 mr-3 ml-3 rounded-full"></div>
                            </div>
                            <div class="mt-3 sm:pr-8">
                                <h3 class="text-[24px] font-semibold  text-[#0f0] [text-shadow:_2px_2px_2px_rgb(0_255_0_/_50%)]">Jumpstart</h3>
                                <time class="block mb-2 text-[18px] leading-none text-gray-400 dark:text-gray-500 italic">Corps Member | Aug 2022 - Present</time>
                                <p class="text-[20px] font-normal text-gray-500 dark:text-gray-400">
                                    - Engaged with children in local schools for 6 hours a week participating in activities such as reading, writing, and dramatic play <br></br>
                                    - Worked with team of coworkers to plan interactive and engaging sessions <br></br>
                                    - Targeted underprivileged communities and schools to give children opportunities they might otherwise not have
                                </p>
                            </div>
                        </li>
                        <li class="relative mb-6 sm:mb-0">
                            <div class="flex items-center">
                                <div class="z-10 flex items-center justify-center w-12 h-12 bg-[#83de83] rounded-full ring-8 ring-gray-900 shrink-0">
                                    <Image
                                        src={isi}
                                        alt={'isi'}
                                        className='w-8 h-4 bg-transparent scale-75'
                                    />
                                </div>
                                <div class="hidden sm:flex w-full bg-gradient-to-r from-[#0f0] to-[#83de83] h-1 mr-3 ml-3 rounded-full"></div>
                            </div>
                            <div class="mt-3 sm:pr-8">
                                <h3 class="text-[24px] font-semibold  text-[#0f0] [text-shadow:_2px_2px_2px_rgb(0_255_0_/_50%)]">Integrated Systems Inc.</h3>
                                <time class="block mb-2 text-[18px] font-normal leading-none text-gray-400 dark:text-gray-500 italic">Research Intern | Jun 2021 - Aug 2021</time>
                                <p class="text-[20px] font-normal text-gray-500 dark:text-gray-400">
                                    - Worked with team of three as software-lead to develop automated drink serving robot/vending machine <br></br>
                                    - Programmed robot control programs using ABB Robot Studio<br></br>
                                    - Developed back-end applications using Python<br></br>
                                    - Created solutions to handle payment, safely (and aesthetically) pour drinks, and handle mechanical limitations.
                                </p>
                            </div>
                        </li>

                    </ol>

                </motion.div>
            </div>
        </Layout>
    )
}

export default Experience
