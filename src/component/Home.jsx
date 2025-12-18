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



            <div className="bg-[url('/src/assets/pi.jpg')] h-screen bg-no-repeat bg-cover relative">
      <div className="h-full w-full bg-black/70 absolute">

        {/* TOP NAVBAR */}
       <div className="grid grid-cols-2 p-10">

  {/* Left Logo */}
  <div className="flex items-center gap-2">
    <FaLocationDot size={55} className="text-green-500" />
    <h1 className="text-5xl text-green-500 font-medium">Tourist</h1>
  </div>

  {/* Desktop Menu */}
  <div className="hidden xl:flex gap-6 justify-end items-center">
    <Link to="/"><h1 className="text-2xl font-bold text-white">Home</h1></Link>
    <Link to="/about"><h1 className="text-2xl font-bold text-white">About</h1></Link>
    <Link to="/service"><h1 className="text-2xl font-bold text-white">Services</h1></Link>
    <Link to="/package"><h1 className="text-2xl font-bold text-white">Packages</h1></Link>
    <Link to="/contact"><h1 className="text-2xl font-bold text-white">Contacts</h1></Link>

    <div className="bg-green-600 px-6 py-2 rounded-3xl">
      <button className="text-xl font-black text-white">Register</button>
    </div>
  </div>

  {/* Mobile Menu Icon */}
  <div className="flex xl:hidden justify-end items-center">
    <Menu
      size={35}
      className="text-white"
      onClick={() => setopen(!open)}
    />

    {/* Mobile Drawer */}
    {open && (
      <motion.div
        initial={{ x: -120 }}
        animate={{ x: 0 }}
        className="fixed top-0 left-0 h-screen w-40 p-5 bg-white shadow-xl z-50"
      >
        <div className="mt-16 grid gap-8">
          <Link to="/" onClick={() => setopen(false)}>
            <h1 className="text-xl font-bold">Home</h1>
          </Link>

          <Link to="/about" onClick={() => setopen(false)}>
            <h1 className="text-xl font-bold">About</h1>
          </Link>

          <Link to="/service" onClick={() => setopen(false)}>
            <h1 className="text-xl font-bold">Services</h1>
          </Link>

          <Link to="/package" onClick={() => setopen(false)}>
            <h1 className="text-xl font-bold">Packages</h1>
          </Link>

          <Link to="/contact" onClick={() => setopen(false)}>
            <h1 className="text-xl font-bold">Contacts</h1>
          </Link>

          <div className="bg-green-600 px-4 py-2 rounded-3xl">
            <button className="text-xl font-black text-white">Register</button>
          </div>
        </div>
      </motion.div>
    )}
  </div>

</div>


        {/* HERO TEXT */}
        <h1 className="md:text-7xl text-4xl text-center mt-40 font-bold text-white px-3">
          Enjoy Your Vacation With Us
        </h1>

        <h1 className="mt-6 text-white text-2xl font-medium text-center px-3">
          Tempor erat elitr rebum at clita diam amet diam et eos erat ipsum lorem sit
        </h1>

        {/* SEARCH BAR */}
        <div className="flex justify-center mt-10 px-3">
          <div className="bg-white md:w-[600px] w-full flex items-center h-16 rounded-4xl px-4 shadow">
            <input
              type="text"
              placeholder="Eg: India"
              className="flex-grow text-xl outline-none"
            />

            <div className="bg-green-600 xl:px-6 lg:px-6 md:px-4 sm:px-2 px-1 xl:py-2 lg:py-2 md:py-2 sm:py-1 py-1 rounded-3xl text-white text-xl font-bold">
              Search
            </div>
          </div>
        </div>

      </div>
    </div>

            
            

          
          
           







        </>
    )
}

export default Home




                    