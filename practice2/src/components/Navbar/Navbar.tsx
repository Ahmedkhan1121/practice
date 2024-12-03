import React from 'react'
import Navlist from '../Navlist/Navlist'
import Logo from '../Logo/Logo'

function Navbar() {
  return (
    <>
    <div className='flex justify-between p-[15px] '>
      <Logo/>
      <Navlist/>
    </div>
      </>
  )
}

export default Navbar
