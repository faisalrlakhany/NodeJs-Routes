
import express from "express";

const router = express.Router()

const courses = [
    {
        title : "Math",
        description : "I love Math",
        duration : "1 Year"
    }
]


router.get('/', (req , res)=>{

    res.status(200).json({
        error:false,
        data:courses,
        msg:"All courses data fetched successfully"
    })

})


router.post('/',(req,res)=>{

    const {title , description , duration} = req.body

    courses.push(title,description,duration)
})