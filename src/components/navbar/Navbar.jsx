'use client'
import { signOut, useSession } from "next-auth/react";
import './navbar.style.css'
import Link from "next/link";
import React from "react";


function Navbar() {
  const {data:session}=useSession();
  
  
  return (
    <nav className="navbar">
      <Link className="contentLogo" href="/">
        <img src="./logo.svg" alt="" />
        <h1>Cognito</h1>
      </Link>



      {session?.user ? (
        <>
        <p>
          {
            session.user.name
          }
        </p>
        <img src={session.user.image} alt="" />
      <button onClick={()=>{signOut({
        callbackUrl:'http://localhost:3000'
      })}}>
        Sign Out
      </button></>
      ):(<></>)}
      
    </nav>
  );
}

export default Navbar;
