import React from 'react'
import Navbar from './Navbar.jsx';
import {motion } from 'framer-motion'

const Scramble = ( text ) => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

    let interval = null;

        let iteration = -20;
        
        clearInterval(interval);
        
        interval = setInterval(() => {
            let scramble = text
            .split("")
            .map((letter, index) => {
                if(index < iteration) {
                return text[index];
                }
            
                return letters[Math.floor(Math.random() * letters.length)]
            })
            .join("");
            
            if(iteration >= text.length){
            clearInterval(interval);
            }
            
            iteration += 1 / 3;
            if (typeof document !== 'undefined') {
                document.getElementById('text-div').innerHTML = scramble
            }
        }, 30);

}

const Main = () => {
  return (
        <div className='relative flex-col text-[50px] bg-transparent -top-[10vh]'>
            <motion.div className='bg-transparent text-[#0f0] [text-shadow:_2px_2px_2px_rgb(0_255_0_/_50%)]'
                animate={{opacity: [0,1]}} transition={{delay: 1, duration: 2}}
                id ='text-div'
                >
                {Scramble('B E N _ C H A R E S T')} 
            </motion.div>
            <div className=' mt-2 bg-transparent'>
            <motion.div className='w-full flex relative justify-center items-center max-w-7xl mx-auto bg-transparent -top-3'
            animate={{opacity: [0,1]}} transition={{delay: 2, duration: 6}}>
                <Navbar page = 'Home'/>
            </motion.div>
            </div>
        </div>
  )
}

export default Main
