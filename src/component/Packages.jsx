import React from 'react'
import t from '../assets/tr.jpg'
import i from '../assets/indd.jpg'
import m from '../assets/ml.jpg'
import { FaCalendarAlt, FaDollarSign, FaFacebook, FaGlobe, FaInstagram, FaMap, FaMapMarkerAlt, FaPlane, FaStar, FaUser } from 'react-icons/fa'
import { motion } from "motion/react"

function Packages() {
    return (

        <div className="mt-20">

  {/* Heading */}
  <div className="flex justify-center items-center gap-3">
    <div>
      <div className="bg-green-500 h-1 w-10"></div>
      <div className="bg-green-500 h-0.5 w-16 -mt-3 ms-2"></div>
    </div>

    <h1 className="font-bold text-xl text-green-500">PACKAGES</h1>

    <div>
      <div className="bg-green-500 h-1 w-10"></div>
      <div className="bg-green-500 h-0.5 w-16 -mt-3 ms-2"></div>
    </div>
  </div>

  {/* Title */}
  <h1 className="font-bold text-center text-4xl mt-4">Awesome Packages</h1>

  {/* Packages Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 mt-16 px-6 xl:px-28">

    {/* Card 1 */}
    <motion.div
      initial={{ opacity: 0, y: 300 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-sm mx-auto"
    >
      <img
        src={t}
        alt=""
        className="w-full h-60 object-cover rounded-t-xl"
      />

      <div className="bg-white shadow-2xl w-full p-5 rounded-b-xl">

        {/* Info Row */}
        <div className="grid grid-cols-3 text-center">
          <div className="flex justify-center items-center gap-1">
            <FaMapMarkerAlt className="text-green-500" />
            <p className="text-black/70">Thailand</p>
          </div>

          <div className="flex justify-center items-center gap-1">
            <FaCalendarAlt className="text-green-500" />
            <p className="text-black/70">3 days</p>
          </div>

          <div className="flex justify-center items-center gap-1">
            <FaUser className="text-green-500" />
            <p className="text-black/70">3 person</p>
          </div>
        </div>

        <div className="mt-5">
          <h1 className="text-center text-3xl font-bold">$149.00</h1>

          <div className="flex justify-center mt-2">
            <FaStar className="text-green-500" />
            <FaStar className="text-green-500" />
            <FaStar className="text-green-500" />
            <FaStar className="text-green-500" />
            <FaStar className="text-green-500" />
          </div>

          <p className="text-center mt-4 text-black/50 font-bold px-3">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam
          </p>

          <div className="flex justify-center gap-1 mt-6">
            <button className="w-28 h-9 bg-green-500 rounded-l-full text-white font-bold">
              Read more
            </button>
            <button className="w-28 h-9 bg-green-500 rounded-r-full text-white font-bold">
              Book now
            </button>
          </div>
        </div>

      </div>
    </motion.div>

    {/* -------- Duplicate Cards Below (2 & 3) ---------- */}
    {/* Card 2 */}
    <motion.div
      initial={{ opacity: 0, y: 300 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="w-full max-w-sm mx-auto"
    >
      <img
        src={i}
        alt=""
        className="w-full h-60 object-cover rounded-t-xl"
      />

      <div className="bg-white shadow-2xl w-full p-5 rounded-b-xl">

        <div className="grid grid-cols-3 text-center">
          <div className="flex justify-center items-center gap-1">
            <FaMapMarkerAlt className="text-green-500" />
            <p className="text-black/70">Indonesia</p>
          </div>

          <div className="flex justify-center items-center gap-1">
            <FaCalendarAlt className="text-green-500" />
            <p className="text-black/70">5 days</p>
          </div>

          <div className="flex justify-center items-center gap-1">
            <FaUser className="text-green-500" />
            <p className="text-black/70">4 person</p>
          </div>
        </div>

        <div className="mt-5">
          <h1 className="text-center text-3xl font-bold">$169.00</h1>

          <div className="flex justify-center mt-2">
            <FaStar className="text-green-500" />
            <FaStar className="text-green-500" />
            <FaStar className="text-green-500" />
            <FaStar className="text-green-500" />
            <FaStar className="text-green-500" />
          </div>

          <p className="text-center mt-4 text-black/50 font-bold px-3">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam
          </p>

          <div className="flex justify-center gap-1 mt-6">
            <button className="w-28 h-9 bg-green-500 rounded-l-full text-white font-bold">
              Read more
            </button>
            <button className="w-28 h-9 bg-green-500 rounded-r-full text-white font-bold">
              Book now
            </button>
          </div>
        </div>

      </div>
    </motion.div>

    {/* Card 3 */}
    <motion.div
      initial={{ opacity: 0, y: 300 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      className="w-full max-w-sm mx-auto"
    >
      <img
        src={m}
        alt=""
        className="w-full h-60 object-cover rounded-t-xl"
      />

      <div className="bg-white shadow-2xl w-full p-5 rounded-b-xl">

        <div className="grid grid-cols-3 text-center">
          <div className="flex justify-center items-center gap-1">
            <FaMapMarkerAlt className="text-green-500" />
            <p className="text-black/70">Malaysia</p>
          </div>

          <div className="flex justify-center items-center gap-1">
            <FaCalendarAlt className="text-green-500" />
            <p className="text-black/70">7 days</p>
          </div>

          <div className="flex justify-center items-center gap-1">
            <FaUser className="text-green-500" />
            <p className="text-black/70">7 person</p>
          </div>
        </div>

        <div className="mt-5">
          <h1 className="text-center text-3xl font-bold">$299.00</h1>

          <div className="flex justify-center mt-2">
            <FaStar className="text-green-500" />
            <FaStar className="text-green-500" />
            <FaStar className="text-green-500" />
            <FaStar className="text-green-500" />
            <FaStar className="text-green-500" />
          </div>

          <p className="text-center mt-4 text-black/50 font-bold px-3">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam
          </p>

          <div className="flex justify-center gap-1 mt-6">
            <button className="w-28 h-9 bg-green-500 rounded-l-full text-white font-bold">
              Read more
            </button>
            <button className="w-28 h-9 bg-green-500 rounded-r-full text-white font-bold">
              Book now
            </button>
          </div>
        </div>

      </div>
    </motion.div>
  </div>


  {/* Booking Section */}
  <div className="p-10 md:p-28">
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen b"
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative grid md:grid-cols-2 gap-10 text-white p-5">

        {/* Left Text */}
        <div className="md:mt-28 mt-10">
          <h1 className="text-3xl font-bold text-center md:text-left">BOOKING</h1>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 text-center md:text-left">
            Online Booking
          </h1>

          <p className="font-bold mt-7 px-3 md:px-0">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
          </p>
          <p className="font-bold mt-5 px-3 md:px-0">
            Aliqu diam amet diam et eos. Clita erat ipsum et lorem sit lorem.
          </p>

          <button className="mt-10 border px-10 py-4 font-bold block mx-auto md:mx-0">
            Read More
          </button>
        </div>

        {/* Booking Form */}
        <div className="mt-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center md:text-left mb-6">
            Book A Tour
          </h1>

          <div className="grid md:grid-cols-2 gap-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-transparent border p-4"
            />

            <input
              type="text"
              placeholder="Your Email"
              className="w-full bg-transparent border p-4"
            />

            <input
              type="text"
              placeholder="Date & Time"
              className="w-full bg-transparent border p-4"
            />

            <input
              type="text"
              placeholder="Destination"
              className="w-full bg-transparent border p-4"
            />
          </div>

          <div className="mt-5">
            <textarea
              placeholder="Special Request"
              className="w-full bg-transparent border p-4 h-24"
            ></textarea>
          </div>

          <button className="w-full bg-transparent border p-4 font-bold mt-5">
            Book Now
          </button>
        </div>

      </div>
    </motion.div>
  </div>
</div>

       
    )
}

export default Packages