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
  const [images, setImages] = useState([]);
  const [image, setImage] = useState(null);
  const { user } = useContext(AuthContext);


  const [time, setTime] = useState('10:00');

  const onChangeTime = (timeValue) => {
     setTime(timeValue);
  }


  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setImage(selectedFile);
    setImages(image)
  };

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const post ={
      title, description, location,category, date,time,images

    }
    console.log(title, description, location,category, date,time,images)

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
    <div  className='md:container md:mx-auto gap-2'>
      
    <form onSubmit={handleSubmit}>
    <div className="flex items-center justify-center w-full">
    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
           {image ? (
        <div className="w-full">
          <img src={URL.createObjectURL(image)} alt="Uploaded" className="h-32 w-auto" />
        </div>
      ):(
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
        <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
    </svg>
    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p></div>
      )}
        </div>
        <input id="dropzone-file" type="file" class="hidden" onChange={handleFileChange}/>
    </label>
    
</div> 
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
