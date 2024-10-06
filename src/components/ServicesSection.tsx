import Image from 'next/image'
import React from 'react'
import servicesImage from "/public/images/Frame 34.png"

export default function ServicesSection() {
  return (
    <div className='z-50 relative mb-24 ' id='services'>
        <Image src={servicesImage} alt='' className='w-full z-20' />
    </div>
  )
}
