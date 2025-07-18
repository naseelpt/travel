import React from 'react'
import { BiLocationPlus, BiMailSend } from 'react-icons/bi'
import { FaFacebook, FaLinkedin, FaPhoneAlt, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FiArrowRight } from 'react-icons/fi'
import e from '../assets/w.jpg'
import ee from '../assets/w1.jpg'
import eee from '../assets/w2.jpg'

function Contacts() {
    return (
        <div className='mt-20'>


            <div className='bg-gray-900 md:h-[400px] h-[1000px] grid pt-16 md:px-28 text-white md:grid-cols-4'>

                <div className=''>

                    <h1 className='text-3xl font-bold md:ms-0 ms-28'>Company</h1>

                    <div className='mt-5 grid gap-3 md:ms-0 ms-8'>
                        <div className='flex items-center gap-2'>
                            <FiArrowRight size={15} />

                            <h1 className=''>About Us</h1>

                        </div>

                        <div className='flex items-center gap-2'>
                            <FiArrowRight size={15} />

                            <h1 className=''>Contact Us</h1>

                        </div>

                        <div className='flex items-center gap-2'>
                            <FiArrowRight size={15} />

                            <h1 className=''>Privacy Policy</h1>

                        </div>

                        <div className='flex items-center gap-2'>
                            <FiArrowRight size={15} />

                            <h1 className=''>Teams && Condition</h1>

                        </div>

                        <div className='flex items-center gap-2'>
                            <FiArrowRight size={15} />

                            <h1 className=''>FAQs && Help</h1>

                        </div>


                    </div>

                </div>


                <div className='md:mt-0 mt-5'>
                    <h1 className='text-3xl md:ms-0 ms-28 font-bold'>Contact</h1>

                    <div className='grid md:ms-0 ms-8 mt-5 gap-3'>

                        <div className='flex items-center'>
                            <BiLocationPlus color='white' size={30} />
                            <h1 className='text-white'>123 Street, New York, USA</h1>
                        </div>

                        <div className='flex items-center'>
                            <FaPhoneAlt color='white' size={20} />
                            <h1 className='text-white'>+012 345 6789</h1>
                        </div>

                        <div className='flex items-center'>
                            <BiMailSend color='white' size={30} />
                            <h1 className='text-white'>mail@domain.com</h1>
                        </div>

                    </div>

                    <div className='flex md:ms-0 ms-8 mt-4 gap-3'>

                        <div className='bg-white w-10 h-10 rounded-4xl flex items-center justify-center'>
                            <div className='bg-black w-9.5 h-9.5 rounded-4xl flex items-center justify-center'>
                                <FaTwitter color='white' size={20} />
                            </div>
                        </div>

                        <div className='bg-white w-10 h-10 rounded-4xl flex items-center justify-center'>
                            <div className='bg-black w-9.5 h-9.5 rounded-4xl flex items-center justify-center'>
                                <FaFacebook color='white' size={20} />
                            </div>
                        </div>

                        <div className='bg-white w-10 h-10 rounded-4xl flex items-center justify-center'>
                            <div className='bg-black w-9.5 h-9.5 rounded-4xl flex items-center justify-center'>
                                <FaLinkedin color='white' size={20} />
                            </div>
                        </div>

                        <div className='bg-white w-10 h-10 rounded-4xl flex items-center justify-center'>
                            <div className='bg-black w-9.5 h-9.5 rounded-4xl flex items-center justify-center'>
                                <FaYoutube color='white' size={20} />
                            </div>
                        </div>

                    </div>
                </div>


                <div>
                    <h1 className='text-3xl md:mt-0 mt-8 md:ms-0 ms-28 font-bold'>Gallery</h1>

                    <div className='mt-5'>
                        <div className='flex gap-2 md:ms-0 ms-7.5 grid-cols-3'>

                            <div className='bg-white p-1 w-24 h-16'>
                                <img src={e} alt="no image" className='h-[55px] w-[102px]' />
                            </div>

                            <div className='bg-white p-1 w-24 h-16'>
                                <img src={ee} alt="no image" className='h-[55px] w-[102px]' />
                            </div>

                            <div className='bg-white p-1 w-24 h-16'>
                                <img src={eee} alt="no image" className='h-[55px] w-[102px]' />
                            </div>



                        </div>


                        <div className='flex gap-2 mt-3 md:ms-0 ms-7.5 grid-cols-3'>

                            <div className='bg-white p-1 w-24 h-16'>
                                <img src={eee} alt="no image" className='h-[55px] w-[102px]' />
                            </div>

                            <div className='bg-white p-1 w-24 h-16'>
                                <img src={ee} alt="no image" className='h-[55px] w-[102px]' />
                            </div>

                            <div className='bg-white p-1 w-24 h-16'>
                                <img src={e} alt="no image" className='h-[55px] w-[102px]' />
                            </div>







                        </div>




                    </div>

                </div>


                <div className='ms-5 md:mt-0 mt-8'>
                <h1 className='text-3xl md:ms-0 ms-20 font-bold'>News Letter</h1>

                <p className=' md:mt-5 mt-3 px-8 md:px-0 text-xl'>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>

                <div className='bg-white md:w-[270px] w-[260px] flex items-center md:mt-7 mt-5   md:ms-0 ms-9 h-14 shadow'>

                            <input type="text" placeholder='Your email' className='  placeholder-black/70 ms-5 outline-hidden' />

                            <div className='bg-green-500 w-24 md:-ms-8 -ms-12 flex items-center justify-center text-white  font-bold h-10'>SignUp</div>
    
                        </div>

                </div>


                <hr className='w-[1270px] md:flex hidden' />

               
            </div>



            {/* <h1 className='-mt-10 ms-[110px] text-white'>© Your Site Name, All Rights Reserved. Designed By HTML Codex</h1> */}



            






        </div>
    )
}

export default Contacts