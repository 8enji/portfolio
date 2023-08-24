import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import Image from 'next/image'

import { Layout, Navbar } from '../components'
import { projects } from '../components/constants'

const ProjectCard = ({ index, name, description, tags, image, source_image, source_code_link }) => {
    return (
        <motion.div animate={{opacity: [0,1]}} transition={{ duration: .25}} className='bg-[rgba(0,0,0,.95)]'>
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450
                }}
                className='bg-transparent p-5 rounded-2xl sm:w-[360px] w-full'
            >
                <div className='relative w-full h-[230px] bg-transparent'>
                    <Image
                        src={image}
                        alt={name}
                        className='w-full h-full object-cover rounded-2xl bg-transparent'
                    />

                    <div className='inset-0 -mt-[220px] bg-transparent flex justify-end m-3'>
                        <div 
                        onClick={() => window.open(source_code_link, "_blank")}
                        className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                        >
                            <Image 
                                src={source_image}
                                alt = 'github'
                                className='w-3/4 object-contain bg-transparent'
                            />
                        </div>
                    </div>
                </div>
                <div className='bg-gradient-to-r from-[#0f0] to-[#83de83] mt-3 h-1 rounded-full'></div>
                <div className='mt-2 bg-transparent'>
                    <h3 className='font-bold text-[28px] bg-transparent text-[#0f0] [text-shadow:_2px_2px_2px_rgb(0_255_0_/_50%)]'>{name}</h3>
                    <p className='mt-2 text-[18px] bg-transparent'>{description}</p>
                </div>

                <div className='mt-4 flex flex-wrap gap-2 bg-transparent'>
                    {tags.map((tag) => (
                        <p key={tag.name} className={`text-[14px] text-[#83de83]`}>
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    )
}

const Projects = () => {
    return (
        <Layout page='Projects'>
            <div className='absolute mt-4 bg-transparent'>
                <motion.div className='flex justify-center bg-transparent'
            animate={{opacity: [0,1]}} transition={{delay: 0, duration: 4}}>
                    <Navbar page='Projects'/>
                </motion.div>

                <div className='bg-transparent'>
                    <div className='mt-20 flex flex-wrap gap-7 bg-transparent'>
                    {projects.map((project, index) => (
                        <ProjectCard 
                            key={`project-${index}`}
                            index={index}
                            {...project}
                        />
                    ))}
                    </div>
                </div>
                <div className='flex justify-center mt-10 text-[18px] italic text-[#0f0] opacity-10 bg-transparent'>
                    Work in progress...
                </div>
            </div>
        </Layout>
    )
}

export default Projects
