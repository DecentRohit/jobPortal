import ApplicantModel from "../models/applicantSchema.js";
import JobModel from "../Models/JobSchema.js";
import { getOne } from "./jobController.js";

export const getallApplicants = async (req, res) => {
   try{
    console.log(req.params)
    const job = await JobModel.findById(req.params.id).populate('applicants' ).exec();
    console.log(job.applicants)
    res.render('applicants' ,  {applicants :job.applicants , job})
}catch(err){
    req.flash('error' , "something gone wrong")
    console.log(err)
}
   } 



export const addNewApplicant = async (req, res, next) => {

    try {
        const { name, email, contact } = req.body;
        const { path } = req.file;
        const alreadyApplicant = await ApplicantModel.find({ email })
        if (alreadyApplicant.length > 0) {
          
            req.flash('error' , "Already applied for this job")
        
           
        } else {
            const newApplicant = await ApplicantModel.create({ name, email, contact, resumePath: path })
            console.log("new user created");
            newApplicant.save();
            req.applicant = newApplicant._id
            next();
        }


      
    } catch (err) {
        console.log(err)
    }

}
export const deleteApplicant = async (req, res) => {
 try{
    console.log("inside delete")
    const applicant =await  ApplicantModel.findById(req.params.applicantId)
    const job = await JobModel.findByIdAndUpdate(
        req.params.id,
        { $pull: { applicants: applicant._id } }, // Remove by ID
        { new: true } // Return the updated job document
    );
  await  job.save();
  req.flash('success' , "applicant removed from this Job profile")
  res.redirect('back')

 }  catch(err){
    console.log(err)
    req.flash('error' , "unable to remove applicant")
 }
   
}

export const updateApplicant = async (req, res) => {
    res.end("update applicant detail")

}
export const getSingleApplicant = async (req, res) => {
    const applicant = ApplicantModel.findById(req.params.applicantId)
    res.end("get req.params.applicantId applicant from req.params.id job")
}