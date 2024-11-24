import express from "express";

import * as AuthController from "../controllers/authController.js"

export const AuthRouter  = express.Router();

AuthRouter.post('/register' , AuthController.register )

AuthRouter.get('/' , AuthController.loginPage )
AuthRouter.post('/login' , AuthController.login )
AuthRouter.post('/logout' , AuthController.logout )



