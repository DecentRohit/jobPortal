import express from "express";
import * as jobController from "../controllers/jobController.js"
import { applicantRoutes } from "./applicantRouter.js";
import checkAuth from "../middlewares/sessionAuth.js";




const jobRoutes  = express.Router();

jobRoutes.use('/:id/applicants' ,checkAuth ,applicantRoutes )
jobRoutes.get('/' , jobController.getAll )
jobRoutes.get('/postJob' ,checkAuth , jobController.postJobForm )
jobRoutes.post('/' , checkAuth , jobController.createJob )
jobRoutes.put('/:id' , checkAuth , jobController.editJob )
jobRoutes.delete('/:id' , jobController.deleteOne )
jobRoutes.get('/:id' , jobController.getOne )
jobRoutes.get('/:id/update' , checkAuth , jobController.showUpdateForm)
jobRoutes.post('/:id/update' , checkAuth ,jobController.updateJob )



export default jobRoutes;
