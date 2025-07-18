import React from 'react'
import t from '../assets/tr.jpg'
import i from '../assets/indd.jpg'
import m from '../assets/ml.jpg'
import { FaCalendarAlt, FaDollarSign, FaFacebook, FaGlobe, FaInstagram, FaMap, FaMapMarkerAlt, FaPlane, FaStar, FaUser } from 'react-icons/fa'
import { motion } from "motion/react"

function Packages() {
    return (
        <div className='mt-20'>


            <div className='flex justify-center ms-2 '>
                <div className='bg-green-500 h-1 mt-2 w-10 mx-1.5'>
                    <div className='bg-green-500 h-0.5 w-16 mt-3 -ms-6'></div>
                </div>
                <h1 className='font-bold text-xl text-green-500'>PACKAGES</h1>
                <div className='bg-green-500 h-1 mt-2 ms-2 w-10'>
                    <div className='bg-green-500 h-0.5 w-16 mt-3'></div>
                </div>
            </div>



            <h1 className='font-bold text-center md:text-4xl text-4xl mt-4 '>Awesome Packages</h1>






            <div className='grid md:grid-cols-3 mt-16 md:px-28 '>


              <motion.div
               initial={{ opacity: 0, y: 300 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: '0.5' }}


              
              >
                  
                        <div>
                            <img src={t} alt="no image" className='md:w-96 w-[350px] px-3 md:px-0 ms-1.5 md:ms-0 md:h-60' />
                            <div className='bg-white h-80 shadow-2xl md:w-96'>
        
                                <div className='bg-white md:w-[383px] h-10 w-[350px] grid grid-cols-3 '>
                                    <div className=' flex justify-center items-center '>
                                        <FaMapMarkerAlt className='text-green-500' size={20} />
                                        <h1 className=' text-black/70'> Thailand</h1>
                                    </div>
        
                                    <div className=' flex justify-center items-center '>
                                        <FaCalendarAlt className='text-green-500' size={20} />
                                        <h1 className=' text-black/70 ms-1'> 3 days</h1>
                                    </div>
        
                                    <div className=' flex justify-center items-center '>
                                        <FaUser className='text-green-500' size={20} />
                                        <h1 className=' text-black/70 ms-1'> 3 person</h1>
                                    </div>
                                </div>
        
        
                                <div className='mt-10'>
        
                                    <div>
        
                                        <h1 className='text-center md:text-4xl text-3xl  font-bold'>$149.00</h1>
                                        <div className='flex justify-center mt-2'>
                                            <FaStar className='text-green-500' size={20} />
                                            <FaStar className='text-green-500' size={20} />
                                            <FaStar className='text-green-500' size={20} />
                                            <FaStar className='text-green-500' size={20} />
                                            <FaStar className='text-green-500' size={20} />
                                        </div>
        
                                        <p className='px-10 md:ms-0 ms-2 pt-4 font-bold text-black/50'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam</p>
        
        
                                        <div className='mt-10'>
        
                                            <div className='flex gap-0.5 justify-center'>
        
                                                <button className='w-28 h-8 bg-green-500 rounded-l-4xl font-bold text-white'>Read more</button>
                                                <button className='w-28 h-8 bg-green-500 rounded-r-4xl font-bold text-white'>Book now</button>
        
        
                                            </div>
        
        
                                        </div>
        
        
                                    </div>
        
        
                                </div>
        
        
                            </div>
        
                        </div>



              </motion.div >
               

               <motion.div
                initial={{ opacity: 0, y: 300 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: '1' }}


               >
                    <div className='md:ms-5'>
                        <img src={i} alt="no image" className='md:w-96 w-[350px] px-3 md:px-0 ms-1.5 md:ms-0 md:h-60' />
                        <div className='bg-white  h-80 shadow-2xl md:w-96'>
    
                            <div className='bg-white md:w-[383px] h-10 w-[350px] grid grid-cols-3 md:-ms-0  '>
                                <div className=' flex justify-center items-center '>
                                    <FaMapMarkerAlt className='text-green-500' size={20} />
                                    <h1 className=' text-black/70'> indonesia</h1>
                                </div>
    
                                <div className=' flex justify-center items-center '>
                                    <FaCalendarAlt className='text-green-500' size={20} />
                                    <h1 className=' text-black/70 ms-1'> 5 days</h1>
                                </div>
    
                                <div className=' flex justify-center items-center '>
                                    <FaUser className='text-green-500' size={20} />
                                    <h1 className=' text-black/70 ms-1'> 4 person</h1>
                                </div>
                            </div>
    
    
                            <div className='mt-10'>
    
                                <div>
    
                                    <h1 className='text-center md:text-4xl text-3xl  font-bold'>$169.00</h1>
                                    <div className='flex justify-center mt-2'>
                                        <FaStar className='text-green-500' size={20} />
                                        <FaStar className='text-green-500' size={20} />
                                        <FaStar className='text-green-500' size={20} />
                                        <FaStar className='text-green-500' size={20} />
                                        <FaStar className='text-green-500' size={20} />
                                    </div>
    
                                    <p className='px-10 pt-4 md:ms-0 ms-2 font-bold text-black/50'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam</p>
    
    
                                    <div className='mt-10'>
    
                                        <div className='flex gap-0.5 justify-center'>
    
                                            <button className='w-28 h-8 bg-green-500 rounded-l-4xl font-bold text-white'>Read more</button>
                                            <button className='w-28 h-8 bg-green-500 rounded-r-4xl font-bold text-white'>Book now</button>
    
    
                                        </div>
    
    
                                    </div>
    
    
                                </div>
    
    
                            </div>
    
    
                        </div>
    
                    </div>
               </motion.div >


               <motion.div
                initial={{ opacity: 0, y: 300 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: '1.5' }}
               >
                    <div className='md:ms-9'>
                        <img src={m} alt="no image" className='md:w-96 w-[350px] px-3 md:px-0 ms-1.5 md:ms-0 md:h-60' />
                        <div className='bg-white h-80 shadow-2xl md:w-96'>
    
                            <div className='bg-white md:w-[383px] h-10 w-[350px] grid grid-cols-3 md:-ms-0  '>
                                <div className=' flex justify-center items-center '>
                                    <FaMapMarkerAlt className='text-green-500' size={20} />
                                    <h1 className=' text-black/70'> malaysia</h1>
                                </div>
    
                                <div className=' flex justify-center items-center '>
                                    <FaCalendarAlt className='text-green-500' size={20} />
                                    <h1 className=' text-black/70 ms-1'> 7 days</h1>
                                </div>
    
                                <div className=' flex justify-center items-center '>
                                    <FaUser className='text-green-500' size={20} />
                                    <h1 className=' text-black/70 ms-1'> 7 person</h1>
                                </div>
                            </div>
    
    
                            <div className='mt-10'>
    
                                <div>
    
                                    <h1 className='text-center md:text-4xl text-3xl font-bold'>$299.00</h1>
                                    <div className='flex justify-center mt-2'>
                                        <FaStar className='text-green-500' size={20} />
                                        <FaStar className='text-green-500' size={20} />
                                        <FaStar className='text-green-500' size={20} />
                                        <FaStar className='text-green-500' size={20} />
                                        <FaStar className='text-green-500' size={20} />
                                    </div>
    
                                    <p className='px-10 pt-4 font-bold md:ms-0 ms-2 text-black/50'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam</p>
    
    
                                    <div className='mt-10'>
    
                                        <div className='flex gap-0.5 justify-center'>
    
                                            <button className='w-28 h-8 bg-green-500 rounded-l-4xl font-bold text-white'>Read more</button>
                                            <button className='w-28 h-8 bg-green-500 rounded-r-4xl font-bold text-white'>Book now</button>
    
    
                                        </div>
    
    
                                    </div>
    
    
                                </div>
    
    
                            </div>
    
    
                        </div>
    
                    </div>
               </motion.div>






            </div>





            <div className='md:p-28'>


               <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: '1' }}
               
               >
                    <div className='b md:h-[90vh] h-[1150px]  '>
                        <div className='bg-black/50  md:h-[90vh] h-[1150px]'>
    
                            <div className='grid md:grid-cols-2'>
    
                                <div className='md:mt-32 mt-10 text-white md:ms-20'>
    
                                    <h1 className='text-3xl md:ms-0 ms-28 font-bold'>BOOKING</h1>
                                    <h1 className='md:text-6xl text-4xl  md:ms-0 ms-12 mt-4 font-bold'>Online Booking</h1>
                                    <p className='font-bold md:px-0 px-2 md:ms-0 ms-2 mt-7'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam ametdiam et eos. Clita erat ipsum et lorem et sit.</p>
                                    <p className='font-bold md:px-0 px-2 md:ms-0 ms-2  mt-7'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
    
                                    <button className='outline w-48 h-16 md:marker: ms-20 mt-16 text-xl font-bold'>Read More</button>
    
    
                                </div>
    
    
    
                                <div className='mt-24 md:ms-10 ms-13 text-white'>
                                    <h1 className='md:text-5xl text-4xl md:ms-0 ms-8 font-bold '>Book A Tour</h1>
    
                                    <div className='grid md:grid-cols-2'>
    
                                        <div className='mt-8 w-64 h-16 outline'>
                                            <input type="text" placeholder='Your Name' className='outline-hidden mt-4 ms-5' />
    
                                        </div>
    
                                        <div className='mt-8 w-64 h-16 outline'>
                                            <input type="text" placeholder='Your Email' className='outline-hidden mt-4 ms-5' />
    
                                        </div>
    
                                        <div className='mt-8 w-64 h-16 outline'>
                                            <input type="text" placeholder='Date && Time' className='outline-hidden mt-4 ms-5' />
    
                                        </div>
    
                                        <div className='mt-8 w-64 h-16 outline'>
                                            <input type="text" placeholder='Destination' className='outline-hidden mt-4 ms-5' />
    
                                        </div>
    
                                    </div>
    
                                    <div className='text-white mt-8'>
                                        <div className='md:w-[560px] w-64 h-24 outline'>
                                            <input type="text" placeholder='Special Requast ' className='mt-5 ms-5 outline-hidden' />
                                        </div>
    
                                    </div>
    
                                    <div className='text-white mt-8'>
                                        <div className='md:w-[560px] w-64 flex items-center justify-center h-16 outline'>
                                            <button className='text-xl font-bold'>Book Now</button>
                                        </div>
    
                                    </div>
                                </div>
    
                            </div>
    
    
    
    
                        </div>
                    </div>
    
               </motion.div>







            </div> 





    


        </div>
    )
}

export default Packages