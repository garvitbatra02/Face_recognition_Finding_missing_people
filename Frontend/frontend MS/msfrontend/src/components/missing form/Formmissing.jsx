import React, {  useState } from 'react'
import "./formmissing.css"
import axios from "axios"
import formimage from "../../images/form.gif"
const Formmissing = () => {
  const [user, setUser] = useState({name:'',email:'',datemissing:'',identification:'',adhaar_number:'',address:'',height:0,Gender:''})
  const [image, setImage] = useState('')

  const handleinput=(e)=>{
  let nameval=e.target.name
  let value=e.target.value
  // console.log(nameval)
  if(nameval!='image'){
    setUser({...user,[nameval]:value})
  }
  else{
    setImage(e.target.files[0])
  // console.log(image)


  }
  }
 
  const postdata= async(e)=>{
    e.preventDefault();
    const formData = new FormData();
  
// Append all properties of the `user` object to the form
   
    for (const [key, value] of Object.entries(user)) {
    
      formData.append(key, value);
    }
    formData.append('image',image)
  const res = await axios.post('http://localhost:5000/api/missingpeople/addperson', formData, {
  headers: {
    // Multer only parses "multipart/form-data" requests
    'Content-Type': 'multipart/form-data',
  },
});
    // const data=await res.json();
  
    if(res.status===200){
      window.alert("Registration successfull");
    }
    else {
      window.alert("invalid registration");


    }
  }


  return (
    
  <div className="fullformpage">
 
  <div className='formout'>
  <div className="containerform">
    <div className="title">Registration</div>
    <div className="content">
      <form method="POST">
        <div className="user-details">
          <div className="input-box">
            <span className="details">Full Name</span>
            <input type="text" placeholder="Enter person's name" name="name" value={user.name} onChange={handleinput} required/>
          </div>
          <div className="input-box">
            <span className="details">Email</span>
            <input type="text" placeholder="Enter your email" name="email" value={user.email} onChange={handleinput} required/>
          </div>
          <div className="input-box">
            <span className="details">Date missing</span>
            <input type="date" placeholder="Enter your email" name="datemissing" value={user.datemissing} onChange={handleinput} required/>
          </div>
          <div className="input-box">
            <span className="details">identification</span>
            <input type="text" placeholder="Enter person's identificaion mark" name="identification" value={user.identification} onChange={handleinput} required/>
          </div>
          <div className="input-box">
            <span className="details">adhaar number</span>
            <input type="text" placeholder="Enter person's adhaar_number" name="adhaar_number" value={user.adhaar_number} onChange={handleinput} required/>
          </div>
          <div className="input-box">
            <span className="details">address</span>
            <input type="text" placeholder="Enter person's address" name="address" value={user.address} onChange={handleinput} required/>
          </div>
          <div className="input-box">
            <span className="details">height</span>
            <input type="number" placeholder="enter person's height in foot" name="height" value={user.height} onChange={handleinput} required/>
          </div>
          <div className="input-box">
            <span className="details">Phonenumber</span>
            <input type="number" placeholder="enter contact number" name="phonenumber" value={user.phonenumber} onChange={handleinput} required/>
          </div>
          {/* <div className="input-box">
            <span className="details">Nationality</span>
            <input type="number" placeholder="enter person's nationality" required/>
          </div> */}

          <div className="input-box" >
            <span className="details">person image</span>
            <input type="file" placeholder="enter person's image" name="image"  onChange={handleinput} required />
          </div>


        </div>
        
        <div className="gender-details">
          <input type="radio" name="Gender" id="dot-1" value="male" onChange={handleinput}/>
          <input type="radio" name="Gender" id="dot-2" value="female" onChange={handleinput}/>
          <input type="radio" name="Gender" id="dot-3" value="others"  onChange={handleinput}/>
          <span className="gender-title">Gender</span>
          <div className="category">
            <label for="dot-1">
            <span className="dot one"></span>
            <span className="gender">Male</span>
          </label>
          <label for="dot-2">
            <span className="dot two"></span>
            <span className="gender">Female</span>
          </label>
          <label for="dot-3">
            <span className="dot three"></span>
            <span className="gender">others</span>
            </label>
          </div>
        </div>
        <div className="button">
          <input type="submit" value="Register" onClick={postdata}/>
        </div>
      </form>
    </div>
  </div>

</div>

<div className="photoform">
<div className="textphoto">
  Get the missing person Registered with us and get him found with our face recognition methods
</div>
  <img src={formimage} alt=""  width='400px'/>
</div>
    
</div>
  )
}

export default Formmissing