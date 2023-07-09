import React from 'react'

const AddFrom = () => {
  return (
    <div  className='md:container md:mx-auto'>
    <form>
    <div className="relative z-0 w-full mb-6 group">
    <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900">Title</label>
        <input type="text" id="large-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"required/>
    </div>
    <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
        <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 ">Date And Time</label>
        <input type="text" id="large-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"required />
        </div>
        <div className="relative z-0 w-full mb-6 group">
        <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 ">Location</label>
        <input type="text" id="large-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500" required/>
        </div>
    </div>

        <div className="relative z-0 w-full mb-6 group">
        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 ">Description</label>
<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Leave a comment..." required></textarea>
        </div>
        
    
    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add MeetUp</button>
    </form>
    </div>
  )
}

export default AddFrom
