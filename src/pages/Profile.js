import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import moment from 'moment';
import { useChangePic } from '../hooks/useChangePic'
import ProfilePosts from '../components/ProfilePosts';


const Profile = () => {
    const { user } = useContext(AuthContext);
    const [userData, setUserData] = useState(null);
    const [file, setFile] = useState('');
    
    const { updatepic, isLoading, error } = useChangePic();
  
    const handleSubmit = (e) => {
        e.preventDefault();
        if (file) {
          updatepic(file);
        }
      };
    
    useEffect(() => {
      const fetchUserData = async () => {
        if (user && user.accessToken) {
          try {
            const response = await fetch('/api/users/current', {
              headers: {
                Authorization: `Bearer ${user.accessToken}`,
              },
            });
            const fetchedUserData = await response.json();
            setUserData(fetchedUserData);
          } catch (error) {
            console.error('Error fetching user data:', error);
          }
        }
      };
  
      fetchUserData();
    }, [user]);

 
    if (!userData) {
      return <isLoading />
    }
  
  

  return (
    <div className="p-16 bg-slate-300">
      <div className="p-8 bg-white shadow mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
            <div>
             
              <p className="font-bold text-gray-700 text-xl">89</p>
              <p className="text-gray-400">Posts</p>
              
            </div>
                <label className="relative text-blue-700 bg-gray-200 hover:bg-gray-300 focus-within:outline-none focus-within:ring-4 focus-within:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus-within:ring-blue-900">
                <span className="absolute inset-0 rounded-full bg-blue-700 opacity-0"></span>
                <span className="relative">Choose File</span>
                <input type="file" className="absolute inset-0 opacity-0 z-10" onChange={(e) => setFile(e.target.files[0])} />
                </label>
         
       
          </div>
          <div className="relative">
            <div >
              {userData.avatar.url ?
               <img className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500" src={userData.avatar.url} alt="..." />:
               <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                    <svg className="absolute w-full h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                </div>
               }
            </div>
          </div>
          <button type="button"
           className="text-blue-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-blue-900"
           onClick={handleSubmit}
           >Save</button>
        </div>

        <div className="mt-20 text-center border-b pb-12">
          <h1 className="text-4xl font-medium text-gray-700">@{userData.username}</h1>
          <p className="font-light text-gray-600 mt-3"></p>

          <p className="mt-8 text-gray-500">Joined on {moment(userData.createdAt).format("D MMMM, YYYY")}</p>
          <p className="mt-2 text-gray-500">im thinkin what may add as user informations</p>
        
        </div>
      <ProfilePosts />
      </div>
    </div>
  );
};

export default Profile;
