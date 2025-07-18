import React, { useState } from 'react'
import Header from './Header'
import { FaLocationDot } from 'react-icons/fa6'
import About from './About'
import Destination from './Destination'
import Testimonials from './Testimonials'
import Services from './Services'
import Packages from './Packages'
import Process from './Process'
import Guide from './Guide'
import Contacts from './Contacts'
import { Link } from 'react-router-dom'
import {Menu} from 'lucide-react'
import { motion } from "motion/react"




function Home() {
    const [open,setopen] = useState(false)

     
    
    return (
      
        <>


        

            

            <div className="bg-[url('/src/assets/pi.jpg')] h-screen  bg-no-repeat bg-cover relative">
                <div className='h-full w-full bg-black/70 absolute'>
                    <div className='grid grid-cols-2 p-10' >
                       <div className='flex'>
                            <FaLocationDot size={60} className='text-green-500' />
                            <h1 className='text-5xl text-green-500 font-medium'>Tourist  </h1>
                       </div>

                       <div className='md:flex hidden gap-4 mt-5 '>
                        <Link to={'/'}><h1 className='text-2xl font-bold'>Home </h1></Link>
                        <Link to={'/about'}><h1 className='text-2xl font-bold'>About </h1></Link>
                        <Link to={'/service'}><h1 className='text-2xl font-bold'>Services </h1></Link>
                       <Link to={'/package'}> <h1 className='text-2xl font-bold'>Packages </h1></Link>
                        <Link to={'/contact'}><h1 className='text-2xl font-bold'>Contacts </h1></Link>

                        <div className='bg-green-600 w-24 h-10 rounded-3xl flex items-center justify-center'>
                            <button className='text-xl font-black text-white'> Register</button>

                        </div>
                       </div>


                       <div className='flex md:hidden gap-4 mt-5 '>
                       <Menu className='bg-green-300 ms-28 -mt-2 ' onClick={()=>{setopen(!open) ; console.log("clicked" )
                        
                        }} />

         {open && <motion.div
             initial={{x:-100}}
             animate={{x:0}}

             className='fixed top-0 left-0 h-[110vh] w-32 px-4 g  bg-white backdrop-blur-xl'>

                                 <div className='mt-16 grid gap-10'>
                                <Link to='/'><h1 onClick={()=>setopen(!open)} className='text-2xl font-bold'>Home </h1></Link>
                            <Link to='/about'><h1 onClick={()=>setopen(!open)}  className='text-2xl font-bold'>About </h1></Link>
                            <Link to='/service'><h1 onClick={()=>setopen(!open)}  className='text-2xl font-bold'>Services </h1></Link>
                           <Link to='/package'> <h1 onClick={()=>setopen(!open)}  className='text-2xl font-bold'>Packages </h1></Link>
                            <Link to='/contact'><h1 onClick={()=>setopen(!open)}  className='text-2xl font-bold'>Contacts </h1></Link>
                           
                            <div className='bg-green-600 w-24 h-10 rounded-3xl flex items-center justify-center'>
                                <button className='text-xl font-black text-white'> Register</button>
    
                            </div> 
                            
             </div>
</motion.div>
  }
                        

                       </div>




                       <div>

                       </div>
                    </div>


                    <h1 className='md:text-7xl text-4xl text-center mt-52 font-bold text-white' >Enjoy Your Vacation With Us</h1>
                    <h1 className='mt-8 text-white text-2xl font-medium text-center'>Tempor erat elitr rebum at clita diam amet diam et eos erat ipsum lorem sit</h1>

                    <div className='flex justify-center md:mt-8 mt-7'>
                        <div className='bg-white md:w-[600px]  md:flex items-center  h-16 rounded-4xl shadow'>

                            <input type="text" placeholder='Eg:India' className='ms-10 text-xl mt-5 md:mt-0   outline-hidden' />

                            <div className='bg-green-600 w-24 ms-52 md:-mt-0 -mt-9  md:ms-56 rounded-4xl flex items-center justify-center text-white text-xl font-bold h-10'>Serach</div>
    
                        </div>
                    </div>




                    </div>
                    



            


            </div>

            
            

          
          
           







        </>
    )
}

export default Home




                    