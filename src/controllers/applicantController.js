import queue from "../../Config/kue.js";
import ApplicantModel from "../models/applicantSchema.js";
import JobModel from "../Models/JobSchema.js";

export const getallApplicants = async (req, res) => {
    try {

        const job = await JobModel.findById(req.params.id).populate('applicants').exec();

        res.render('applicants', { applicants: job.applicants, job })
    } catch (err) {
        req.flash('error', "something gone wrong")
        console.log(err)
    }
}



export const addNewApplicant = async (req, res, next) => {

    try {
        const jobId = req.params.id
        const { name, email, contact } = req.body;
        const { path } = req.file;
        const alreadyApplicant = await ApplicantModel.find({ email })
        if (alreadyApplicant.length > 0) {
            req.applicant = alreadyApplicant;
            console.log("user profile exist");
            next();

        } else {
            const newApplicant = await ApplicantModel.create({ name, email, contact, resumePath: path })
            await newApplicant.appliedFor.push(jobId)
            await newApplicant.save();
            console.log("new user created");
          
            req.flash('success', "new user created")
            req.applicant = newApplicant;
            next();
        }



    } catch (err) {
        console.log(err)
        req.flash('error', "failed to apply for this job")
        res.render('somethingWentWrong')
    }

}
export const deleteApplicant = async (req, res) => {

    try {
        const jobID = req.params.id;
        const applicant = await ApplicantModel.findByIdAndUpdate(req.params.applicantId, {
            $pull: { appliedFor: jobID }
        })
        const job = await JobModel.findByIdAndUpdate(
            jobID,
            { $pull: { applicants: applicant._id } }, // Remove by ID
            { new: true } // Return the updated job document
        );
        await job.save();
        req.flash('success', "applicant removed from this Job profile")
        res.redirect('back')

    } catch (err) {
        console.log(err)
        req.flash('error', "unable to remove applicant")
        res.render('somethingWentWrong')
    }

}

export const updateApplicant = async (req, res) => {


    try {
        const { name, email, contact } = req.body;
        const applicant = await ApplicantModel.findByIdAndUpdate(req.params.applicantId, { name, email, contact });
        await applicant.save()
        if (req.file) {
            const applicant = await ApplicantModel.findByIdAndUpdate(req.params.applicantId, { resumePath: req.file.path })
            applicant.save()
        }
        req.flash('success', "applicant data updated successfully")
        res.redirect('back')
    } catch (err) {
        console.log(err)
        res.render('somethingWentWrong')
    }

}
export const getSingleApplicant = async (req, res) => {
    try {
        const job = await JobModel.findById(req.params.id)
        const applicant = await ApplicantModel.findById(req.params.applicantId)
        res.render("applicantEditForm", { applicant, job })
    } catch (err) {
        console.log(err)
        req.flash('error', "unable to fetch applicant details")
        res.redirect('back')
    }
} 