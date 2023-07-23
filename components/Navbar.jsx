/* eslint-disable react/jsx-no-comment-textnodes */
import { useState } from 'react'
import { motion } from 'framer-motion'

import { navLinks } from './constants'
import { useRouter } from 'next/router'


const Scramble = ( text, doc ) => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

    let interval = null;
 
        let iteration = -2;
        
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
                if (document.getElementById(doc)) {
                    document.getElementById(doc).innerHTML = scramble
                } 
            }
        }, 30);


}

const Navbar = ( { page }) => {
    const [active, setActive] = useState(page)
    const router = useRouter()

  return (

    <nav
        className=' flex bg-transparent'
    >
            <ul className='list-none hidden sm:flex flex-row gap-6 bg-transparent'>
                {navLinks.map((link) => ( 
                    <div className='bg-transparent'
                    onMouseOver={() => Scramble(link.title, link.title)}
                    onClick={() => {
                        if (active != link.title) {
                            setActive(link.title),
                            router.push(`/${link.id}`)
                        }
                    }}
                    >
                    <li
                        key = {link.id}
                        className = {`${
                            active === link.title
                            ? 'text-[#83de83]'
                            : 'text-[#0f0]'
                        } hover:[text-shadow:_2px_2px_2px_rgb(0_255_0_/_100%)] hover:scale-110 text-[24px] [text-shadow:_2px_2px_2px_rgb(0_255_0_/_30%)] cursor-pointer bg-transparent`}
            
                        id = {link.title}
                   >{link.title}
                    </li>
                    </div>
                ))}
            </ul>


    </nav>
  )
}


export default Navbar