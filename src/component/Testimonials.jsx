import React from 'react'
import b from '../assets/m.jpg'
import bb from '../assets/m1.jpg'
import bbb from '../assets/m2.jpg'
import bbbb from '../assets/m3.jpg'
import Marquee from 'react-fast-marquee'

function Testimonials() {
    return (
        <>

            <div className='flex justify-center ms-2 md:mt-0 mt-16 '>
                <div className='bg-green-500 h-1 mt-2 w-10 mx-1.5'>
                    <div className='bg-green-500 h-0.5 w-16 mt-3 -ms-6'></div>
                </div>
                <h1 className='font-bold text-xl text-green-500'>TESTIMONIAL</h1>
                <div className='bg-green-500 h-1 mt-2 ms-2 w-10'>
                    <div className='bg-green-500 h-0.5 w-16 mt-3'></div>
                </div>
            </div>


            <h1 className='font-bold text-center md:text-4xl text-3xl mt-4 '>Our Clients Say!!!</h1>



            <div className='mt-28  '>

                <div className=' md:px-28 px-1  ' >
                    <Marquee    direction='right' pauseOnClick >

                        <div className='w-[350px] mx-5 h-68  hover:bg-white hover:text-black text-white bg-green-500 '>
                            <div className='pt-3'>
                                <div className=' bg-white shadow-2xl ms-32   w-[90px] h-[90px] rounded-full flex items-center justify-center'>
                                    <img src={b} alt="no image" className='w-[80px] h-[80px] rounded-full' />
                                </div>

                                <div>
                                    <h1 className='text-xl text-center mt-2 font-bold'>John Doe</h1>
                                    <h1 className='font-bold text-center'>New York, USA</h1>
                                    <p className='font-bold p-3 ms-3'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                                    <p></p>
                                </div>
                            </div>

                        </div>



                        <div className='w-[350px] h-68 mx-5 bg-green-500 hover:bg-white hover:text-black text-white '>
                            <div className='pt-3'>
                                <div className=' bg-white shadow-2xl ms-32  w-[90px] h-[90px] rounded-full flex items-center justify-center'>
                                    <img src={bbb} alt="no image" className='w-[80px] h-[80px] rounded-full' />
                                </div>

                                <div>
                                    <h1 className='text-xl text-center mt-2 font-bold'>John Doe</h1>
                                    <h1 className='font-bold text-center'>New York, USA</h1>
                                    <p className='font-bold p-3 ms-3'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                                    <p></p>
                                </div>
                            </div>

                        </div>


                        <div className='w-[350px] h-68 mx-5 bg-green-500 hover:bg-white hover:text-black text-white '>
                            <div className='pt-3'>
                                <div className=' bg-white shadow-2xl ms-32  w-[90px] h-[90px] rounded-full flex items-center justify-center'>
                                    <img src={bb} alt="no image" className='w-[80px] h-[80px] rounded-full' />
                                </div>

                                <div>
                                    <h1 className='text-xl text-center mt-2 font-bold'>John Doe</h1>
                                    <h1 className='font-bold text-center'>New York, USA</h1>
                                    <p className='font-bold p-3 ms-3'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                                    <p></p>
                                </div>
                            </div>

                        </div>


                        <div className='w-[350px] h-68 mx-5 hover:bg-white hover:text-black bg-green-500 text-white '>
                            <div className='pt-3'>
                                <div className=' bg-white shadow-2xl ms-32  w-[90px] h-[90px] rounded-full flex items-center justify-center'>
                                    <img src={bbbb} alt="no image" className='w-[80px] h-[80px] rounded-full' />
                                </div>

                                <div>
                                    <h1 className='text-xl text-center mt-2 font-bold'>John Doe</h1>
                                    <h1 className='font-bold text-center'>New York, USA</h1>
                                    <p className='font-bold p-3 ms-3'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                                    <p></p>
                                </div>
                            </div>

                        </div>
                    </Marquee>



                </div>


            </div>






        </>
    )
}

export default Testimonials