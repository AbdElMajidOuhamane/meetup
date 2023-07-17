import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import moment from 'moment/moment';
import { useNavigate } from 'react-router-dom';


const ProfileAvatar = () => { 
    const { user } = useContext(AuthContext);
    const [userData, setUserData] = useState(null);
    const navigate=useNavigate()
   
  
    useEffect(() => {
      const fetchUserData = async () => {
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
      };
  
      fetchUserData();
    }, [user.accessToken]);
  
    if (!userData) {
      return <div>Loading...</div>;
    }
  
    console.log("The Data is", userData);
  
    return (
      <div style={{cursor:"pointer"}} onClick={()=>navigate("/profile")}>
     {userData.avatar?
     
     <img class="w-10 h-10 rounded-full" src={userData.avatar.url}   alt="Rounded avatar"></img>
        :
       
<div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
</div>

  }
     
     
      </div>
    );
};

export default ProfileAvatar;
