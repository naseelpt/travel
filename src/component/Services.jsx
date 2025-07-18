import React from 'react'
import { FaCog, FaGlobe, FaHotel, FaUser } from 'react-icons/fa'
import { motion } from "motion/react"




function Services() {
    return (
        <div className='mt-20'>

            <div className='flex justify-center ms-2 '>
                <div className='bg-green-500 h-1 mt-2 w-10 mx-1.5'>
                    <div className='bg-green-500 h-0.5 w-16 mt-3 -ms-6'></div>
                </div>
                <h1 className='font-bold text-xl text-green-500'>SERVICES</h1>
                <div className='bg-green-500 h-1 mt-2 ms-2 w-10'>
                    <div className='bg-green-500 h-0.5 w-16 mt-3'></div>
                </div>
            </div>


            <h1 className='font-bold text-center text-4xl mt-4 '>Our Services</h1>



            <div className='grid md:grid-cols-4 mt-10 '>


                <div className='md:ms-28 ms-8'>




                    <motion.div
                        initial={{ opacity: 0, y: 300 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: '0.5' }}>
                        <div className='w-72  h-64 bg-white shadow-2xl p-5 pt-8'>


                            <FaGlobe size={60} className='text-green-500' />
                            <h1 className='font-bold text-2xl mt-3'> WorldWide Tours</h1>
                            <p className=' font-medium mt-3 text-black/50'>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                        </div>
                    </motion.div>



                </div>



                <div className='md:ms-16 md:mt-0 mt-5 ms-8'>
                    <motion.div
                        initial={{ opacity: 0, y: 300 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: '1' }}>
                        <div className='w-72 h-64  bg-white shadow-2xl p-5 pt-8'>
                            <FaHotel size={60} className='text-green-500' />
                            <h1 className='font-bold text-2xl mt-3'> WorldWide Tours</h1>
                            <p className=' font-medium mt-3 text-black/50'>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                        </div>
                    </motion.div>

                </div>

                <div className='md:ms-5 md:mt-0 ms-8 mt-5'>
                    <motion.div
                        initial={{ opacity: 0, y: 300 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: '1.5' }}>



                        <div className='w-72 h-64 bg-white shadow-2xl p-5 pt-8'>
                            <FaUser size={60} className='text-green-500' />
                            <h1 className='font-bold text-2xl mt-3'> WorldWide Tours</h1>
                            <p className=' font-medium mt-3 text-black/50'>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                        </div>
                    </motion.div>


                </div>

                <div className='md:-ms-5 md:mt-0 mt-5 ms-8'>
                    <motion.div
                        initial={{ opacity: 0, y: 300 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: '2' }}>

                        <div className='w-72 h-64 bg-white shadow-2xl p-5 pt-8'>
                            <FaCog size={60} className='text-green-500' />
                            <h1 className='font-bold text-2xl mt-3'> WorldWide Tours</h1>
                            <p className=' font-medium mt-3 text-black/50'>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                        </div>
                    </motion.div>

                </div>


                <div>


                </div>







            </div>



            <div className='grid md:grid-cols-4 mt-10 '>

                <div className='md:ms-28 ms-8'>

                    <motion.div
                        initial={{ opacity: 0, y: 300 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: '0.5' }}>
                        <div className='w-72 h-64 bg-white shadow-2xl p-5 pt-8'>
                            <FaGlobe size={60} className='text-green-500' />
                            <h1 className='font-bold text-2xl mt-3'> WorldWide Tours</h1>
                            <p className=' font-medium mt-3 text-black/50'>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                        </div>
                    </motion.div >

                </div>


                <div className='md:ms-16 ms-8 md:mt-0 mt-5'>
                    <motion.div
                        initial={{ opacity: 0, y: 300 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: '1' }}>


                        <div className='w-72 h-64 bg-white shadow-2xl p-5 pt-8'>
                            <FaHotel size={60} className='text-green-500' />
                            <h1 className='font-bold text-2xl mt-3'> WorldWide Tours</h1>
                            <p className=' font-medium mt-3 text-black/50'>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                        </div>
                    </motion.div>

                </div>

                <div className='md:ms-5 ms-8 md:mt-0 mt-5'>
                    <motion.div
                        initial={{ opacity: 0, y: 300 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: '1.5' }}>



                        <div className='w-72 h-64 bg-white shadow-2xl p-5 pt-8'>
                            <FaUser size={60} className='text-green-500' />
                            <h1 className='font-bold text-2xl mt-3'> WorldWide Tours</h1>
                            <p className=' font-medium mt-3 text-black/50'>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                        </div>
                    </motion.div>

                </div>

                <div className='md:-ms-5 ms-8 md:mt-0 mt-5'>
                    <motion.div
                        initial={{ opacity: 0, y: 300 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: '2' }}>


                        <div className='w-72 h-64 bg-white shadow-2xl p-5 pt-8'>
                            <FaCog size={60} className='text-green-500' />
                            <h1 className='font-bold text-2xl mt-3'> WorldWide Tours</h1>
                            <p className=' font-medium mt-3 text-black/50'>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                        </div>

                    </motion.div>
                </div>


                <div>


                </div>







            </div>









        </div>
    )
}

export default Services