import React from 'react'
import mapimg from "./Capture.PNG"
const Missingcard = (props) => {
  return (
    <div className='mx-12'><div class="flex justify-center my-5 ">
    
    <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg ">
      <img class=" w-full h-96 md:h-auto object-cover md:w-40 rounded-t-lg md:rounded-none md:rounded-l-lg" src={mapimg} alt="" />
      <div class="p-4 flex flex-col justify-start ">
      <div className='flex '><h5 class="text-gray-900 text-xl font-medium mb-2">{props.name}</h5>
      <h6 class="ml-5 text-gray-700 text-l font-medium mb-2">{props.adhaar}</h6>
      </div>
      <div class="text-gray-700 text-base mb-4">
        <span  class="text-gray-900 text-m font-medium mb-2 mx-1">Found:</span> {props.date}
      </div>
        <p class="text-gray-700 text-base ">
        <div class="text-gray-700 text-base">
        <span  class="text-gray-900 text-m font-medium mb-2 mx-1">Region:</span> {props.region}
      </div>
        <div className='flex'>
        <p class="text-gray-700 text-base ">
        <span  class="text-gray-900 text-m font-medium mb-2 mx-1">Latitude:</span> {props.latitude}
      </p>
      <p class="text-gray-700 text-base  ml-2">
        <span  class="text-gray-900 text-m font-medium mb-2 mx-1">Longitude:</span>{props.longitude}
      </p>
        </div>
        <div className='flex'>
        <p class="text-gray-700 text-base mb-4">
        <span  class="text-gray-900 text-m font-medium mb-2 mx-1">Country:</span>{props.country}
      </p>
      <p class="text-gray-700 text-base mb-4 ml-2">
        <span  class="text-gray-900 text-m font-medium mb-2 mx-1">city:</span> {props.state}
      </p>
        </div>
        </p>
        {/* <p class="text-gray-600 text-xs">Last updated 3 mins ago</p> */}
      </div>
    </div>
  </div></div>
  )
}

export default Missingcard