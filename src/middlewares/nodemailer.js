

// to do

// nodemailer,
// JsonWebTokenError
// session cookieParser
// all Controller
import nodemailer from 'nodemailer';

const userEmail = 'todo'
const transporter = nodemailer.createTransport({

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

const sendMail = transporter.sendMail(mailOptions);

export default sendMail;