import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    jobCategory:{
        type : String ,
        enum : ['Tech' , 'Non-Tech']
    } ,
    jobDesignation: String, 
    jobLocation: String,
    companyName: String,
    salary: String,
    
    numberOfOpenings: Number, 
    skillsRequired: [String],
    applyBy: Date, 
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
