import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

const Navbar = () => {
  return (
    <header className='px-4 py-6 bg-slate-200 shadow-md max-w-6xl mx-auto'>
      <nav className='flex items-center justify-between'>
        <Link to={'/'}>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>Sahand</span>
            <span className='text-slate-700'>Estate</span>
          </h1>
        </Link>

        <form className='bg-slate-100 rounded-lg flex items-center'>
          <input type="text" placeholder="search" className='bg-transparent py-2 px-2 w-24 sm:w-64 focus:outline-none' />
          <FaSearch className='text-slate-600 w-8' />
        </form>
        <ul className='flex gap-4'>
          <Link to={'/'}>
            <li className='hover:underline hidden sm:inline text-slate-700 font-medium sm:hidden'>Home</li>
          </Link>
          <Link to={'signin'}>
            <li className='hover:underline hidden sm:inline text-slate-700 font-medium'>Sign In</li>
          </Link>
          <Link to={'signup'}>
            <li className='hover:underline text-slate-700 font-medium sm:hidden'>Sign Up</li>
          </Link>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
