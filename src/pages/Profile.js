import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import moment from 'moment';

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);

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
    return <div>Loading...</div>;
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
          </div>
          <div className="relative">
            <div >
              <img className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500" src={userData.avatar.url} alt="..." />
            </div>
          </div>

       
        </div>

        <div className="mt-20 text-center border-b pb-12">
          <h1 className="text-4xl font-medium text-gray-700">@{userData.username}</h1>
          <p className="font-light text-gray-600 mt-3"></p>

          <p className="mt-8 text-gray-500">Joined on {moment(userData.createdAt).format("D MMMM, YYYY")}</p>
          <p className="mt-2 text-gray-500">im thinkin what may add as user informations</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
