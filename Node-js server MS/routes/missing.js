const express=require("express");
const router=express.Router();
const person=require("../models/person")
const mongoose=require("mongoose");
const multer=require("multer");
const fs=require('fs')
const location=require("../models/location")
//image upload
var storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./uploads')
    }
    ,filename:function(req,file,cb){
        const orifilename=file.originalname;
        
        var idx=-1;
        for(var i=0;i<orifilename.length;i++){
            if(orifilename[i]=='.'){
                idx=i;
            }
        }
        var str=orifilename.substring(idx);
        cb(null,req.body.name+"_"+req.body.adhaar_number+str)
    }
})

var upload=multer({
    storage:storage
}).single('image');

//ROUTE:1  : to add missing person 
router.post("/addperson",upload,async (req,res)=>{
    try {
        
        const {name,email,Gender,identification,nationality,height,datemissing,address,adhaar_number,phonenumber}=req.body;
        // console.log(req);


        let newperson=new person({name:name,email:email,Gender:Gender,identification:identification,nationality:nationality,height:height,Date_missing:datemissing,address:address,adhaar_number:adhaar_number,phonenumber:phonenumber,
        image:{
            data:fs.readFileSync('./uploads/'+ req.file.filename),
            contentType:"image/png"
        }
        });
        const savedperson=await newperson.save(); 
        // console.log(savedperson)  
        res.json(savedperson);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('some error occured');
    }
 })

 //ROUTE:2  : to get all missing persons
 router.get("/getallpersons",async (req,res)=>{

    try {
         //find the note with the provided id in the parameter or link if not found return error
    let missingpersons=await person.find();
    // console.log(missingpersons);
    if(!missingpersons){
        res.status(404).send("Not Found");
    }
    
    // requiredopportunity=await opportunity.findByIdAndDelete(req.params.id);
    // res.json({"success":"All opportunities found"});
    res.status(200).send(missingpersons);
    }
     catch (error) {
        console.error(error.message);
        res.status(500).send('some error occured');
    }


   
});
//Route:3 to delete a particular missing person
router.delete("/deleteperson/:id",async (req,res)=>{

    try {
         //find the note with the provided id in the parameter or link if not found return error
    let requiredperson=await person.find({adhaar_number:req.params.id});
    // console.log(requiredperson);
    if(!requiredperson||requiredperson.length==0){
        res.status(404).send("Not Found");
    }
    
    requiredperson=await person.deleteOne({adhaar_number:req.params.id});
    res.json({"success":"person has been deleted"});

    let locations=await location.deleteMany({adhaar_number:req.params.id});



    }
     catch (error) {
        console.error(error.message);
        res.status(500).send('some error occured');
    }


   
});

 //ROUTE:4 : to get all missing person of gievn adhaar
 router.get("/getallpersons/:id",async (req,res)=>{

    try {
         //find the note with the provided id in the parameter or link if not found return error
    let missingpersons=await person.find({adhaar_number:req.params.id});
    // console.log(missingpersons);
    if(!missingpersons){
        res.status(404).send("Not Found");
    }
    
    // requiredopportunity=await opportunity.findByIdAndDelete(req.params.id);
    // res.json({"success":"All opportunities found"});
    res.status(200).send(missingpersons);
    }
     catch (error) {
        console.error(error.message);
        res.status(500).send('some error occured');
    }


   
});






module.exports=router;
