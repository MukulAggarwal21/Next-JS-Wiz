
import React from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const Layout = ({children}) => {

  return (
    <div>
     <Navbar/>
     <Footer/>
        {children}
    </div>
  )
}

export default Layout
