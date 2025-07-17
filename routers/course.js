
import express from "express";

const router = express.Router()

const courses = [
    {
        title : "Math",
        description : "I love Math",
        duration : "1 Year",
        id:1
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

    courses.push({title,description,duration , id: courses.length + 1})

    res.status(201).json({
        error:false,
        data:courses,
        msg:"Course Added"
    })

})



router.get('/:id' , (req , res)=>{

    const course = courses.find(data=> data.id == req.params.id)

    if (!course) {
        return res.status(404).json({
            error:true,
            data:null,
            msg: "Not Any Course Available At The Moment "
        })
    }

    res.status(200).json({
        error:false,
        data:course,
        msg:"Course Found Successful"
    })

})


export default router