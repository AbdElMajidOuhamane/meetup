import React, { useContext, useEffect, useState } from 'react'
import Card from '../components/Card'
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate=useNavigate()
  const { user } = useContext(AuthContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchPostData = async () => {
      if (user && user.accessToken) {
        try {
          const response = await fetch('/api/posts/all', {
            headers: {
              Authorization: `Bearer ${user.accessToken}`,
            },
          });
          const json = await response.json();
          setData(json.posts);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };

    fetchPostData();
  }, [user]);



  return (
    <>
   {user? <div className="grid w-full gap-6 md:grid-cols-4 p-40 bg-slate-300">
      {data && data.map((card)=>(
        <Card key={card._id} card={card} />
        )
      )}

</div>:
<div className="container mx-auto bg-slate-300">
  <div className='flex flex-col justify-center items-center p-40'>
<h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We invest in the world’s potential</h1>
<p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
<button onClick={()=>navigate("/signin")} className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
    LogIn
    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg>
</button></div>
</div>
}
</>
   
  )
}

export default Home
