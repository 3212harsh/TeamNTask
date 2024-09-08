import React from 'react'
import { FaGooglePlusG, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Oauth_icons = (props) => {
    const {icon:Icon , onclick} = props;
  return (
    <div className='flex items-center justify-center p-4 w-fit rounded-full border cursor-pointer hover:bg-zinc-50 border-gray-300 '>
      <Icon size={18} />
    </div>
  )
}

export default Oauth_icons
