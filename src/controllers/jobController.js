import JobModel from "../Models/JobSchema.js"

export const getAll = async(req, res)=>{

try{
    const jobs = await JobModel.find({});
console.log(jobs)
    res.render("jobs" , {jobs})
}catch(err){
    console.log(err)
}
}
export const getOne = async(req, res)=>{
    try{

    }catch(err){
        console.log(err)
    }
}
export const deleteOne = async(req, res)=>{
    
}
try{

}catch(err){
    
}
export const createJob = async(req, res)=>{
 
    try{
        const newJob = await JobModel.create(req.body)
 newJob.save();
 console.log("job created successuflly")
getAll(req, res)


    }catch(err){
        console.log(err)
    }   
}
export const editJob = async(req, res)=>{
    try{
        res.send("edit job details")

    }catch(err){
        console.log(err)
    }
    
}
export const apply = async(req, res)=>{
    try{
        res.send("apply to a specific job by id , uploading a resume")
    }catch(err){
        console.log(err)
    } 
    
}
export const showUpdateForm = async(req, res)=>{
    try{

    }catch(err){
        console.log(err)
    }
}
export const updateJob = async(req, res)=>{
    try{

    }catch(err){
        console.log(err)
    }
}
export const postJobForm = async(req, res)=>{
    try{
        res.render('newJob')
    }catch(err){
        console.log(err)
    }
}
