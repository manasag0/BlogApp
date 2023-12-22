import React from 'react'

export default function LoginPage() {
  return (
    <div className='p-2 lg:mx-[300px]'>
      <form action='' className='lg:mx-10 my-[150px] sm:m-0 lg:my-[200px]' >
        <input type="text" name="username" id="" placeholder='username' className='p-2 rounded-md w-[100%] lg:p-3  shadow-md border border-gray-300 border-3'  />
            <br />
            <br />
        <input type="password" name="password" id="password" placeholder='password' className='p-2 border-3 rounded-md w-[100%] lg:p-3  shadow-md border border-gray-300 border-3'/>
            <br />
            <br />
        <button type="submit" className='bg-gray-700 hover:text-gray-700 text-gray-300 shadow-md p-3 rounded-md hover:bg-gray-300 cursor-pointer w-[100%]'>Login</button>
        </form>
    </div>
  )
}
