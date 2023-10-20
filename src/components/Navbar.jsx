'use client'
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";


function Navbar() {
  const {data:session}=useSession();
  
  
  return (
    <nav>
      <Link href="/">
        <h1>NextGoogle</h1>
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
