import express from "express";

import * as applicantController from "../controllers/applicantController.js"
import upload from "../middlewares/fileupload.js";
import checkAuth from "../middlewares/sessionAuth.js";

export const applicantRoutes = express.Router({ mergeParams: true });
//starts from jobs/:id/applicants
applicantRoutes.get('/', checkAuth, applicantController.getallApplicants)

applicantRoutes.post('/', upload.single('file'), applicantController.addNewApplicant)
applicantRoutes.get('/:applicantId', applicantController.getSingleApplicant)
applicantRoutes.post('/:applicantId/delete', checkAuth, applicantController.deleteApplicant)

applicantRoutes.post('/:applicantId/update', upload.single('file'), applicantController.updateApplicant)


export default applicantRoutes;