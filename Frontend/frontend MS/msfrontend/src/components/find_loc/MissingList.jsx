import React, { useEffect, useState } from 'react'
import Missingcard from './Missingcard'
import "./MissingList.css"
import "./Searchcss.css"
import notfound from "./nodata.gif"
import locationimg from "./Locationnew.png"
// import SearchButton from './SearchButton'
const MissingList = () => {

    const [location, setLocation] = useState([])
    const [text, setText] = useState('')
    const [current, setcurrent] = useState('')

    const handleinput=(e)=>{
      if(e.target.value===""){
        setText("")
      }
      setcurrent(e.target.value)
    }
    const handleclick=()=>{
      setText(current)
    }
    const getdata= async ()=>{
        const response= await fetch("http://localhost:5000/api/foundlocation/getalllocations");

        let data=await response.json();
        console.log(data)
        setLocation(data)
    }
    useEffect(() => {
        getdata();
    
    }, [])
    


  return (
        <div className='missingloc'>
      <div className="headerlist text-4xl">
      <div className="subheadinglist">
        <div>Tracked Locations</div>
        <img src={locationimg} alt="" srcset="" width="50px"/> 
        </div>
      </div>

    
      <div className="input-group">
      <div><div  class="search-bar">
	<input type="search" placeholder='search location by adhaar' name="search" pattern=".*\S.*" required onChange={handleinput} value={current}/>
	<button class="search-btn" onClick={handleclick}/>
	
	
</div></div>
     </div>   

    <div className='contentlist'>
    
    {
        location.map((element,idx)=>{

            if(text===""){
              return (
                <Missingcard name={element.name} adhaar={element.adhaar_number} date={element.date} region={element.location.region} latitude={element.location.latitude} longitude={element.location.longitude} country={element.location.country} state={element.location.city} key={`${element.adhaar_number}_${element.date}`}/>
              );
            }
            else if(element.adhaar_number===text){
              return (<Missingcard name={element.name} adhaar={text} date={element.date} region={element.location.region} latitude={element.location.latitude} longitude={element.location.longitude} country={element.location.country} state={element.location.city} key={`${element.adhaar}_${element.date}`}/>);
            }
            
              
            
            return <div></div>;

              

            
        })
    }
 
   
    </div>
    </div>
  )
}

export default MissingList