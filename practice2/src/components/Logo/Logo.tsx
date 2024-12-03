import Image from 'next/image'
import React from 'react'

function Logo() {
  return (
    <div className='pl-[20px] '>
      
      <Image
      src={`/images/Logo/logo.png`}
      alt='Logo'
      height={100}
      width={100}
      />
    </div>
  )
}

export default Logo
