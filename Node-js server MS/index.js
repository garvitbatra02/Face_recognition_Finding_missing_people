const connectToMongo=require('./db');
const cors = require('cors')
const express = require('express')
const bodyParser=require('body-parser')
const app = express()
const port = process.env.PORT||5000
connectToMongo();

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors())
app.use("/api/missingpeople",require("./routes/missing"));
app.use("/api/foundlocation",require("./routes/location"));




app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })