import React from 'react'
import th from '../assets/thai.jpg'
import i from '../assets/ind.jpg'
import t from '../assets/tha.jpg'
import au from '../assets/aus.jpg'
import { motion } from "motion/react"



function Destination() {
    return (
       <div className="mt-20">

  {/* Heading */}
  <div className="flex justify-center items-center gap-3">
    <div className="bg-green-500 h-1 w-10 relative">
      <div className="bg-green-500 h-0.5 w-16 absolute left-1/2 -translate-x-1/2 top-3"></div>
    </div>

    <h1 className="font-bold text-xl text-green-500">DESTINATION</h1>

    <div className="bg-green-500 h-1 w-10 relative">
      <div className="bg-green-500 h-0.5 w-16 absolute left-1/2 -translate-x-1/2 top-3"></div>
    </div>
  </div>

  <h1 className="font-bold text-center text-4xl mt-4">
    Populer Destination
  </h1>

  {/* Main Grid */}
  <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 grid-cols-1 mt-14 md:px-28 px-5 gap-10">

    {/* Left Side */}
    <div>
      <motion.img
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        src={th}
        alt="no image"
        className="w-full h-auto rounded-xl"
      />

      {/* Two images inside left */}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-5">

        <motion.img
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          src={t}
          alt="no image"
          className="w-full h-52 object-cover rounded-xl"
        />

        <motion.img
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          src={au}
          alt="no image"
          className="w-full h-52 object-cover rounded-xl"
        />

      </div>
    </div>

    {/* Right Side */}
    <motion.img
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      src={i}
      alt="no image"
      className="w-full h-[520px] object-cover rounded-xl"
    />

  </div>

</div>

    )
}

export default Destination