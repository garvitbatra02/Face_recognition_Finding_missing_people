const mongoose=require('mongoose');
const mongoURI="mongodb+srv://Garvit_Batra:!Ramprakash123@cluster0.eklye.mongodb.net/Face_Recognition?retryWrites=true&w=majority"

const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connected to mongo successfully");
    })
}
module.exports=connectToMongo;