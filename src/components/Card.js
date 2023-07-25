import moment from 'moment'
import React from 'react'

const Card = ({card}) => {
  return (
    <div class="max-w bg-white border border-gray-200 rounded-lg shadow">
    {/* <div>
        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
    </div>
    <div class="p-5">
        <div>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{card.title}</h5>
        </div>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{card.description}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Date :{card.date}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Time :{card.time}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Location :{card.location}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Posted :{moment(card.createdAt).format("D MMMM, YYYY")}</p>
        <button class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </button>
    </div> */}


<div className=" w-full lg:max-w-full lg:flex">
      <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage :`${card.images}`}}>
      </div>
      <div className=" p-4 flex flex-col justify-between">
        <div class="mb-8">
          <div className="text-gray-900 font-bold text-xl mb-2">{card.title}</div>
          <p className="text-gray-700 text-base">{card.description}</p>
          <p className="text-gray-700 text-base">Date :{card.date}</p>
          <p className="text-gray-700 text-base">Time :{card.time}</p>
          <p className="text-gray-700 text-base">Location :{card.location}</p>
          <p className="text-gray-700 text-base">Posted :{moment(card.createdAt).format("D MMMM, YYYY")}</p>
          <button class="inline-flex items-center mt-3 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </button>
        </div>
       
      </div>
    </div>
</div>
  )
}

export default Card
