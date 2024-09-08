import React from 'react'
import Input_box from './Input_box'
import Oauth_icons from './Oauth_icons'
import { FaGooglePlusG, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Login_right = (props) => {

    const {username, setUsername, password, setPassword, handleLogin, handleGoogleLogin, handleFacebookLogin} = props

    const oauth_options = [
        {
            icon:FaGooglePlusG,
            onclick:handleGoogleLogin
        },
        {
            icon:FaFacebookF,
            onclick:handleGoogleLogin
        },
        {
            icon:FaLinkedinIn,
            onclick:handleGoogleLogin
        },
    ]
  return (
    <div className="w-1/2 p-8 flex items-center justify-center">
        <div className="w-full space-y-6">
        <h2 className="text-[40px] font-extrabold text-gray-900 text-center">Sign in</h2>

        <div className='flex items-center justify-evenly px-20'>
            {oauth_options.map((e)=><Oauth_icons icon={e.icon} onclick={e.onclick} />)}
        </div>

        <div className='m-10 flex justify-center items-center'>
            <h1 className='text-light text-xs text-zinc-400'>------- or use your account -----</h1>
        </div>

        <form onSubmit={handleLogin} className="space-y-4 px-7">
            
            <Input_box value={username} setvalue={setUsername} title="Email" />
            <Input_box value={password} setvalue={setPassword} title="Password" />

            <div className='flex justify-center items-center mt-[600px]'>
                <h1 className=' text-sm text-zinc-500 cursor-pointer hover:underline ' >Forgot your password?</h1>
            </div>

            <div className='w-full flex justify-center items-center mt-10 '>
                <button
                type="submit"
                className="w-fit flex justify-center py-2 px-10 border border-transparent rounded-full text-sm font-medium  text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                SIGN IN
                </button>
            </div>

        </form>
        </div>
    </div>
  )
}

export default Login_right
