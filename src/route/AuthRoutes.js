import express from "express";

import * as AuthController from "../controllers/authController.js"
import checkAuth from "../middlewares/sessionAuth.js";

export const AuthRouter  = express.Router();

AuthRouter.post('/register' , AuthController.register )
AuthRouter.get('/' , AuthController.home )
AuthRouter.get('/loginPage' , AuthController.loginPage )
AuthRouter.post('/login' , AuthController.login )
AuthRouter.get('/logout' ,checkAuth , AuthController.logout )



