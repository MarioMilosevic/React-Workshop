'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navigation = () => {
    const pathname = usePathname()
    console.log(pathname)
  return (
    <nav>
      <Link className={pathname === "/" ? "font-bold mr-4" : "text-blue-500 mr-4"} href='/'>Home</Link>
      <Link className='mr-4' href='/about'>About</Link>
      <Link className='mr-4' href='/products/1'>Product 1</Link>
    </nav>
  )
}

export default Navigation
