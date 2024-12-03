import Link from 'next/link'
import React from 'react'

function Navlist() {
  return (
    <>
      <ul className='flex gap-[30px] pr-[40px]  '>
        
        <Link href={`/`}><li>Home</li></Link>
        <Link href={`/product`}><li>Product</li></Link>
        <Link href={`about`}><li>About</li></Link>
        <Link href={`contact`}><li>Contact</li></Link>

        
        
        
      </ul>
    </>
  )
}

export default Navlist
