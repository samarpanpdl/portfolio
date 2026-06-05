"use client"
import Link from 'next/link'
import React,{useState} from 'react'
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid'
import MenuOverlay from './MenuOverlay'

const navLinks=[
    {title:"About",path:"/#about",},
    {title:"Projects", path:"/#projects"},
    {title:"Contact", path:"/#contact"},
    {title:"Blogs", path: "/blogs"},
]


const Navbar = () => {
    const [navbarOpen,setNavbarOpen]=useState(false);
  return (
    <nav className='fixed top-0 left-0 shadow-lg right-0 z-10 bg-[#1A1C1E] bg-opacity-100'>
        <div className='flex flex-wrap mx-auto float-right py-4 px-6'>
            <div className='mobile-menu block md:hidden'>
                {
                    !navbarOpen ? (
                        <button onClick={()=> setNavbarOpen(true)} className=' flex items-center px-3 py-2 border rounded border-slate-200 hover:text-slate-200'>
                           <Bars3Icon className='h-5 w-5 text-[#F8FAFC]' />
                        </button>
                    ) : (
                        <button onClick={()=> setNavbarOpen(false)} className=' flex items-center px-3 py-2 border rounded border-slate-200 hover:text-slate-200'>
                           <XMarkIcon className='h-5 w-5 text-[#F8FAFC]' />
                        </button>
                    )
                }
            </div>
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
        { navbarOpen && <MenuOverlay links={navLinks} />
        }
    </nav>
  )
}

export default Navbar