import express from "express";

import * as applicantController from "../controllers/applicantController.js"
import upload from "../middlewares/fileupload.js";

 export const applicantRoutes  = express.Router();

applicantRoutes.get('/' , applicantController.getallApplicants )

applicantRoutes.post('/' ,upload.single('file'), applicantController.addNewApplicant )
applicantRoutes.post('/:applicantId' , applicantController.getSingleApplicant)
applicantRoutes.delete('/:applicantId' , applicantController.deleteApplicant )

applicantRoutes.put('/:applicantId' , applicantController.updateApplicant)


// export default applicantRoutes;