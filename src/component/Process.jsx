import React from 'react'
import { FaDollarSign, FaGlobe, FaPlane } from 'react-icons/fa'
import { motion } from "motion/react"

function Process() {
    return (
        <>


          <div className="md:mt-0 mt-10">

  {/* TOP HEADING */}
  <div className="flex justify-center items-center gap-3">
    <div className="bg-green-500 h-1 w-10 relative">
      <div className="bg-green-500 h-0.5 w-16 absolute left-1/2 -translate-x-1/2 top-3"></div>
    </div>

    <h1 className="font-bold text-xl text-green-500">PROCESS</h1>

    <div className="bg-green-500 h-1 w-10 relative">
      <div className="bg-green-500 h-0.5 w-16 absolute left-1/2 -translate-x-1/2 top-3"></div>
    </div>
  </div>

  <h1 className="font-bold text-center text-4xl mt-4">3 Easy Steps</h1>

  {/* FULL SECTION WRAPPER */}
  <div className="px-5 md:px-20 lg:px-32 xl:px-44 mt-10">

    <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-10 place-items-center">

      {/* CARD 1 */}
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full max-w-xs h-64 relative bg-green-700 flex items-center justify-center rounded-xl">

          {/* White box */}
          <div className="w-[95%] h-[85%] bg-white rounded-xl mt-10">
            <h1 className="font-bold text-xl text-center mt-10">Choose A Destination</h1>
            <p className="font-medium text-black/50 px-4 mt-3">
              Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam eos erat ipsum et lorem et sit sed stet lorem sit
            </p>
          </div>

          {/* ICON */}
          <div className="bg-green-500 rounded-full absolute -top-8 w-20 h-20 flex items-center justify-center shadow-xl">
            <FaGlobe size={35} color="white" />
          </div>

        </div>
      </motion.div>

      {/* CARD 2 */}
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="w-full max-w-xs h-64 relative bg-green-700 flex items-center justify-center rounded-xl">

          <div className="w-[95%] h-[85%] bg-white rounded-xl mt-10">
            <h1 className="font-bold text-xl text-center mt-10">Make Payment</h1>
            <p className="font-medium text-black/50 px-4 mt-3">
              Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam eos erat ipsum et lorem et sit sed stet lorem sit
            </p>
          </div>

          <div className="bg-green-500 rounded-full absolute -top-8 w-20 h-20 flex items-center justify-center shadow-xl">
            <FaDollarSign size={35} color="white" />
          </div>

        </div>
      </motion.div>

      {/* CARD 3 */}
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <div className="w-full max-w-xs h-64 relative bg-green-700 flex items-center justify-center rounded-xl">

          <div className="w-[95%] h-[85%] bg-white rounded-xl mt-10">
            <h1 className="font-bold text-xl text-center mt-10">Travel Today</h1>
            <p className="font-medium text-black/50 px-4 mt-3">
              Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam eos erat ipsum et lorem et sit sed stet lorem sit
            </p>
          </div>

          <div className="bg-green-500 rounded-full absolute -top-8 w-20 h-20 flex items-center justify-center shadow-xl">
            <FaPlane size={35} color="white" />
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