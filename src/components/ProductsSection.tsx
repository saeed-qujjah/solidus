import Image from 'next/image'
import React from 'react'
import productsImage from "/public/images/Frame 32.png"

export default function ProductsSection() {
  return (
    <div className='z-50 relative mt-48 mb-20 ' id='products'>
        <Image src={productsImage} alt='' className='w-full z-20' />
    </div>
  )
}
