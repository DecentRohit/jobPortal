import express from "express";

import * as AuthController from "../controllers/authController.js"
import checkAuth from "../middlewares/sessionAuth.js";
import { setLastVisit } from "../middlewares/lastVisit.js";

export const AuthRouter  = express.Router();

AuthRouter.post('/register' , AuthController.register )
AuthRouter.get('/' ,setLastVisit, AuthController.home )
AuthRouter.get('/loginPage' , AuthController.loginPage )
AuthRouter.post('/login' ,setLastVisit, AuthController.login )
AuthRouter.get('/logout' ,checkAuth , AuthController.logout )



