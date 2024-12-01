import ApplicantModel from "../models/applicantSchema.js";
import { getOne } from "./jobController.js";

export const getallApplicants = async (req, res) => {
    res.end("all application for req.params.id job")
}



export const addNewApplicant = async (req, res, next) => {
    console.log("inside addnewapplicant")
    try {
        const { name, email, contact } = req.body;
        const { path } = req.file;
        const alreadyApplicant = await ApplicantModel.find({ email })
        if (alreadyApplicant.length > 0) {
            console.log(alreadyApplicant.length)
            res.end("applied already for this job");
        
           
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
    res.end("delete req.params.applicantId applicant from req.params.id job")
}

export const updateApplicant = async (req, res) => {
    res.end("update applicant detail")

}
export const getSingleApplicant = async (req, res) => {
    res.end("get req.params.applicantId applicant from req.params.id job")
}