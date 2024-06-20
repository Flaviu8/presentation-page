import React, {useState} from 'react'
import './Floating-images.css'
import image1 from '../../assets/image-1.jpg'
import image2 from '../../assets/image-2.jpg'
import image3 from '../../assets/image-3.jpg'
import image4 from '../../assets/image-4.jpg'
import image5 from '../../assets/image-5.jpg'
import image6 from '../../assets/image-6.jpg'
import image7 from '../../assets/image-7.jpg'
import image8 from '../../assets/image-8.jpg'
import image9 from '../../assets/image-9.jpg'
import image10 from '../../assets/image-10.jpg'
import image11 from '../../assets/image-11.jpg'
import image12 from '../../assets/image-12.jpg'
import image13 from '../../assets/image-13.jpg'

export default function FloatingImages() {
  const handleMouseMove = (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
  
    const images = document.querySelectorAll('.floating img');
  
    images.forEach((image, index) => {
      const speed = (index + 1) * 0.1;
  
      const translateX = -2 + (mouseX * speed * 0.04);
      const translateY = -2 + (mouseY * speed * 0.04);
  
      image.style.transform = `translate(${translateX}px, ${translateY}px)`;
    });
  };

  return (
    <div className='pt-96'>
     <div onMouseMove={handleMouseMove} className='floating'>
      <img src={image1} alt='float'/>
      <img src={image2} alt='float'/>
      <img src={image3} alt='float'/>
      <img src={image4} alt='float'/>
      <img src={image5} alt='float'/>
      <img src={image6} alt='float'/>
      <img src={image7} alt='float'/>
      <img src={image8} alt='float'/>
      <img src={image9} alt='float'/>
      <img src={image10} alt='float'/>
      <img src={image11} alt='float'/>
      <img src={image12} alt='float'/>
      <img src={image13} alt='float'/>
    </div>
    </div>
  )
}
