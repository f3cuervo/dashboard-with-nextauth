'use client'
import {signIn, useSession} from "next-auth/react"
import React, { useState } from 'react'
import './login.style.css'

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
    <div className='contenLogin'>
      <button onClick={handleclick} className="btnLogin">
        <img src="./googleIcon.svg" alt="" />
       <span>Login with google</span></button>
      {flag == 1 ? (<p>Cargando...</p>):(<></>)}
    </div>
  )
}

export default Login
