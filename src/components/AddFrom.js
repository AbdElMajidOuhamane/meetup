import React, { useContext, useState } from 'react'
import { meetupCategories } from '../categories'
import { AuthContext } from '../context/AuthContext';
import {useNavigate} from "react-router-dom"

const AddFrom = () => {
  const [title,setTitle]=useState("");
  const [category,setCategory]=useState("")
  const [location,setLocation]=useState("")
  const [date,setDate]=useState("")
  const navigate=useNavigate()
  const [description,setDescription]=useState("")
  const [error,setError]=useState(null)
  const { user } = useContext(AuthContext);


  const [time, setTime] = useState('10:00');

  const onChangeTime = (timeValue) => {
     setTime(timeValue);
  }


  const handleSubmit=async(e)=>{
    e.preventDefault();
    const post ={
      title, description, location,category, date,time

    }
    console.log(title, description, location,category, date,time)
   
const res = await fetch("/api/posts/new", {
  method: "POST",
  headers: { "Content-Type": "application/json",
    Authorization: `Bearer ${user.accessToken}`,
},
  body: JSON.stringify(post)
});


if (!res.ok) {
  const errorText = await res.text();
  setError(errorText);
  return;
}
if(res.ok){

  const json =await res.json()
  navigate("/profile")
      setTitle('');
      setCategory("");
      setDate("");
      setLocation("");
      setDescription('');
      setError(null);
      console.log("new post added",json);
}
    
    
  }
  

  return (
    <div  className='md:container md:mx-auto'>
      
    <form onSubmit={handleSubmit}>
    <div className="relative z-0 w-full mb-6 group">
      <div className='grid md:grid-cols-2 md:gap-6'>
        <div>
    <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900">Title</label>
        <input type="text" id="large-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"required onChange={(e)=>setTitle(e.target.value)}/>
        </div>

        <div>
        <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900">Categry</label>
        
<select id="underline_select" className="block py-2.5 px-0 w-full p-7 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 peer" onChange={(e)=>setCategory(e.target.value)}>
    <option value="">Choose a category</option>
          {meetupCategories.map(category => (
            <option  key={category.id} value={category.name} >{category.name}</option>
          ))}
</select>
        </div>
      </div>
    </div>
    <div className="grid md:grid-cols-3 md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
        <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 ">Date And Time</label>
        <input type="text" id="large-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"required onChange={(e)=>setDate(e.target.value)}/>
        </div>
        <div className="relative z-0 w-full mb-6 group">
        <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 ">Location</label>
        <input type="text" id="large-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500" required onChange={(e)=>setLocation(e.target.value)}/>
        </div> 
        <div className="relative z-0 w-full mb-6 group">
        <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 ">Time</label>
        <input
          className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
          placeholder="Select a time"
          value={time}
          change={onChangeTime}
        />
        </div>
    </div>
   
        <div className="relative z-0 w-full mb-6 group">
        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 ">Description</label>
<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Leave a comment..." required onChange={(e)=>setDescription(e.target.value)}></textarea>
        </div>
        
    
    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Add MeetUp</button>
    </form>
    
    </div>
  )
}

export default AddFrom
