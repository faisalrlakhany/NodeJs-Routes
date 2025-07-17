
const tasks = [
    {
        id : 1 ,
        status : 'Sona nahi'
    },
    {
        id : 2 ,
        status : 'Jagna hai'
    },
    {
        id : 3 ,
        status : 'Samaj araha hai'
    },
    
]


import express from 'express'
import userRoute from './routers/user.js';
import courseRoute from './routers/course.js';
import 'dotenv/config'
import mongoose from 'mongoose';



const app = express()
const PORT = 4000;

app.use(express.json());
app.use("/user" , userRoute)
app.use("/courses" , courseRoute)

// console.log(process.env.MONGODBURI);

mongoose.connect(process.env.MONGODBURI)
.then(()=> console.log("MOngoDb connected"))
.catch((err)=> console.log("err ==> " , err))

app.get('/' , (req , res)=>{

    res.status(200).send(tasks)

})

app.listen(PORT , ()=>{
    console.log("Server Is running On Port " + PORT);
    
})

