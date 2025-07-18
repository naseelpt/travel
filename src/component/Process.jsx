import React from 'react'
import { FaDollarSign, FaGlobe, FaPlane } from 'react-icons/fa'
import { motion } from "motion/react"

function Process() {
    return (
        <>


            <div className='md:mt-0 mt-10'>
                <div className='flex justify-center ms-2 '>
                    <div className='bg-green-500 h-1 mt-2 w-10 mx-1.5'>
                        <div className='bg-green-500 h-0.5 w-16 mt-3 -ms-6'></div>
                    </div>
                    <h1 className='font-bold text-xl text-green-500'>PROCESS</h1>
                    <div className='bg-green-500 h-1 mt-2 ms-2 w-10'>
                        <div className='bg-green-500 h-0.5 w-16 mt-3'></div>
                    </div>
                </div>

                <h1 className='font-bold text-center text-4xl mt-4 '>3 Easy Steps</h1>

                <div className='md:p-44'>
                    <div className='grid md:grid-cols-3  md:mt-0 mt-10'>

                        <motion.div

                            initial={{ opacity: 0, y: 300 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: '0.5' }}
                        >
                            <div className='w-[350px] md:mt-0 mt-12 h-56 relative bg-green-700 ms-1.5 flex items-center justify-center'>
                                <div className='md:w-[348px]  h-[222px]  bg-white'>
                                    <div className=' mt-16'>
                                        <h1 className='font-bold text-xl text-center'>Choose A Destination</h1>
                                        <p className='font-bold text-black/50 p-4 mt-2'>Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam eos erat ipsum et lorem et sit sed stet lorem sit</p>



                                    </div>


                                </div>

                                <div className='bg-green-500 rounded-b-full absolute -mt-56  flex items-center justify-center rounded-t-full md:w-24 w-16 h-16 md:h-24'>
                                    <FaGlobe md:size={50} size={30} color='white' />
                                </div>


                            </div>
                        </motion.div>




                        <motion.div
                            initial={{ opacity: 0, y: 300 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: '1' }}
                        >


                            <div className='w-[350px] md:mt-0 mt-12 h-56 relative bg-green-700 ms-1.5 flex items-center justify-center'>
                                <div className='w-[348px] h-[222px]  bg-white'>
                                    <div className=' mt-16'>
                                        <h1 className='font-bold text-xl text-center'>Choose A Destination</h1>
                                        <p className='font-bold text-black/50 p-4 mt-2'>Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam eos erat ipsum et lorem et sit sed stet lorem sit</p>



                                    </div>


                                </div>

                                <div className='bg-green-500 rounded-b-full absolute -mt-56  flex items-center justify-center rounded-t-full md:w-24 md:h-24 w-16 h-16
                                '>
                                    <FaDollarSign md:size={50} size={30} color='white' />
                                </div>


                            </div>
                        </motion.div>




                        <motion.div
                            initial={{ opacity: 0, y: 300 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: '1.5' }}
                        >


                            <div className='w-[350px] md:mt-0 mt-12 h-56 relative bg-green-700 ms-1.5 flex items-center justify-center'>
                                <div className='w-[348px] h-[222px]  bg-white'>
                                    <div className=' mt-16'>
                                        <h1 className='font-bold text-xl text-center'>Choose A Destination</h1>
                                        <p className='font-bold text-black/50 p-4 mt-2'>Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam eos erat ipsum et lorem et sit sed stet lorem sit</p>



                                    </div>


                                </div>

                                <div className='bg-green-500 rounded-b-full absolute -mt-56  flex items-center justify-center rounded-t-full md:w-24 w-16 md:h-24 h-16'>
                                    <FaPlane md:size={50} size={30} color='white' />
                                </div>


                            </div>
                        </motion.div>








                    </div>
                </div>


            </div>


        </>
    )
}

export default Process