import React from 'react'

const Login_Left = () => {
  return (
    <div className="w-1/2 bg-indigo-600 text-white p-8 flex flex-col justify-center items-center ">
        <h1 className="text-3xl font-bold mb-5 text-center">Welcome Back!</h1>
        <p className="text-sm mb-4 text-center text-zinc-200">Join us on an exciting journey of learning and growth. Let's unlock your full potential!</p>
        <button className="mt-4 px-10 w-fit py-2 border border-white text-white  font-semibold rounded-full hover:bg-indigo-500 ">
        Sign Up
        </button>
    </div>
  )
}

export default Login_Left
