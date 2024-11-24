import dotenv from "dotenv";
dotenv.config();
import express, { urlencoded } from "express";
import ejs from "ejs";
import router from "./src/Routes/HomeRoutes.js";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import expressLayouts from 'express-ejs-layouts';

const app  = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.urlencoded({ extended: true }));
// Set the views directory
app.set('views', path.join(__dirname, './src/views'));

// Set the view engine (e.g., EJS)
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressLayouts);
app.set('layout', 'layout'); // Points to `views/layout.ejs`
app.set("layout extractStyles" , true); //tell ejs where to put <link or script tag when encountered in pages
app.set("layout extractScripts" , true);
app.use('/' , router);




export default app;