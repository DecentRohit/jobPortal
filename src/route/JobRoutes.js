import express from "express";
import * as jobController from "../controllers/jobController.js"
import { applicantRoutes } from "./applicantRouter.js";




const jobRoutes  = express.Router();

jobRoutes.use('/:id/applicants' ,applicantRoutes )
jobRoutes.get('/' , jobController.getAll )

jobRoutes.post('/' , jobController.createJob )
jobRoutes.put('/:id' , jobController.editJob )
jobRoutes.delete('/:delete' , jobController.deleteOne )
jobRoutes.get('/:id' , jobController.getOne )


export default jobRoutes;
