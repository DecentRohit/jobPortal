import { renderTemplate, transporter } from "./nodemailer.js";

const Mailer = async (data) => {
    try {
     

        const { applicant, job} = data;
        let emailBody = await renderTemplate({ applicant , job}, "/userApplied.ejs")

        const mailOptions = {
            from: process.env.EMAIL,
            to: applicant.email,
            subject: 'Applied for new Job',
            html: emailBody || "<b>Your application has be registered with this Job id</b>" // html body
        }

        await transporter.sendMail(mailOptions);
        console.log("email sent")
    } catch (err) {
        console.log(err)

    }

}


export default Mailer;