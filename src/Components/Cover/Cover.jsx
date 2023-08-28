import React from 'react'
import './Cover.css'
import Navbar from '../Navbar/Navbar'
import FloatingImages from '../Floating-Images/FloatingImages'
import Banner from '../Banner/Banner'

export default function Cover() {
  return (
    <>
    <Navbar />
    <Banner />
      <section className='bg-gradient-to-r from-violet-300 to-indigo-600 w-full h-[36rem] relative'>
      <FloatingImages />
            <div className='air air1'></div>
            <div className='air air2'></div>
            <div className='air air3'></div>
            <div className='air air4'></div>
    </section>
    </>
  )
}
