import React, { useState } from 'react';
import applogo  from "./applogo.png"
import {
   Link
  } from "react-router-dom";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div><nav className="lg:hidden relative z-40" style={{backgroundColor:'#f2faff'}}>
    <div className="flex py-6 justify-between items-center px-4">
    <div className="w-1/6 flex items-center ">
            <img src={applogo} alt="logo" width="30px"/>
            <div className="titlename" style={{fontSize:'30px',fontWeight:700,letterSpacing:'1px',color:'#012970',fontFamily:'sans-serif'}}>
          FindOne
        </div>
        </div> 
        <div className="flex items-center">
            <ul id="list" className={`${menu ? '' : 'hidden'} p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-16 md:mt-16`}>
                <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                    <Link to="/">
                        <span className="ml-2 font-bold">Home</span>
                    </Link>
                </li>
                <li className="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center" onclick="dropdownHandler(this)">
                    <a href="http://localhost:8501/">
                        <span className="ml-2 font-bold">Surveillance Area</span>
                    </a>
                </li>
                <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                    <Link to="/Formmissing">
                        <span className="ml-2 font-bold">Report case</span>
                    </Link>
                </li>
                <li className="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center" onclick="dropdownHandler(this)">
                    <Link to="/Missingpeople">
                        <span className="ml-2 font-bold">Missing List</span>
                    </Link>
                </li>
                <li className="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center" onclick="dropdownHandler(this)">
                    <Link to="/locations">
                        <span className="ml-2 font-bold">Tracked locations</span>
                    </Link>
                </li>
            </ul>
            <div className="xl:hidden">
               <img id="open" className={` ${menu ? 'hidden' : '' } close-m-menu`} onClick={() => setMenu(!menu)}  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/right_aligned_with_searchbar_Svg1.svg" alt="menu" />
                <div id="close" className={` ${menu ? '' : 'hidden' } close-m-menu`} onClick={() => setMenu(!menu)}>
                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/right_aligned_with_searchbar_Svg2.svg" alt="cross" />
                </div>
            </div>
        </div>
    </div>
</nav>
<nav  role="navigation" aria-label="Main" tabIndex="0" className="hidden relative z-10 w-full lg:flex justify-between items-center p-8" style={{backgroundColor:'#f2faff'}}>
    <div className="w-1/6 flex items-center ">
        <a tabIndex="0" aria-label="we care company logo" href="javascript:void(0)">
        <img src={applogo} alt="logo" width="60px"/> 
        </a>
        <div className="titlename" style={{fontSize:'30px',fontWeight:700,letterSpacing:'1px',color:'#012970',fontFamily:'sans-serif'}}>
          FindOne
        </div>
    </div>
    <div className="w-5/6">
        <div className="flex items-center justify-end">  
            <ul className="text-gray-800 lg:space-x-8 flex items-center leading-none">
                <li>
                    <Link className="hover:text-indigo-500 text-lg focus:text-indigo-500" to="/">Home</Link>
                </li>
                <li className="ml-4 hover:text-indigo-500 ">
                    <a className="focus:text-indigo-500 text-lg" href="http://localhost:8501/">Surveillance Area</a>
                </li>
                <li className="ml-4 hover:text-indigo-500 focus:text-indigo-500">
                    <Link className="focus:text-indigo-500 text-lg" to="/Formmissing">Report case</Link>
                </li>
                <li className="ml-4 hover:text-indigo-500 focus:text-indigo-500">
                    <Link className="focus:text-indigo-500 text-lg" to="/Missingpeople">Missing List</Link>
                </li>
                <li className="ml-4 hover:text-indigo-500 focus:text-indigo-500">
                    <Link className="focus:text-indigo-500 text-lg"  to="/locations">Tracked locations</Link>
                </li>
            </ul>
            <div className="pl-40">
                
            </div>
        </div>
    </div>
</nav></div>
  )
}

export default Navbar