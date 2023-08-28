import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <>
      <nav className='bg-gradient-to-r from-violet-300 to-indigo-600 flex text-center justify-between pt-4'>
        <div className='ml-4 border-blue-100 border-4 rounded-full w-15 h-15'>
          <h1 className='text-center items-center text-blue-100 text-4xl font-bold'>ZF</h1>
        </div>
        <ul className='navbar flex mr-9 text-fuchsia-50 mt-6'>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </nav>
    </>
  )
}
