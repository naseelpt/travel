import React from 'react'
import { FaCog, FaGlobe, FaHotel, FaUser } from 'react-icons/fa'
import { motion } from "motion/react"




function Services() {
    return (
       <div className="mt-20">

  {/* Heading */}
  <div className="flex justify-center items-center gap-3">
    <div className="bg-green-500 h-1 w-10 relative">
      <div className="bg-green-500 h-0.5 w-16 absolute left-1/2 -translate-x-1/2 top-3"></div>
    </div>

    <h1 className="font-bold text-xl text-green-500">SERVICES</h1>

    <div className="bg-green-500 h-1 w-10 relative">
      <div className="bg-green-500 h-0.5 w-16 absolute left-1/2 -translate-x-1/2 top-3"></div>
    </div>
  </div>

  <h1 className="font-bold text-center text-4xl mt-4">
    Our Services
  </h1>

  {/* SERVICE GRID */}
  <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 mt-10 gap-10 place-items-center">

    {/* CARD 1 */}
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-72 h-64 bg-white shadow-xl p-5 pt-8 rounded-xl">
        <FaGlobe size={60} className="text-green-500" />
        <h1 className="font-bold text-2xl mt-3">WorldWide Tours</h1>
        <p className="font-medium mt-3 text-black/50">Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
      </div>
    </motion.div>

    {/* CARD 2 */}
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-72 h-64 bg-white shadow-xl p-5 pt-8 rounded-xl">
        <FaHotel size={60} className="text-green-500" />
        <h1 className="font-bold text-2xl mt-3">Hotel Booking</h1>
        <p className="font-medium mt-3 text-black/50">Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
      </div>
    </motion.div>

    {/* CARD 3 */}
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
    >
      <div className="w-72 h-64 bg-white shadow-xl p-5 pt-8 rounded-xl">
        <FaUser size={60} className="text-green-500" />
        <h1 className="font-bold text-2xl mt-3">Travel Guide</h1>
        <p className="font-medium mt-3 text-black/50">Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
      </div>
    </motion.div>

    {/* CARD 4 */}
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.6 }}
    >
      <div className="w-72 h-64 bg-white shadow-xl p-5 pt-8 rounded-xl">
        <FaCog size={60} className="text-green-500" />
        <h1 className="font-bold text-2xl mt-3">Customization</h1>
        <p className="font-medium mt-3 text-black/50">Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
      </div>
    </motion.div>

  </div>

  {/* SECOND ROW OF CARDS */}
  <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 mt-10 gap-10 place-items-center">

    {/* 4 More Cards (Same structure) */}

    {/* CARD 5 */}
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-72 h-64 bg-white shadow-xl p-5 pt-8 rounded-xl">
        <FaGlobe size={60} className="text-green-500" />
        <h1 className="font-bold text-2xl mt-3">Flight Booking</h1>
        <p className="font-medium mt-3 text-black/50">Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
      </div>
    </motion.div>

    {/* CARD 6 */}
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-72 h-64 bg-white shadow-xl p-5 pt-8 rounded-xl">
        <FaHotel size={60} className="text-green-500" />
        <h1 className="font-bold text-2xl mt-3">Resort Booking</h1>
        <p className="font-medium mt-3 text-black/50">Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
      </div>
    </motion.div>

    {/* CARD 7 */}
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
    >
      <div className="w-72 h-64 bg-white shadow-xl p-5 pt-8 rounded-xl">
        <FaUser size={60} className="text-green-500" />
        <h1 className="font-bold text-2xl mt-3">Tour Guides</h1>
        <p className="font-medium mt-3 text-black/50">Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
      </div>
    </motion.div>

    {/* CARD 8 */}
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.6 }}
    >
      <div className="w-72 h-64 bg-white shadow-xl p-5 pt-8 rounded-xl">
        <FaCog size={60} className="text-green-500" />
        <h1 className="font-bold text-2xl mt-3">Settings</h1>
        <p className="font-medium mt-3 text-black/50">Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
      </div>
    </motion.div>

  </div>

</div>

    )
}

export default Services