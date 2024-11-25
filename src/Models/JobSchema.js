import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    jobCategory: String, 
    jobDesignation: String, 
    jobLocation: String,
    companyName: String,
    salary: String,
    applyBy: Date, 
    skillsRequired: [String],
    numberOfOpenings: Number, 
    jobPosted: {
        type: Date, 
        default: Date.now
    },
    applicants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User' // Reference to the User model
        }
    ]
});

const JobModel = mongoose.model('Job', jobSchema);
export default JobModel;
