const mongoose=require("mongoose");
const {Schema}=mongoose;
const locationSchema=new mongoose.Schema({
name:{
    type:String,
    require:true
},
date:{
    type:Date,
    default:Date.now
}
,
adhaar_number:{
    type:String
},
location:{continent_code:{type:String}, region:{type:String}, latitude:{type:String}, longitude:{type:String}, ip:{type:String}, city:{type:String}, timezone:{type:String}, organization_name:{type:String}, country:{type:String}, asn:{type:Number}, organization:{type:String}, area_code:{type:String}, accuracy:{type:Number}, country_code3:{type:String}, country_code:{type:String}}
})
const location=mongoose.model("location",locationSchema);
location.createIndexes();
module.exports=location;