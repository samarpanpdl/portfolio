import Link from 'next/link'
import React from 'react'
import NavLink from './NavLink'

const navLinks=[
    {title:"About",path:"#about",},
    {title:"Projects", path:"#projects"},
    {title:"Contact", path:"#contact"},
]


const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90'>
        <div className='flex flex-wrap items-center justify-between mx-auto py-4 px-6'>
            <Link href={"/"} className='text-2xl md:text-4xl ml-10 mt-4 text-white font-semibold'>LOGO</Link>
            <div className='menu hidden md:block md:w-auto mr-30' id='navbar'>
                <ul className='flex pt-4 md:p-0 md:flex-row md: space-x-12 mt-4 '>
                    {
                        navLinks.map((link,index)=>(
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />

                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar