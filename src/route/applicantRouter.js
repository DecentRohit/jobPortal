import express from "express";

import * as applicantController from "../controllers/applicantController.js"

 export const applicantRoutes  = express.Router();

applicantRoutes.get('/' , applicantController.getallApplicants )

applicantRoutes.post('/' , applicantController.addNewApplicant )
applicantRoutes.post('/:applicantId' , applicantController.getSingleApplicant)
applicantRoutes.delete('/:applicantId' , applicantController.deleteApplicant )

applicantRoutes.put('/:applicantId' , applicantController.updateApplicant)


// export default applicantRoutes;