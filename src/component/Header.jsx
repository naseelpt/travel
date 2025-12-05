import React from 'react'
import { BiLocationPlus, BiMailSend } from 'react-icons/bi'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaPhone, FaPhoneAlt, FaTwitter, FaWhatsapp } from 'react-icons/fa'


function Header() {
  return (
    <>

   <div className="bg-black md:flex hidden items-center h-12 w-full px-2">
  
  <div className="flex gap-3 flex-wrap">
    <div className="flex items-center gap-2">
      <BiLocationPlus color="white" size={25} />
      <h1 className="text-white text-sm">123 Street, New York, USA</h1>
    </div>

    <div className="flex items-center gap-2">
      <FaPhoneAlt color="white" size={18} />
      <h1 className="text-white text-sm">+012 345 6789</h1>
    </div>

    <div className="flex items-center gap-2">
      <BiMailSend color="white" size={25} />
      <h1 className="text-white text-sm">mail@domain.com</h1>
    </div>
  </div>

  <div className="flex gap-3 ml-auto">
    {[FaInstagram, FaWhatsapp, FaLinkedin, FaFacebook, FaTwitter].map(
      (Icon, index) => (
        <div
          key={index}
          className="bg-white w-10 h-10 rounded-full flex items-center justify-center"
        >
          <div className="bg-black w-9 h-9 rounded-full flex items-center justify-center">
            <Icon color="white" size={22} />
          </div>
        </div>
      )
    )}
  </div>
</div>




  




    
    
    </>
  )
}

export default Header