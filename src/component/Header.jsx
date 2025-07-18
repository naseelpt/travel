import React from 'react'
import { BiLocationPlus, BiMailSend } from 'react-icons/bi'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaPhone, FaPhoneAlt, FaTwitter, FaWhatsapp } from 'react-icons/fa'


function Header() {
  return (
    <>

    <div className='bg-black md:flex hidden  items-center md:grid-cols-2 h-14'>

     <div className='flex ms-20 gap-3'>
        <div className='flex'>
          <BiLocationPlus color='white' size={30}/>
          <h1 className='text-white'>123 Street, New York, USA</h1>
        </div>

        <div className='flex'>
          <FaPhoneAlt color='white'  size={20}/>
          <h1 className='text-white'>+012 345 6789</h1>
        </div>

        <div className='flex'>
          <BiMailSend color='white'  size={30}/>
          <h1 className='text-white'>mail@domain.com</h1>
        </div>
     </div>


     <div className='flex ms-[600px]  gap-3'>

      <div className='bg-white w-10 h-10 rounded-4xl flex items-center justify-center'>
        <div className='bg-black w-9.5 h-9.5 rounded-4xl flex items-center justify-center'>
          <FaInstagram color='white' size={25}/>
        </div>
      </div>

      <div className='bg-white w-10 h-10 rounded-4xl flex items-center justify-center'>
        <div className='bg-black w-9.5 h-9.5 rounded-4xl flex items-center justify-center'>
          <FaWhatsapp color='white' size={25}/>
        </div>
      </div>

      <div className='bg-white w-10 h-10 rounded-4xl flex items-center justify-center'>
        <div className='bg-black w-9.5 h-9.5 rounded-4xl flex items-center justify-center'>
          <FaLinkedin color='white' size={25}/>
        </div>
      </div>

      <div className='bg-white w-10 h-10 rounded-4xl flex items-center justify-center'>
        <div className='bg-black w-9.5 h-9.5 rounded-4xl flex items-center justify-center'>
          <FaFacebook color='white' size={25}/>
        </div>
      </div>

      <div className='bg-white w-10 h-10 rounded-4xl flex items-center justify-center'>
        <div className='bg-black w-9.5 h-9.5 rounded-4xl flex items-center justify-center'>
          <FaTwitter color='white' size={25}/>
        </div>
      </div>

     </div>
    </div>



  




    
    
    </>
  )
}

export default Header