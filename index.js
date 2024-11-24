import dotenv from "dotenv";
dotenv.config();
import express, { urlencoded } from "express";
import { router } from "./src/Routes/HomeRoutes.js";

export const app  = express();

app.use(express.urlencoded())
app.set('view engine' , ejs)
app.set('views', path.join(__dirname, './src/Views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/' , router);