import express from "express";
import * as jobController from "../controllers/jobController.js"
import { applicantRoutes } from "./applicantRouter.js";




const jobRoutes  = express.Router();

jobRoutes.use('/:id/applicants' ,applicantRoutes )
jobRoutes.get('/' , jobController.getAll )
jobRoutes.get('/postJob' , jobController.postJobForm )
jobRoutes.post('/' , jobController.createJob )
jobRoutes.put('/:id' , jobController.editJob )
jobRoutes.delete('/:id' , jobController.deleteOne )
jobRoutes.get('/:id' , jobController.getOne )
jobRoutes.get('/:id/update' , jobController.showUpdateForm)
jobRoutes.post('/:id/update' , jobController.updateJob )



export default jobRoutes;
