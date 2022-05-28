const express=require("express");
const router=express.Router();
const location=require("../models/location")
const mongoose=require("mongoose");


//ROUTE:1  : to add missing person location
router.post("/addlocation",async (req,res)=>{
    try {
        
        const {name,adhaar,locationval}=req.body;
        // console.log(req);
        let newlocation=new location({name:name,adhaar_number:adhaar,location:locationval
        });
        const savedlocation=await newlocation.save(); 
        console.log(savedlocation)  
        res.json(savedlocation);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('some error occured');
    }
 })

//ROUTE:2  : to get info of locations 

router.get("/getalllocations/",async (req,res)=>{
    try {
        const locations=await location.find()
    res.json(locations); 
    } catch (error) {
        console.error(error.message);
        res.status(500).send('some error occured');
    }
  
})





module.exports=router;
