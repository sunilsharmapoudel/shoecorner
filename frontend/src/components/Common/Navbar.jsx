import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className="contailer mx-auto flex items-center justify-between py-4 px-6">
        <div>
            <Link to="/" className='text-2xl font-medium'>Shoe Corner</Link>
        </div>
        <div className='hidden md:flex space-x-6'>
            <Link to="#" className='text-gray-700 hover:text-block text-sm font-medium uppercase'>
            Addidas
            </Link>
            <Link to="#" className='text-gray-700 hover:text-block text-sm font-medium uppercase'>
            Nike
            </Link>
            <Link to="#" className='text-gray-700 hover:text-block text-sm font-medium uppercase'>
            Jordan
            </Link>
            <Link to="#" className='text-gray-700 hover:text-block text-sm font-medium uppercase'>
            Puma
            </Link>
            <Link to="#" className='text-gray-700 hover:text-block text-sm font-medium uppercase'>
            Skechers
            </Link>
        </div>
    </nav>
    </>
  )
}

export default Navbar