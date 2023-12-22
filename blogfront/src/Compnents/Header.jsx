import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
          <header className="flex justify-between pt-7 px-4 lg:pt-10 lg:px-[20px]" >
        <Link to='/'> <h1 className='shadow-md px-2 text-gray-700 text-[20px] font-extrabold lg:text-[35px]'>My Blog</h1></Link>
              <div className=' top-[20px] text-gray-700 text-[12px] lg:text-[18px]'>
                  <nav>
                      <Link to='/login' className='px-[3px] '>Log in</Link>
                      <Link to='/signup' className='px-[3px]'>Sign Up</Link>
                  </nav>
              </div>
          </header>
    </div>
  )
}
