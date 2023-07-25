import React, { useContext, useEffect, useState } from 'react'
import Card from './Card';
import { AuthContext } from '../context/AuthContext';

const ProfilePosts = () => {

    const { user } = useContext(AuthContext);
    const [data, setData] = useState(null);
  
  
    useEffect(() => {
      const fetchPostData = async () => {
        if (user && user.accessToken) {
          try {
           
            const response = await fetch(`/api/posts/my`, {
              headers: {
                Authorization: `Bearer ${user.accessToken}`,
              },
            });
            const json = await response.json();
            setData(json);
          } catch (error) {
            console.error('Error fetching user data:', error);
          }
        }
      };
  
      fetchPostData();
    }, [user]);
  return (
    <div className="grid w-full gap-6 md:grid-rows-4 p-4">
        {data && data.map((card)=>(
        <Card key={card._id} card={card} />
        )
      )}
    </div>
  )
}

export default ProfilePosts
