import React from 'react'
import th from '../assets/thai.jpg'
import i from '../assets/ind.jpg'
import t from '../assets/tha.jpg'
import au from '../assets/aus.jpg'
import { motion } from "motion/react"



function Destination() {
    return (
        <div className='mt-20'>


            <div className='flex justify-center ms-2 '>
                <div className='bg-green-500 h-1 mt-2 w-10 mx-1.5'>
                    <div className='bg-green-500 h-0.5 w-16 mt-3 -ms-6'></div>
                </div>
                <h1 className='font-bold text-xl text-green-500'>DESTINATION</h1>
                <div className='bg-green-500 h-1 mt-2 ms-2 w-10'>
                    <div className='bg-green-500 h-0.5 w-16 mt-3'></div>
                </div>
            </div>



            <h1 className='font-bold text-center md:text-4xl text-4xl mt-4 '>Populer Destination</h1>



            <div className='grid md:grid-cols-2 mt-14 md:px-28'>


                <div>
                    <div >
                        <motion.img
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: '0.5' }} src={th} alt='no image' className='md:h-72 md:w-[15200px]  md:ms-2 md:px-0 px-5' />

                    </div>


                    <div className='grid md:grid-cols-2 mt-5'>
                        <div>
                            <motion.img
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: '0.5' }} src={t} alt="no image" className='md:w-[320px] md:ms-2 md:h-52 px-5 md:px-0' />
                        </div>

                        <div>
                            <motion.img
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: '0.5' }} src={au} alt="no image" className='md:w-[400px] md:h-52 md:ms-3 px-5 md:px-0 md:mt-0 mt-6' />
                        </div>
                    </div>

                </div>


                <div>

                    <motion.img
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: '0.5' }} src={i} alt="no image" className='md:h-[516px] md:w-[600px] md:ms-14 md:px-0 px-5 w-[400px] h-[220px] md:mt-0 mt-7' />


                </div>







            </div>










        </div>
    )
}

export default Destination