import React from 'react'
import { Link } from 'react-router-dom'
import {FaUser,FaCartArrowDown, FaBars} from 'react-icons/fa6'
import SearchBar from './SearchBar'

const Navbar = () => {
  return (
    <>
      <nav className="contailer mx-auto flex items-center justify-between py-4 px-6">
        <div>
            <Link to="/" className='text-2xl font-medium'>Shoe Corner</Link>
        </div>
        <div className='hidden md:flex space-x-6'>
            <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
              Addidas
            </Link>
            <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
              Nike
            </Link>
            <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
              Jordan
            </Link>
            <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
              Puma
            </Link>
            <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
              Skechers
            </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/profile" className='hover:text-red'>
          <FaUser className='h-6 w-6 text-gray-700' />
          </Link>
          <button className='relative hover:text-black'>
            <FaCartArrowDown className='h-6 w-6 text-gray-700' />
            <span className='absolute -top-4 -right-1  bg-rabbit-red text-white text-xs rounded-full px-2 py-0.5'>4</span>
          </button>
          {/* Search Button */}
          <div className="overflow-hidden">
            <SearchBar />
          </div>
          <button className='md:hidden'>
            <FaBars className='h-6 w-6 text-gray-700'/>
          </button>
        </div>
      </nav>
    </>
  )
}
export default Navbar