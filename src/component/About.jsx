import React from 'react'
import m from '../assets/me.jpg'
import { FaArrowRight } from 'react-icons/fa'
import { motion } from "motion/react"
import { FaLocationDot } from 'react-icons/fa6'
import Home from './Home'



function About() {
    return (
        <>

        




            <div className='grid md:grid-cols-2 mt-16'>







                <div className='md:ms-28 md:p-0 p-5 md:w-[580px] md:h-[450px] '>

                    <motion.img
                        initial={{ opacity: 0, y: 200 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: '0.5' }} src={m} alt="no image" />

                </div>







                <motion.div 

                    initial={{ opacity: 0, y: 300 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: '.5' }}  >
                    <div>

                        <div >

                            <div className='flex'>
                                <h1 className='font-bold text-xl md:ms-0 ms-24  text-green-500'>ABOUT US</h1>
                                <div className='bg-green-500 h-1 mt-2 ms-2 w-10'>
                                    <div className='bg-green-500 h-0.5 w-16 mt-3'></div>
                                </div>
                            </div>





                            <h1 className='md:text-5xl font-bold md:ms-0 ms-10 text-3xl'>Welcome to Tourist</h1>

                            <p className=' md:font-bold mt-6 md: px-3 md:px-0 text-black/50'>Tempor erat elitr rebum at clita. Diam dolor diam br ipsum sit. Aliqu diam <br /> amet diam et eos. Clita erat ipsum et lorem et sit.</p>

                            <p className=' font-bold px-3 md:px-0 mt-6 text-black/50'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam <br /> amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita <br /> duo justo magna dolore erat amet</p>




                        </div>

                        <div className='grid px-3 md:px-0 grid-cols-2'>
                            <div className='mt-8'>

                                <div className='flex gap-2'>
                                    <FaArrowRight className='text-green-500 mt-1' size={20} />
                                    <h1 className=' text-black/50 font-bold'>First Class Flights</h1>
                                </div>

                                <div className='flex gap-2 mt-2'>
                                    <FaArrowRight className='text-green-500 mt-1' size={20} />
                                    <h1 className=' text-black/50 font-bold'>5 Star Accommodations</h1>
                                </div>

                                <div className='flex gap-2 mt-2'>
                                    <FaArrowRight className='text-green-500 mt-1' size={20} />
                                    <h1 className=' text-black/50 font-bold'>150 Premium City Tours</h1>
                                </div>




                            </div>

                            <div className='mt-8 '>

                                <div className='flex gap-2'>
                                    <FaArrowRight className='text-green-500 mt-1' size={20} />
                                    <h1 className=' text-black/50 font-bold'>Handpicked Hotels</h1>
                                </div>

                                <div className='flex gap-2 mt-2'>
                                    <FaArrowRight className='text-green-500 mt-1' size={20} />
                                    <h1 className=' text-black/50 font-bold'>Latest Model Vehicles</h1>
                                </div>

                                <div className='flex gap-2 mt-2'>
                                    <FaArrowRight className='text-green-500 mt-1' size={20} />
                                    <h1 className=' text-black/50 font-bold'>24/7 Service</h1>
                                </div>




                            </div>


                            <div className='mt-7.5'>
                                <button className='bg-green-500 w-40 h-14 text-xl font-bold'>Read more</button>
                            </div>




                        </div>



                    </div>
                </motion.div>








            </div>


            






















        </>
    )
}

export default About