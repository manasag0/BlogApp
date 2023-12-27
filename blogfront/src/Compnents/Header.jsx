import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5010/profile', {
          credentials: 'include'
        });

        if (!response.ok) {
          throw new Error('Failed to fetch profile data');
        }

        const userInfo = await response.json();
        setUsername(userInfo.username);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchData();
  }, []);

  function logout() {
    fetch('http://localhost:5010/logout', {
      method: 'POST',
      credentials: 'include'
    });
  }

  return (
    <div>
      <header className="flex justify-between pt-7 px-4 lg:pt-10 lg:px-[20px]">
        <Link to='/'>
          <h1 className='shadow-md px-2 text-gray-700 text-[20px] font-extrabold lg:text-[35px]'>My Blog</h1>
        </Link>
        <div className=' top-[20px] text-gray-700 text-[12px] lg:text-[18px]'>
          <nav>
            {username ? (
              <>
                <Link to="/create" className="mr-6 hover:underline cursor-pointer">Create new post</Link>
                <a href='/' onClick={logout}>Logout</a>
              </>
            ) : (
              <>
                <Link to='/login' className='px-[3px] '>Log in</Link>
                <Link to='/signup' className='px-[3px]'>Sign Up</Link>
              </>
            )}
          </nav>
        </div>
      </header>
    </div>
  );
}
