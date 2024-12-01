
import mongoose from "mongoose";
import JobModel from "../Models/JobSchema.js"

export const getAll = async (req, res) => {

    try {
        const jobs = await JobModel.find({});

        res.render("jobs", { jobs, userInfo: req.session.userInfo });
    } catch (err) {
        console.log(err)
        res.render('somethingWentWrong')
    }
}
export const getOne = async (req, res) => {
    try {
        const job = await JobModel.findById(req.params.id);
        res.render('jobDetails', { job, userInfo: req.session.userInfo })

    } catch (err) {
        console.log(err)
        res.render('somethingWentWrong')
    }
}
export const deleteOne = async (req, res) => {
    await JobModel.findByIdAndDelete(req.params.id);
    console.log("job deleted sucessfully")
    getAll(req, res)
}
try {

} catch (err) {
    console.log(err)
    res.render('somethingWentWrong')
}
export const createJob = async (req, res) => {

    try {
        const newJob = await JobModel.create(req.body)
        newJob.save();
        console.log("job created successuflly")
        getAll(req, res)


    } catch (err) {
        console.log(err)
        res.render('somethingWentWrong')
    }
}
// export const editJob = async(req, res)=>{
//     try{
//         res.send("edit job details")

//     }catch(err){
//         console.log(err)
//     }

// }
export const apply = async (req, res) => {
    try {

        const job = await JobModel.findByIdAndUpdate(
            req.params.id ,  
     { $push: { applicants:new mongoose.Types.ObjectId(req.applicant) } },
        { new: true });
        console.log("applied for this job successfully")
        getOne(req, res)

    } catch (err) {
        console.log(err)
        res.render('somethingWentWrong')
    }

}
export const showUpdateForm = async (req, res) => {
    try {
        const job = await JobModel.findById(req.params.id);
        console.log(job)
        res.render('EditJobForm', { job, userInfo: req.session.userInfo })
    } catch (err) {
        console.log(err)
        res.render('somethingWentWrong')
    }
}
export const updateJob = async (req, res) => {
    try {
        const updateJob = await JobModel.findByIdAndUpdate(req.params.id, req.body)
        updateJob.save();
        console.log("job update successuflly")
        getOne(req, res)

    } catch (err) {
        console.log(err)
        res.render('somethingWentWrong')
    }
}
export const postJobForm = async (req, res) => {
    try {
        res.render('newJob', { userInfo: req.session.userInfo })
    } catch (err) {
        console.log(err)
        res.render('somethingWentWrong')
    }
}
