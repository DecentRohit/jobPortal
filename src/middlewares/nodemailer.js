
// all Controller
import nodemailer from 'nodemailer';
const Mailer = async (req, res, next)=>{

    const userEmail = req.session.userInfo.userEmail;
    const transporter =  await nodemailer.createTransport({
    
        service : 'gmail' ,
        auth : {
            user : 'royrohit848@gmail.com' ,
            pass : process.env.PASS
        }
    })
    
    const mailOptions = {
        from : 'royrohit848@gmail.com' ,
        to : userEmail ,
        subject : 'Applied for new Job',
        text : 'Job application has been registered with us'
    }
    
    const sendMail =  await transporter.sendMail(mailOptions);
    sendMail();
    next();
}


export default Mailer;