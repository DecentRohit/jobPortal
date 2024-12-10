
// all Controller
import nodemailer from 'nodemailer';
import ApplicantModel from '../models/applicantSchema.js';
import { getOne } from '../controllers/jobController.js';
import ejs from 'ejs';
import path from 'path';
import { fileURLToPath } from 'url';

import { dirname } from 'path';



const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const transporter = await nodemailer.createTransport({

    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS
    }
})

let renderTemplate = (data, relativePath) => {
    let htmlEjs;
    ejs.renderFile(path.join(__dirname, '../views/MailTemplates', relativePath),
        data,
        function (err, template) {
            if (err) {
                console.log(err)
            }
            htmlEjs = template;
        }

    )

    return htmlEjs;
}

export { transporter, renderTemplate };