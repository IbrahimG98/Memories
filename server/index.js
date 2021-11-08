import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import postRoutes from "../server/routes/posts.js";

const app=express();
// app.use(cors());
app.use(cors());


app.use(bodyParser.json({limit:"30mb",extended:"true"}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:"true"}));


const CONNECTION_URL='mongodb+srv://Ibrahimg98:Mongo2021@cluster0.kjqym.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT=process.env.PORT || 5000;
app.use('/posts',postRoutes);



mongoose.connect(CONNECTION_URL, {useNewUrlParser:true,useUnifiedTopology:true}).
then(()=>{app.listen(PORT,()=>{console.log('Server running on port ' + PORT.toString())})}).catch((error)=>{console.log(error.message)});
//mongoose.set('useFindAndModify',false);


