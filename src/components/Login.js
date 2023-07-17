import React, { useState } from 'react'
import { useLogin } from '../hooks/useLogin';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("")
  const navigate=useNavigate();
  const {login,isLoading,error}=useLogin()
  const handleSubmit=async(e)=>{
    e.preventDefault()
    console.log(login(email,password))
    await login(email,password)
    navigate('/')
  }
  return (
    
<form onSubmit={handleSubmit}>
  <div class="mb-6">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
    <input type="email" id="email"
     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
      placeholder="name@email.com" required onChange={(e)=>setEmail(e.target.value)}/>
  </div>
  <div class="mb-6">
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
    <input type="password" id="password" class="bg-gray-50 border
     border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
     required onChange={(e)=>setPassword(e.target.value)}/>
  </div>
  <div class="flex items-start mb-6">
    <div class="flex items-center h-5">
      <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" required />
    </div>
    <label for="remember" class="ml-2 text-sm font-medium text-gray-900">Remember me</label>
  </div>
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" disabled={isLoading} >Connexion</button>

{error && <div>{error}</div>}

</form>

  )
}

export default Login
