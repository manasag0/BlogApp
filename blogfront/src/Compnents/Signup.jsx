
import React, { useState } from 'react'

export default function Signup() {

  const [username,setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email,setEmail] =useState('');
  async function signup(e){
    e.preventDefault();
     const response =   await fetch('http://localhost:5010/signup', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ username,password, email })
      })
      console.log(response)
    }

  return (
    <div className='p-2 lg:mx-[300px]'>
      <form action='' onSubmit={signup} className='lg:mx-10 my-[150px] sm:m-0 lg:my-[180px]' >
        <input type="text" value={username} name="username" id="" placeholder='username' className='p-2 rounded-md w-[100%] lg:p-3  shadow-md border border-gray-300 border-3'
        onChange={e=>setUsername(e.target.value)}
        />
        <br />
        <br />
        <input type="email" name="username" value={email} id="" placeholder='email' className='p-2 rounded-md w-[100%] lg:p-3  shadow-md border border-gray-300 border-3'
        onChange={e=>setEmail(e.target.value)}
        />
        <br />
        <br />
        <input type="password" name="password" value={password} id="password" placeholder='password' className='p-2 rounded-md w-[100%] lg:p-3  shadow-md border border-gray-300 border-3' 
        onChange={e=>setPassword(e.target.value)}
        />
        <br />
        <br />
        <button type="submit" className='bg-gray-700 hover:text-gray-700 text-gray-300 shadow-md p-3 rounded-md hover:bg-gray-300 cursor-pointer w-[100%]'>Sign Up</button>
      </form>
    </div>
  )
}
