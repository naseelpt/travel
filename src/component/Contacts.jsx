import React from 'react'
import { BiLocationPlus, BiMailSend } from 'react-icons/bi'
import { FaFacebook, FaLinkedin, FaPhoneAlt, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FiArrowRight } from 'react-icons/fi'
import e from '../assets/w.jpg'
import ee from '../assets/w1.jpg'
import eee from '../assets/w2.jpg'

function Contacts() {
    return (
       <div className="mt-20">

  <div className="bg-gray-900 text-white pt-16 px-6 md:px-20 lg:px-28 
                  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-10 md:h-auto pb-10">

    {/* Company */}
    <div>
      <h1 className="text-3xl font-bold">Company</h1>

      <div className="mt-5 grid gap-3">
        {["About Us", "Contact Us", "Privacy Policy", "Terms & Conditions", "FAQ & Help"].map((item, i) => (
          <div className="flex items-center gap-2" key={i}>
            <FiArrowRight size={15} />
            <h1>{item}</h1>
          </div>
        ))}
      </div>
    </div>

    {/* Contact */}
    <div>
      <h1 className="text-3xl font-bold">Contact</h1>

      <div className="mt-5 grid gap-3">
        <div className="flex items-center gap-2">
          <BiLocationPlus size={25} />
          <h1>123 Street, New York, USA</h1>
        </div>

        <div className="flex items-center gap-2">
          <FaPhoneAlt size={20} />
          <h1>+012 345 6789</h1>
        </div>

        <div className="flex items-center gap-2">
          <BiMailSend size={25} />
          <h1>mail@domain.com</h1>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex gap-3 mt-4">
        {[FaTwitter, FaFacebook, FaLinkedin, FaYoutube].map((Icon, i) => (
          <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center" key={i}>
            <div className="bg-black w-9 h-9 rounded-full flex items-center justify-center">
              <Icon size={18} color="white" />
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Gallery */}
    <div>
      <h1 className="text-3xl font-bold">Gallery</h1>

      <div className="mt-5 grid grid-cols-3 gap-3">
        {[e, ee, eee, eee, ee, e].map((img, i) => (
          <div className="bg-white p-1 h-16" key={i}>
            <img src={img} alt="gallery" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>

    {/* Newsletter */}
    <div>
      <h1 className="text-3xl font-bold">Newsletter</h1>

      <p className="mt-4 text-lg">Dolor amet sit justo amet elitr clita ipsum elitr est.</p>

      <div className="bg-white mt-6 w-full h-14 flex items-center overflow-hidden rounded-lg shadow">
        <input 
          type="text" 
          placeholder="Your email" 
          className="placeholder-black/70 px-4 w-full text-black outline-none"
        />

        <button className="bg-green-500 text-white font-bold px-5 h-full">
          Sign Up
        </button>
      </div>
    </div>

  </div>

  {/* Bottom Line */}
  <div className="text-center text-gray-300 text-sm py-4 bg-gray-900">
    © Your Site Name, All Rights Reserved.
  </div>
</div>

    )
}

export default Contacts