
import mongoose from "mongoose";
import JobModel from "../Models/JobSchema.js"
import Mailer from "../middlewares/nodemailer.js";
import { compareSync } from "bcrypt";

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
    req.flash('success', "Job deleted successfully")
    getAll(req, res)
}
try {

} catch (err) {
    console.log(err)
    res.render('somethingWentWrong')
}
export const createJob = async (req, res) => {

    try {
        const newJob = await JobModel.create({
            ...req.body,
            postedBy: req.session.userInfo.userID
        })
        newJob.save();
        req.flash('success', "Created Successfully")
        getAll(req, res)


    } catch (err) {
        console.log(err)
        res.render('somethingWentWrong')
    }
}

export const apply = async (req, res) => {
    try {

        const job = await JobModel.findByIdAndUpdate(
            req.params.id,
            { $push: { applicants: new mongoose.Types.ObjectId(req.applicant) } },
            { new: true });
        job.save();
        req.flash('success', "applied for this job successfully")
        Mailer(req, res)
        res.redirect('back')
    } catch (err) {
        console.log(err)
        res.render('somethingWentWrong')
    }

}
export const showUpdateForm = async (req, res) => {
    try {
        const job = await JobModel.findById(req.params.id);
        console.log(job)
        res.render('EditJobForm', { job })
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
        req.flash('success', "job Updated successfully")
        getOne(req, res)

    } catch (err) {
        console.log(err)
        res.render('somethingWentWrong')
    }
}
export const postJobForm = async (req, res) => {
    try {
        res.render('newJob')
    } catch (err) {
        console.log(err)
        res.render('somethingWentWrong')
    }
}
