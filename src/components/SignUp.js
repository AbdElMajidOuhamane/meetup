import React, { useState } from 'react'
import { useSignUp } from '../hooks/useSignUp';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [username,setUsername]=useState("")
  const navigate=useNavigate()
    const {signup,isLoading,error}=useSignUp()
    const handleSubmit=async(e)=>{
      e.preventDefault()
      const avatar={};
      console.log(signup(email,password,username,avatar))
      await signup(email,password,username)
      navigate('/')
    }
  return (
    <form onSubmit={handleSubmit}>
    <div className="relative z-0 w-full mb-6 group">
    <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900">Email Adress</label>
        <input type="text" id="large-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500" onChange={(e)=>setEmail(e.target.value)}/>
    </div>
    <div className="relative z-0 w-full mb-6 group">
    <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
        <input type="password" id="large-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500" />
    </div>
    <div className="relative z-0 w-full mb-6 group">
    <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 ">Confirm Password</label>
        <input type="password" id="large-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500" onChange={(e)=>setPassword(e.target.value)}/>
    </div>
    <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
        <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 ">User Name</label>
        <input type="text" id="large-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"onChange={(e)=>setUsername(e.target.value)}/>
        </div>
        <div className="relative z-0 w-full mb-6 group">
        <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 ">Phone number</label>
        <input type="text" id="large-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"/>
        </div>
    </div>

        
        
    
    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" disabled={isLoading}>Submit</button>
   {error && <div>{error}</div>}
    </form>
  )
}

export default SignUp
