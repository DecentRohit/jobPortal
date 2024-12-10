import mongoose from "mongoose";

const applicantSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true,
        match: /^\d{10}$/, // Matches 10-digit mobile numbers
        trim: true
    },
    resumePath: {
        type: String  // stores only path
    },
    appliedFor : [{
       type : mongoose.Schema.Types.ObjectId,
       ref : 'Job'
    }]
})

const ApplicantModel = mongoose.model('Applicant', applicantSchema);
export default ApplicantModel;