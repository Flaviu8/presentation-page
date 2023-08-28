import React from 'react'
import './Footer.css'
import download from '../../assets/icons/Download.svg'

export default function Footer() {
  return (
    <section className='bg-gradient-to-r from-violet-300 to-indigo-600 w-full mt-4 h-[26rem] relative'>
        <div className=' flex flex-col items-center	mt-16 banner'>
        <p className='text-3xl' >Thanks for watching my page!</p>
        <p className='text-1xl mt-2' >Download my resume from button bellow</p>
        <a className=" flex w-36 bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded mt-4" href="/assets/pdf/Ioan-Flaviu-Resume.pdf" target="_blank" download >
            <p className='download_btn'>Download Cv</p><img src={download}></img></a>
        </div>
          <div className='air air1'></div>
          <div className='air air2'></div>
          <div className='air air3'></div>
          <div className='air air4'></div>
          <p className='text-center mt-8'>&copy; 2023. ZF. All Rights Reserved</p>
  </section>
  )
}
