import React, { useEffect, useState } from 'react'
import missingimg from "./missingguy.png"
import "./Missing_persons.css"
import PersonCard from './PersonCard'

const Missing_persons = () => {
    const [cases, setCases] = useState([])

    const getdata= async ()=>{
        const response= await fetch("http://localhost:5000/api/missingpeople/getallpersons");

        let data=await response.json();
        // console.log(data)
        setCases(data)
    }
    useEffect(() => {
        getdata();
    
    }, [])
    function arrayBufferToBase64(buffer) {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    };

  return (
    <div className='personwhole' style={{backgroundColor:'#f1f1f1'}}>
    <div className="personheader">
    <div className="subheadingmissing">
        <div className='text-4xl'>Missing People</div>
        <img src={missingimg} alt="" srcset="" width="70px"/>
    </div>
    </div>

    <div className='contentlist'>
        {
            cases.map((element)=>{
                
                const base64string=arrayBufferToBase64(element.image.data.data)
                
                const src=`data:image/png;base64,${base64string}`;
                {/* console.log(src) */}
                return( <PersonCard name={element.name} adhaar={element.adhaar_number} email={element.email} date={element.Date_missing.substring(0,10)} height={element.height.$numberDecimal} identification={element.identification} gender={element.Gender} address={element.address} image={src} totalcases={cases} changecase={setCases}/>)
             
                
            })
        }
    </div>



    </div>
  )
}

export default Missing_persons