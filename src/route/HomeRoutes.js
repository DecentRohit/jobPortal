import express from "express";
import * as jobController from "../controllers/jobController.js"
import jobRoutes  from "./JobRoutes.js";
import { AuthRouter } from "./AuthRoutes.js";

const router = express.Router()

router.use('/jobs' , jobRoutes)
router.get('/apply/:id' , jobController.apply)
router.use('/' , AuthRouter)
router.get('/404' , (req, res)=>{
    res.render('error')
})



export default router;