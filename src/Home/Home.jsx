import React from 'react'
import Cover from '../Components/Cover/Cover'
import Projects from '../Components/Projects/Projects'
import Footer from '../Components/Footer/Footer'

export default function Home() {
  return (
    <div className="max-w-screen-2xl overflow-hidden">
        <Cover />
        <Projects />
        <Footer/>
    </div>
  )
}
