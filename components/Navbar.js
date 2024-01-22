"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const Navbar = () => {
const pathName =  usePathname();
   console.log(pathName)
  return (
    <div>
      
      {pathName === '/login/loginadmin' ? ( <li>
         <Link href="/login/loginadmin">Admin</Link>
         </li>
        )  : (
  <ul className="login-menu border bg-green-500">
          <li>
         <Link href="/login/loginuser">Login Regular user </Link>
         </li>
         </ul>
        )}

    </div>
  )
}

export default Navbar
