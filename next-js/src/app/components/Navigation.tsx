import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navigation = () => {
  return (
    <nav>
      <Link className='mr-4' href='/'>Home</Link>
      <Link className='mr-4' href='/about'>About</Link>
      <Link className='mr-4' href='/products/1'>Product 1</Link>
    </nav>
  )
}

export default Navigation
