
// all Controller
import nodemailer from 'nodemailer';
import ApplicantModel from '../models/applicantSchema.js';
import { getOne } from '../controllers/jobController.js';

const Mailer = async (req, res)=>{
try{
    const applicant = await ApplicantModel.findById(req.applicant)
    const applicantEmail = applicant.email;
    console.log(applicantEmail)
    const transporter =  await nodemailer.createTransport({
    
        service : 'gmail' ,
        auth : {
            user : 'royrohit848@gmail.com' ,
            pass : process.env.PASS
        }
    })
    
    const mailOptions = {
        from : 'royrohit848@gmail.com' ,
        to : applicantEmail ,
        subject : 'Applied for new Job',
        text : 'Job application has been registered with us'
    }
    
 await transporter.sendMail(mailOptions);
   
getOne(req,res)
}catch(err){
    console.log(err)

}
   
}


export default Mailer;