"use client"
import React from 'react'

const ClientOne = () => {
  console.log('Hello from the (client component)')
  return (
    <div>
    <button onClick={()=>alert("hello")}>Click Me</button><br/>
      ClientOne 
    </div>
  )
}

export default ClientOne
