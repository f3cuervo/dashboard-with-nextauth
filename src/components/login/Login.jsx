'use client'
import {signIn, useSession} from "next-auth/react"
import React, { useState } from 'react'

function Login() {
  const {data:session}=useSession();
  const [flag,setFlag]=useState(0)
  console.log(session)

  const handleclick=()=>{
      signIn("google",{
        callbackUrl:'http://localhost:3000/dashboard'
      });
      setFlag(1)
  }
  return (
    <div className='flex justify-center items-center flex-col h-[80vh]'>
      <p className="text-[#ff9933] m-10 text-5xl">Login</p>
      <button onClick={handleclick} 
      className="flex 
      items-center 
      gap-x-2.5 
      border-solid border-2  border-gray-200 rounded-xl 
      px-4 py-1 
      hover:scale-110 transition duration-500 ease-in-out">
        <img className="w-7" src="./googleIcon.svg" alt="" />
       <span>Login with google</span></button>
      {flag == 1 ? (<p>Cargando...</p>):(<></>)}
    </div>
  )
}

export default Login
