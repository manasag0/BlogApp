import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'; // Fix the typo here
export default function LoginPage() {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [redirect, setRedirect] = useState(false)
   async function login(ev){
    ev.preventDefault();
   const response = await fetch('http://localhost:5010/login',{
      method:'POST',body:JSON.stringify({username:username,password:password}),
      headers: {"Content-Type": "application/json"},
      credentials:'include'
    })
    if(response.ok){
      setRedirect(true)
    }else{
      alert("Wrong username or password")
    }
  }
  if (redirect) {
    return <Navigate to={'/'} />; // Use Navigate instead of Navitage
  }
  return (
    <div className='p-2 lg:mx-[300px]'>
      <form action='' className='lg:mx-10 my-[150px] sm:m-0 lg:my-[200px]' onSubmit={login} >
        <input type="text" name="username" id="" placeholder='username' value={username} 
        onChange={ev=> setUsername(ev.target.value)}
        className='p-2 rounded-md w-[100%] lg:p-3  shadow-md border border-gray-300 border-3'  />
            <br />
            <br />
        <input type="password" name="password" id="password" placeholder='password'value={password} 
        onChange={ev=>setPassword(ev.target.value)}
        className='p-2 border-3 rounded-md w-[100%] lg:p-3  shadow-md border border-gray-300 border-3'/>
            <br />
            <br />
        <button type="submit" className='bg-gray-700 hover:text-gray-700 text-gray-300 shadow-md p-3 rounded-md hover:bg-gray-300 cursor-pointer w-[100%]'>Login</button>
        </form>
    </div>
  )
}
