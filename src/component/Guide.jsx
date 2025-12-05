import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import q from '../assets/t.jpg'
import qq from '../assets/t1.jpg'
import qqq from '../assets/t2.jpg'
import qqqq from '../assets/t3.jpg'
import { motion } from "motion/react"
function Guide() {
  return (
    <>

<div className="">
  {/* Heading */}
  <div className="flex justify-center mt-12 ms-2">
    <div className="bg-green-500 h-1 mt-2 w-10 mx-1.5">
      <div className="bg-green-500 h-0.5 w-16 mt-3 -ms-6"></div>
    </div>
    <h1 className="font-bold text-xl text-green-500">TRAVEL GUIDE</h1>
    <div className="bg-green-500 h-1 mt-2 ms-2 w-10">
      <div className="bg-green-500 h-0.5 w-16 mt-3"></div>
    </div>
  </div>

  <h1 className="font-bold text-center md:text-4xl text-3xl mt-4">
    Meet Our Guide
  </h1>

  <div className="md:p-28 px-5">
    {/* Responsive Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-10">

      {/* CARD 1 */}
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: "0.5" }}
      >
        <div className="">
          <img src={q} alt="no image" className="w-full" />

          <div className="bg-white w-full h-32 shadow-2xl">
            <div className="flex items-center justify-center gap-2 -mt-5">
              <div className="bg-white w-10 h-10 shadow-2xl rounded-full flex items-center justify-center">
                <FaInstagram size={20} className="text-green-500" />
              </div>

              <div className="bg-white w-10 h-10 shadow-2xl rounded-full flex items-center justify-center">
                <FaFacebook size={20} className="text-green-500" />
              </div>

              <div className="bg-white w-10 h-10 shadow-2xl rounded-full flex items-center justify-center">
                <FaXTwitter size={20} className="text-green-500" />
              </div>
            </div>

            <h1 className="text-center text-xl mt-2 font-bold">Full Name</h1>
            <p className="text-center text-black/50">Designation</p>
          </div>
        </div>
      </motion.div>

      {/* CARD 2 */}
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: "0.6" }}
      >
        <div className="">
          <img src={qq} alt="no image" className="w-full" />

          <div className="bg-white w-full h-32 shadow-2xl">
            <div className="flex items-center justify-center gap-2 -mt-5">
              <div className="bg-white w-10 h-10 shadow-2xl rounded-full flex items-center justify-center">
                <FaInstagram size={20} className="text-green-500" />
              </div>

              <div className="bg-white w-10 h-10 shadow-2xl rounded-full flex items-center justify-center">
                <FaFacebook size={20} className="text-green-500" />
              </div>

              <div className="bg-white w-10 h-10 shadow-2xl rounded-full flex items-center justify-center">
                <FaXTwitter size={20} className="text-green-500" />
              </div>
            </div>

            <h1 className="text-center text-xl mt-2 font-bold">Full Name</h1>
            <p className="text-center text-black/50">Designation</p>
          </div>
        </div>
      </motion.div>

      {/* CARD 3 */}
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: "0.7" }}
      >
        <div className="">
          <img src={qqq} alt="no image" className="w-full" />

          <div className="bg-white w-full h-32 shadow-2xl">
            <div className="flex items-center justify-center gap-2 -mt-5">
              <div className="bg-white w-10 h-10 shadow-2xl rounded-full flex items-center justify-center">
                <FaInstagram size={20} className="text-green-500" />
              </div>

              <div className="bg-white w-10 h-10 shadow-2xl rounded-full flex items-center justify-center">
                <FaFacebook size={20} className="text-green-500" />
              </div>

              <div className="bg-white w-10 h-10 shadow-2xl rounded-full flex items-center justify-center">
                <FaXTwitter size={20} className="text-green-500" />
              </div>
            </div>

            <h1 className="text-center text-xl mt-2 font-bold">Full Name</h1>
            <p className="text-center text-black/50">Designation</p>
          </div>
        </div>
      </motion.div>

      {/* CARD 4 */}
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: "0.8" }}
      >
        <div className="">
          <img src={qqqq} alt="no image" className="w-full" />

          <div className="bg-white w-full h-32 shadow-2xl">
            <div className="flex items-center justify-center gap-2 -mt-5">
              <div className="bg-white w-10 h-10 shadow-2xl rounded-full flex items-center justify-center">
                <FaInstagram size={20} className="text-green-500" />
              </div>

              <div className="bg-white w-10 h-10 shadow-2xl rounded-full flex items-center justify-center">
                <FaFacebook size={20} className="text-green-500" />
              </div>

              <div className="bg-white w-10 h-10 shadow-2xl rounded-full flex items-center justify-center">
                <FaXTwitter size={20} className="text-green-500" />
              </div>
            </div>

            <h1 className="text-center text-xl mt-2 font-bold">Full Name</h1>
            <p className="text-center text-black/50">Designation</p>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</div>

    
    
    </>
  )
}

export default Guide