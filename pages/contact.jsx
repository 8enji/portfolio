import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { Navbar, Layout } from '../components'

const  Contact = () => {
    const formRef = useRef()
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({...form, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)

        emailjs.send(
            'service_404kb4b', 
            'template_qg388ko', 
            { 
                from_name: form.name,
                to_name: 'Ben',
                from_email: form.email,
                to_email: 'b.charest04@gmail.com',
                message: form.message
            },
            'izaGI6964yU-tVIhM'
            )
            .then(() => {
                setLoading(false)
                alert('Thank you. I will get back to you soon!')

                setForm({
                    name: '',
                    email: '',
                    message: ''
                })
            }, (error) => {
                setLoading(false)

                console.log(error)

                alert('Something went wrong.')
            })

    }

  return (
    <Layout page='Contact'>
    <div className='mt-4 absolute flex-row w-full'>
        <motion.div className='flex justify-center bg-transparent'
            animate={{opacity: [0,1]}} transition={{delay: 0, duration: 4}}>
            <Navbar page='Contact'/>
        </motion.div>
        <motion.div className='bg-gradient-to-b from-[#0f0] to-[#83de83] w-1.5 h-[70vh] mt-[8vh] rounded-full relative ml-[42vw]'
                          animate={{opacity: [0,1]}} transition={{delay: 0, duration: 4}}></motion.div>
        <div className='flex-col-reverse flex -ml-[6vw] -mt-[70vh] items-center absolute h-[100vh] w-[100vw] bg-transparent'>
         <motion.div
            className='bg-black'
        >

            <form
                ref={formRef}
                onSubmit={handleSubmit}
                className='flex flex-col bg-black rounded-2xl absolute'
            >
                <label className='flex flex-col bg-transparent'>
                    <span className='text-[34px] text-[#0f0] [text-shadow:_2px_2px_2px_rgb(0_255_0_/_50%)] mb-1 bg-transparent ml-2 mt-2'>Name</span>
                    <input 
                        type='text'
                        name = 'name'
                        value={form.name}
                        onChange={handleChange}
                        placeholder="What's your name?"
                        className='bg-tertiary py-4 px-2 placeholder:text-secondary text-white rounded-lg outline-none border-none text-[22px]'
                    />
                </label>

                <label className='flex flex-col bg-transparent'>
                    <span className='text-[34px] text-[#0f0] [text-shadow:_2px_2px_2px_rgb(0_255_0_/_50%)] mb-1 bg-transparent ml-2'>Email</span>
                    <input 
                        type='email'
                        name = 'email'
                        value={form.email}
                        onChange={handleChange}
                        placeholder="What's your email?"
                        className='bg-tertiary py-4 px-2 placeholder:text-secondary text-white rounded-lg outline-none border-none text-[22px]'
                    />
                </label>

                <label className='flex flex-col bg-transparent'>
                    <span className='text-[34px] text-[#0f0] [text-shadow:_2px_2px_2px_rgb(0_255_0_/_50%)] mb-1 bg-transparent ml-2'>Message</span>
                    <textarea
                        rows="7" 
                        name = 'message'
                        value={form.message}
                        onChange={handleChange}
                        placeholder="What do you want to say?"
                        className='bg-tertiary py-4 px-2 placeholder:text-secondary text-white rounded-lg outline-none border-none text-[22px]'
                    />
                </label>

                <button 
                    type='submit'    
                    className='bg-tertiary px-2 -mt-20 outline-none w-fit text-[34px] text-[#0f0] [text-shadow:_2px_2px_2px_rgb(0_255_0_/_50%)] rounded-xl'
                >
                    {loading ? 'Sending...' : 'Send'}
                </button>
            </form>
        </motion.div>


    </div>
    </div>
    </Layout>
  )
}

export default Contact
