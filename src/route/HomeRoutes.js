import express from "express";
import * as jobController from "../controllers/jobController.js"
import jobRoutes  from "./JobRoutes.js";
import { AuthRouter } from "./AuthRoutes.js";
import upload from "../middlewares/fileupload.js";
import { addNewApplicant } from "../controllers/applicantController.js";

const router = express.Router()

router.use('/jobs' , jobRoutes)
router.post('/apply/:id' ,upload.single('file') , addNewApplicant ,  jobController.apply)
router.use('/' , AuthRouter)
router.get('/404' , (req, res)=>{
    res.status(404).render('error' , { layout: false })
})



export default router;