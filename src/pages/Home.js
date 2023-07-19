import React, { useContext, useEffect, useState } from 'react'
import Card from '../components/Card'
import { AuthContext } from '../context/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate=useNavigate()
  const { user } = useContext(AuthContext);
  const [data, setData] = useState(null);

  // Get the location object using the useLocation hook
  const location = useLocation();

  // Extract the 'keyword' query parameter from the location object
  const keyword = new URLSearchParams(location.search).get('keyword');

  useEffect(() => {
    const fetchPostData = async () => {
      if (user && user.accessToken) {
        try {
          const response = await fetch(`/api/posts/all?keyword=${encodeURIComponent(keyword)}`, {
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
  }, [user, keyword]);



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
  <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">MeetUp Hub -</span> Making Events</h1>
<p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">MeetUp Hub is a vibrant online platform that brings individuals from diverse backgrounds together to connect, engage, and foster meaningful relationships. Whether you're looking to expand your social circle, network professionally, or explore shared interests, MeetUp Hub provides a dynamic space for organizing and discovering exciting events and gatherings in your area. Join our inclusive community today and unlock endless possibilities for personal growth, networking, and forging lasting connections with like-minded individuals.
 Embrace the power of MeetUp Hub and start creating unforgettable experiences that enrich your life.</p>

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
