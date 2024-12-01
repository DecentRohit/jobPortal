import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    Category:{
        type : String ,
        enum : ['Tech' , 'Non-Tech']
    } ,
    Designation: String, 
    Location: String,
    companyName: String,
    salary: String,
    
    numberOfOpenings: Number, 
    skillsRequired: [String],
    applyBy: Date, 
    postedOn: {
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
